var DYMO_CONTEXT = {
	"@context": {
		"@base": "http://tiny.cc/dymo-context/",
		"xsd": "http://www.w3.org/2001/XMLSchema#",
		"rdfs": "http://www.w3.org/2000/01/rdf-schema#",
		"owl": "http://www.w3.org/2002/07/owl#",
		"sch": "http://schema.org/",
		"mo": "http://purl.org/ontology/mo/",
		"mt": "http://purl.org/ontology/studio/multitrack#",
		"ch": "http://tiny.cc/charm-ontology#",
		"dy": "http://tiny.cc/dymo-ontology#",
		"mb": "http://tiny.cc/mobile-audio-ontology#",
		"name": "sch:name",
		"cdt": { "@id": "ch:cdt", "@type": "@vocab" },
		"adt": { "@id": "ch:adt", "@type": "@vocab" },
		"value": "ch:value",
		"parts": "ch:hasPart",
		"Dymo": "dy:Dymo",
		"DymoType": "dy:DymoType",
		"Conjunction": "dy:Conjunction",
		"Disjunction": "dy:Disjunction",
		"Sequence": "dy:Sequence",
		"Feature": "dy:Feature",
		"Parameter": "dy:Parameter",
		"FeatureType": "dy:FeatureType",
		"ParameterType": "dy:ParameterType",
		"level": "dy:LevelFeature",
		"index": "dy:IndexFeature",
		"onset": "dy:OnsetFeature",
		"pitch": "dy:PitchFeature",
		"duration": "dy:DurationFeature",
		"time": "dy:TimeFeature",
		"segmentLabel": "dy:SegmentLabelFeature",
		"CustomFeature": "dy:CustomFeature",
		"AudioParameter": "dy:AudioParameter",
		"hasStandardValue": "dy:hasStandardValue",
		"isInteger": "dy:isInteger",
		"Play": "dy:Play",
		"Loop": "dy:Loop",
		"Onset": "dy:Onset",
		"DurationRatio": "dy:DurationRatio",
		"Amplitude": "dy:Amplitude",
		"PlaybackRate": "dy:PlaybackRate",
		"TimeStretchRatio": "dy:TimeStretchRatio",
		"Pan": "dy:Pan",
		"Distance": "dy:Distance",
		"Height": "dy:Height",
		"Reverb": "dy:Reverb",
		"Delay": "dy:Delay",
		"Filter": "dy:Filter",
		"StructuralParameter": "dy:StructuralParameter",
		"PartCount": "dy:PartCount",
		"PartDurationRatio": "dy:PartDurationRatio",
		"PartProportion": "dy:PartProportion",
		"CustomParameter": "dy:CustomParameter",
		"source": { "@id": "dy:hasSource", "@type": "xsd:string" },
		"parameters": { "@id": "dy:hasParameter", "@type": "@vocab" },
		"features": { "@id": "dy:hasFeature", "@type": "@vocab" },
		"paramType": { "@id": "dy:hasParameterType", "@type": "@vocab" },
		"featureType": { "@id": "dy:hasFeatureType", "@type": "@vocab" },
		"similars": "dy:hasSimilar",
		"successors": "dy:hasSuccessor",
		"Rendering": "mb:Rendering",
		"Mapping": "mb:Mapping",
		"Function": "mb:Function",
		"MobileControl": "mb:MobileControl",
		"SensorControl": "mb:SensorControl",
		"UiControl": "mb:UiControl",
		"AutoControl": "mb:AutoControl",
		"AccelerometerX": "mb:AccelerometerX",
		"AccelerometerY": "mb:AccelerometerY",
		"AccelerometerZ": "mb:AccelerometerZ",
		"TiltX": "mb:TiltX",
		"TiltY": "mb:TiltY",
		"TiltZ": "mb:TiltZ",
		"GeolocationLatitude": "mb:GeolocationLatitude",
		"GeolocationLongitude": "mb:GeolocationLongitude",
		"GeolocationDistance": "mb:GeolocationDistance",
		"CompassHeading": "mb:CompassHeading",
		"Beacon": "mb:Beacon",
		"Slider": "mb:Slider",
		"Toggle": "mb:Toggle",
		"Button": "mb:Button",
		"CustomControl": "mb:CustomControl",
		"Random": "mb:Random",
		"Brownian": "mb:Brownian",
		"Ramp": "mb:Ramp",
		"MobileParameter": "mb:MobileParameter",
		"GlobalParameter": "mb:GlobalParameter",
		"ControlParameter": "mb:ControlParameter",
		"ListenerOrientation": "mb:ListenerOrientation",
		"AutoControlFrequency": "mb:AutoControlFrequency",
		"AutoControlTrigger": "mb:AutoControlTrigger",
		"BrownianMaxStepSize": "mb:BrownianMaxStepSize",
		"LeapingProbability": "mb:LeapingProbability",
		"ContinueAfterLeaping": "mb:ContinueAfterLeaping",
		"Navigator": "mb:Navigator",
		"OneShotNavigator": "mb:OneShotNavigator",
		"RepeatedNavigator": "mb:RepeatedNavigator",
		"SequentialNavigator": "mb:SequentialNavigator",
		"SimilarityNavigator": "mb:SimilarityNavigator",
		"GraphNavigator": "mb:GraphNavigator",
		"DomainDimension": "mb:DomainDimension",
		"MappingTarget": "mb:MappingTarget",
		"MappingRange": "mb:MappingRange",
		"MappingOwners": "mb:MappingOwners",
		"dymo": { "@id": "mb:hasDymo", "@type": "@id" },
		"mappings": "mb:hasMapping",
		"domainDims": { "@id": "mb:hasDomainDimension", "@type": "@vocab" },
		"function": "mb:hasFunction",
		"args": "mb:hasArgument",
		"body": "mb:hasBody",
		"targets": { "@id": "mb:toTarget", "@type": "@id" },
		"range": { "@id": "mb:hasRange", "@type": "@vocab" },
		"relative": { "@id": "mb:isRelative", "@type": "xsd:boolean" },
		"init": { "@id": "mb:hasInitialValue", "@type": "xsd:float" },
		"smooth": { "@id": "mb:isSmooth", "@type": "xsd:boolean" },
		"average": { "@id": "mb:isAverageOf", "@type": "xsd:integer" },
		"uuid": { "@id": "mb:hasUuid", "@type": "xsd:string" },
		"major": { "@id": "mb:hasMajor", "@type": "xsd:integer" },
		"minor": { "@id": "mb:hasMinor", "@type": "xsd:integer" },
		"rampDuration": { "@id": "mb:hasDuration", "@type": "xsd:integer" },
		"navigators": "mb:hasNavigator",
		"dymos": "mb:navDymos"
	}
}

