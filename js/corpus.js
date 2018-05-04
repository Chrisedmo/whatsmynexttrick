/*
 * WTF Engine
 * https://github.com/soulwire/WTFEngine
 *
 * Copyright 2011, Justin Windle
 * http://blog.soulwire.co.uk/
 * Code Licensed under the MIT licence.
 * https://github.com/soulwire/WTFEngine/blob/master/MIT-LICENSE.txt
 *
 * Concept based on WTFSIMFD
 * http://whatthefuckshouldimakefordinner.com/
 * by Zach Golden
 * http://www.zachgolden.com/
 *
 */
 
var templates = [
	"@intro @rotate @natural @soul",
	"@intro @rotate @natural @boot",	
	"@spin @natural @boot",
	"@spin @natural @soul",
	"@intro @rotate @variation @natural @soul",
	"@intro @rotate @variation @natural @soul",	
	"@intro @rotate @natural @boot @out out",
	"@intro @rotate @natural @soul @out out"
];

var phrases = [
	"Put down the viking hat hulgreen and do a fucking",
	"Haul ass and pull a fucking",
	"Get your shit together and rip a fucking",
	"This shit will blow your mind - a fucking",
	"Show those scooter cunts how it's done with a fucking",
	"Wax that ledge and do a fucking",
	"Tighten your boots and drop a fucking",
	"Tuck in them balls and roast a fucking"
];

var labels = [
	"I've already fucking nailed that",
	"That looks fucking shit",
	"No one can fucking do that",
	"pfff - thats fucking easy",
	"Only Chris Fucking Farmer can do that!",
	"Roadhouse fucking invented that"
];

/*
	Auto Generated from WTF.csv
*/

corpus = {};

corpus.intro		 = ["","Fakie",];
corpus.spin			=["zero spin","hurricane","in spin","truespin","illusion"];
corpus.rotate		 = ["180","360","540","720"];
corpus.variation	=["","topside","negative"];
corpus.natural		=["","switch"];
corpus.soul			 = ["makio","soul","mizou","rockio","acid","pornstar","x-grind","torque soul","soyale","mistrial","sweatstance","byn soul","training wheel","fishbrain",];
corpus.boot 		=["backslide","royale","torque","nugen","frontside","backside","unity","savannah","fastslide","pudslide","christ","wheelbarrow",];
corpus.out			=["180","360","540","720","revert","cess slide","rewind",]