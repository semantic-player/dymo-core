import { SuperDymoStore } from '../globals/types';
import { PLAY } from '../globals/uris';

/**
 * A rendering defines how a given dymo is played back.
 */
export class Rendering {

	private dymoUri;
	//private navigator: DymoNavigator;

	constructor(dymoUri: string, private store: SuperDymoStore) {
		this.dymoUri = dymoUri;
		//this.navigator = new DymoNavigator(this.dymoUri, this.store, new SequentialNavigator(this.dymoUri, this.store));
	}

	play() {
		if (this.dymoUri) {
			this.store.setParameter(this.dymoUri, PLAY, 1);
		}
	}

	stop() {
		if (this.dymoUri) {
			this.store.setParameter(this.dymoUri, PLAY, 0);
		}
	}

	/*addSubsetNavigator(boundVar: BoundVariable, nav: SubsetNavigator) {
		this.navigator.addSubsetNavigator(boundVar, nav);
	}

	getNavigator(): DymoNavigator {
		return this.navigator;
	}*/

}