var DYMO_SIMPLE_CONTEXT = {
	"@context": {
		"@base": "http://tiny.cc/dymo-context/",
		"xsd": "http://www.w3.org/2001/XMLSchema#",
		"rdfs": "http://www.w3.org/2000/01/rdf-schema#",
		"owl": "http://www.w3.org/2002/07/owl#",
		"sch": "http://schema.org/",
		"mo": "http://purl.org/ontology/mo/",
		"mt": "http://purl.org/ontology/studio/multitrack#",
		"ch": "http://tiny.cc/charm-ontology#",
		"dy": "http://tiny.cc/dymo-ontology#",
		"mb": "http://tiny.cc/mobile-audio-ontology#",
		"name": "sch:name",
		"cdt": "ch:cdt",
		"adt": "ch:adt",
		"value": "ch:value",
		"parts": "ch:hasPart",
		"Dymo": "dy:Dymo",
		"DymoType": "dy:DymoType",
		"Conjunction": "dy:Conjunction",
		"Disjunction": "dy:Disjunction",
		"Sequence": "dy:Sequence",
		"Feature": "dy:Feature",
		"Parameter": "dy:Parameter",
		"FeatureType": "dy:FeatureType",
		"ParameterType": "dy:ParameterType",
		"level": "dy:LevelFeature",
		"index": "dy:IndexFeature",
		"onset": "dy:OnsetFeature",
		"pitch": "dy:PitchFeature",
		"duration": "dy:DurationFeature",
		"time": "dy:TimeFeature",
		"segmentLabel": "dy:SegmentLabelFeature",
		"CustomFeature": "dy:CustomFeature",
		"AudioParameter": "dy:AudioParameter",
		"hasStandardValue": "dy:hasStandardValue",
		"isInteger": "dy:isInteger",
		"Play": "dy:Play",
		"Loop": "dy:Loop",
		"Onset": "dy:Onset",
		"DurationRatio": "dy:DurationRatio",
		"Amplitude": "dy:Amplitude",
		"PlaybackRate": "dy:PlaybackRate",
		"TimeStretchRatio": "dy:TimeStretchRatio",
		"Pan": "dy:Pan",
		"Distance": "dy:Distance",
		"Height": "dy:Height",
		"Reverb": "dy:Reverb",
		"Delay": "dy:Delay",
		"Filter": "dy:Filter",
		"StructuralParameter": "dy:StructuralParameter",
		"PartCount": "dy:PartCount",
		"PartDurationRatio": "dy:PartDurationRatio",
		"PartProportion": "dy:PartProportion",
		"CustomParameter": "dy:CustomParameter",
		"source": "dy:hasSource",
		"parameters": "dy:hasParameter",
		"features": "dy:hasFeature",
		"paramType": "dy:hasParameterType",
		"featureType": "dy:hasFeatureType",
		"similars": "dy:hasSimilar",
		"successors": "dy:hasSuccessor",
		"Rendering": "mb:Rendering",
		"Mapping": "mb:Mapping",
		"Function": "mb:Function",
		"MobileControl": "mb:MobileControl",
		"SensorControl": "mb:SensorControl",
		"UiControl": "mb:UiControl",
		"AutoControl": "mb:AutoControl",
		"AccelerometerX": "mb:AccelerometerX",
		"AccelerometerY": "mb:AccelerometerY",
		"AccelerometerZ": "mb:AccelerometerZ",
		"TiltX": "mb:TiltX",
		"TiltY": "mb:TiltY",
		"TiltZ": "mb:TiltZ",
		"GeolocationLatitude": "mb:GeolocationLatitude",
		"GeolocationLongitude": "mb:GeolocationLongitude",
		"GeolocationDistance": "mb:GeolocationDistance",
		"CompassHeading": "mb:CompassHeading",
		"Beacon": "mb:Beacon",
		"Slider": "mb:Slider",
		"Toggle": "mb:Toggle",
		"Button": "mb:Button",
		"CustomControl": "mb:CustomControl",
		"Random": "mb:Random",
		"Brownian": "mb:Brownian",
		"Ramp": "mb:Ramp",
		"MobileParameter": "mb:MobileParameter",
		"GlobalParameter": "mb:GlobalParameter",
		"ControlParameter": "mb:ControlParameter",
		"ListenerOrientation": "mb:ListenerOrientation",
		"AutoControlFrequency": "mb:AutoControlFrequency",
		"AutoControlTrigger": "mb:AutoControlTrigger",
		"BrownianMaxStepSize": "mb:BrownianMaxStepSize",
		"LeapingProbability": "mb:LeapingProbability",
		"ContinueAfterLeaping": "mb:ContinueAfterLeaping",
		"Navigator": "mb:Navigator",
		"OneShotNavigator": "mb:OneShotNavigator",
		"RepeatedNavigator": "mb:RepeatedNavigator",
		"SequentialNavigator": "mb:SequentialNavigator",
		"SimilarityNavigator": "mb:SimilarityNavigator",
		"GraphNavigator": "mb:GraphNavigator",
		"DomainDimension": "mb:DomainDimension",
		"MappingTarget": "mb:MappingTarget",
		"MappingRange": "mb:MappingRange",
		"MappingOwners": "mb:MappingOwners",
		"dymo": "mb:hasDymo",
		"mappings": "mb:hasMapping",
		"domainDims": "mb:hasDomainDimension",
		"function": "mb:hasFunction",
		"args": "mb:hasArgument",
		"body": "mb:hasBody",
		"targets": "mb:toTarget",
		"range": "mb:hasRange",
		"relative": "mb:isRelative",
		"init": "mb:hasInitialValue",
		"smooth": "mb:isSmooth",
		"average": "mb:isAverageOf",
		"uuid": "mb:hasUuid",
		"major": "mb:hasMajor",
		"minor": "mb:hasMinor",
		"rampDuration": "mb:hasDuration",
		"navigators": "mb:hasNavigator",
		"dymos": "mb:navDymos"
	}
}