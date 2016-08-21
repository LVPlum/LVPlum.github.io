
(function(){
	var ability = {
	'HTML':'80%',
	'CSS':'82%',
	'JavaScript':'60%',
	'JQuery':'60%',
	'PhotoShop':'30%',
	'D3.js':'50%',
	'AngularJs':'30%',
	'Axure':'71%',
	'php':'25%'
	};

	function addSkillValue() {
		var skill = document.querySelector('.skill');		
		for(var i in ability) {
			var item = document.createElement('div');
			item.innerHTML = i + '<div><div style="width:'+ ability[i] +  '"></div></div> '
			skill.appendChild(item);
		}
	

	
/*		
		for (var i = 0,len=skillName.length; i <len ; i++) {
			var item = document.createElement('div');
			item.innerHTML = '<div style="width:'+ ability[ skillName[0].innerText ] +  '"></div> '
			skillName[i].appendChild(item);
		}*/
	
	/*
		for (var i = 0; i < skillName.length; i++) {
			var item = document.createElement('div');
			item.style.width =  ability[skillName[0].innerText];
			skill.appendChild(item);
		}*/
	/*
		for (var i = 0; i < skillName.length; i++) {
			var wrap = document.createElement('div');
			var item = document.createElement('div');
			var skillTemp = skillName[i];
			console.log(skillName[i]);	
			item.style.width =  ability[ skillName[0].innerText ];
			wrap.appendChild(item);
	//		skill.appendChild(wrap);
	//		skillName[i].appendChild(wrap);
		}
	*/
	}

	addSkillValue();

}())


