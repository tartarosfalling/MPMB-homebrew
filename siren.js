var iFileName = "Homebrew Syntax - siren.js";
RaceList["siren"] = { 
 
    regExpSearch : /siren/i,
    name : "Siren",
    source : ["HB", 0],
   
    plural : "Sirens",
    size : 3,
    speed : {
 
        walk : { spd :25, enc : 15 },
        swim : { spd : 30, enc : 20 },
        fly : { spd : 30, enc : 20 },
        climb : { spd : 15, enc : 5 },
    		},
   
    languageProfs :  ["Common", "Aquan", "Sylvan", "Primordial"],
   
    vision : ["Darkvision", 120],

    dmgres : [["lightning", "light. (nonmagical)"], ["thunder", "thund. (nonmagical)"], ["cold", "cold (nonmagical)"]], 

    savetxt : { 
          // immune : ["lightning", "thunder", "cold", "pressure"], 
	  // adv_vs : ["charm", "mind control"],
          text: ["Immune to environmental effects of cold, lightning, pressure, and thunder;\nAdv. on saves vs. charm and mind control"],
          },
   
    skills : ["Persuasion", "Deception"],
 
    improvements : "Siren +2 Charisma;",
   
    scores : [0, 0, 0, 0, 0, 2],

    trait : "Siren (+2 Charisma)\nAmphibious: I can breathe both air and water with equal ease.\nTrance: Sirens don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nEmissary of the Sea: I can communicate simple ideas to beasts that can breathe water. They can understand the meaning of my words, though I have no special ability to understand them in return.\nSiren Song: I can innately cast the following spells, requiring no material components: charm, invisibility, stupefying touch, unearthly chorus.\nElemental Touch: I can innately cast Fog Cloud. Once I reach 3rd level, I can cast Gust of Wind with it. Once I reach 5th level, I can cast Wall of Water with it.",
	
    abilitySave : 6,
 
    spellcastingAbility : 6,
  
  	spellcastingBonus : { 
      
		  name : "Siren Song",
		
		  level : [0, 4], //Optional; The lower and upper limit of spell levels that the class has access to.
		
		  ritual : false, 
      
		  spells : ["charm person", "invisibility", "stupefying touch"], //Optional, but required if not including the "class" entry; If a "spells" array is present, all other objects will be ignored and only this list of spells will populate the list of available spells. each entry has to match the name of the spell in the SpellsList
		
		  times : 3, 
		  prepared : true, 
		
		  atwill : true, 
		  action: ["action",]
		  },
      
    features : { 
    		"unearthly chorus" : {
		
			name : "unearthly chorus", 
			minlevel : 1, 
			usages : 1, 
     			components: "",
      			prepared : true, 
			recovery : "long rest", 
			tooltip : "Siren Song (lr)",
			spellcastingBonus : { 
				name : "Siren Song (lr)",
				spells : ["unearthly chorus"],
				selection : ["unearthly chorus"],
       			 oncelr : true, },
			},

		"fog cloud" : {
		
			name : "fog cloud", 
			minlevel : 1, 
			usages : 1, 
     			components: "",
      			prepared : true, 
			recovery : "long rest", 
			tooltip : "Elemental Touch (level 1)",
			spellcastingBonus : { 
				name : "Elemental Touch (level 1)",
				spells : ["fog cloud"],
				selection : ["fog cloud"],
       			 oncelr : true, },
			},
    
    "gust of wind" : { 
		
			name : "gust of wind", 
			minlevel : 3, 
			usages : 1, 
      			prepared : true,
			recovery : "long rest", 
			tooltip : "Elemental Touch (level 3)",
			spellcastingBonus : { 
				name : "Elemental Touch (level 3)",
				spells : ["gust of wind"],
				selection : ["gust of wind"],
        oncelr : true, },
			},
    
     "wall of water" : { 
		
			name : "wall of water", 
			minlevel : 5, 
			usages : 1, 
      			prepared : true,
			recovery : "long rest", 
			tooltip : "Elemental Touch (level 5)",
			spellcastingBonus : { 
				name : "Elemental Touch (level 5)",
				spells : ["wall of water"],
				selection : ["wall of water"],
        		oncelr : true, },
			},
  }
  
};
