var iFileName = "Homebrew Syntax - stupefying touch.js";
SpellsList["stupefying touch"] = { 
	
	name : "Stupefying Touch", 
	
	source : ["HB", 0], 
	
	ritual : false, 
	
	level : 0,
	
	time : "1 a", 
	
	range : "Touch",
	
	components : "", 
	
	duration : "one round", 

	save : "Wis", 

	description : "Stun and feed off of a creature already enchanted by Siren Song", 
	
	descriptionFull : "Target must already be charmed with Siren Song and then physically touched. The creature must succeed on a DC 18 wisdom saving throw or take 3d6 + 3 psychic damage and is stunned until your next turn.",
	
	firstCol : "atwill", 
	
	dependencies : [], //Optional; An array of spells (SpellsList object names) that will be put in the rows below this spell when this spell is added to the spell sheet
	
	psionic : true, //Optional; If you set this to true, the sheet will treat this spell as a psionic talent/discipline
};
