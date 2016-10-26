/**
 * A class for easy access of all dymo core functionality.
 * @constructor
 * @param {Object=} $scope angular scope (optional, uicontrols will call $scope.$apply())
 * @param {Function=} onPlaybackChange (optional)
 */
function DymoManager(audioContext, scheduleAheadTime, reverbFile, callback, $scope, onPlaybackChange) {

	DYMO_STORE = new DymoStore(callback);
	var scheduler = new Scheduler(audioContext, onPlaybackChange);
	if (!isNaN(scheduleAheadTime)) {
		SCHEDULE_AHEAD_TIME = scheduleAheadTime;
	}
	var topDymos;
	var rendering;
	var uiControls = {};
	var sensorControls = {};

	this.loadDymoAndRenderingFromStore = function(newStore, callback) {
		var loader = new DymoLoader(newStore);
		processLoadedDymoAndRendering(loader.createDymoFromStore(), loader.createRenderingFromStore());
		scheduler.loadBuffers(rendering.getDymoUri(), callback);
	}

	this.loadDymoAndRendering = function(dymoUri, renderingUri, dymoCallback, buffersCallback) {
		var loader = new DymoLoader(DYMO_STORE);
		loader.loadDymoFromJson(dymoUri, function(loadedDymos) {
			loader.loadRenderingFromJson(renderingUri, function(loadedRendering) {
				processLoadedDymoAndRendering(loadedDymos, loadedRendering);
				scheduler.loadBuffers(loadedDymos, buffersCallback);
				if (dymoCallback) {
					dymoCallback();
				}
			});
		});
	}

	function processLoadedDymoAndRendering(loadedDymos, loadedRendering) {
		topDymos = loadedDymos;
		rendering = loadedRendering[0];
		for (var key in loadedRendering[1]) {
			var currentControl = loadedRendering[1][key];
			if (DYMO_STORE.isSubclassOf(currentControl.getType(), UI_CONTROL)) {
				uiControls[key] = new UIControl(currentControl, $scope);
			}
			if (DYMO_STORE.isSubclassOf(currentControl.getType(), SENSOR_CONTROL)) {
				sensorControls[key] = currentControl;
			}
		}
		if (!reverbFile) {
			reverbFile = 'bower_components/dymo-core/audio/impulse_rev.wav';
		}
		scheduler.init(reverbFile);
	}

	this.loadDymoFromJson = function(jsonDymo, callback) {
		var loader = new DymoLoader(DYMO_STORE);
		loader.loadDymoFromJson(jsonDymo, callback);
	}

	this.parseDymoFromJson = function(jsonDymo, callback) {
		var loader = new DymoLoader(DYMO_STORE);
		loader.parseDymoFromJson(jsonDymo, callback);
	}

	this.replacePartOfTopDymo = function(index, dymoUri) {
		var oldDymo = DYMO_STORE.replacePartAt(topDymos[0], dymoUri, index);
		scheduler.stop(oldDymo);
	}

	this.updateNavigatorPosition = function(dymoUri, level, position) {
		scheduler.updateNavigatorPosition(dymoUri, level, position);
	}

	this.getNavigatorPosition = function(dymoUri, level) {
		return scheduler.getNavigatorPosition(dymoUri, level);
	}

	//sync the first navigator for syncDymo to the position of the first for goalDymo on the given level
	this.syncNavigators = function(syncDymo, goalDymo, level) {
		scheduler.syncNavigators(syncDymo, goalDymo, level);
	}

	this.startPlayingUri = function(dymoUri) {
		scheduler.play(dymoUri);
	}

	this.stopPlayingUri = function(dymoUri) {
		scheduler.stop(dymoUri);
	}

	this.startPlaying = function() {
		for (var i = 0; i < topDymos.length; i++) {
			DYMO_STORE.updatePartOrder(topDymos[i], ONSET);
			//topDymos[i].updatePartOrder(ONSET); //TODO WHERE TO PUT THIS??
			scheduler.play(topDymos[i], rendering.getNavigator());
		}
	}

	this.stopPlaying = function() {
		for (var i = 0; i < topDymos.length; i++) {
			scheduler.stop(topDymos[i]);
		}
	}

	this.getTopDymo = function() {
		return topDymos[0];
	}

	this.getRendering = function() {
		return rendering;
	}

	this.getUIControls = function() {
		return uiControls;
	}

	this.getUIControl = function(key) {
		return uiControls[key];
	}

	this.getSensorControls = function() {
		return sensorControls;
	}

}
