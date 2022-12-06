var skillList = "";
var skillTotal = 0;
function addSkill() {
	var skills = document.getElementById("addSkill").value;
	if (skills != "") {
		skillList += "<li><span name='skillItem' id='skillItem" + skillTotal + "'>" + skills + "</span> " +
			"<a onclick='removeSkill()'>-</a></li>";
		skillTotal++;
		document.getElementById("skill").innerHTML = skillList;
		document.getElementById("addSkill").value = "";
	}
}
function removeSkill() {
	skillList = "";
	var items = document.querySelectorAll("#skill li"), index, tab = [];
	for (var j = 0; j < items.length; j++) {
		tab.push(items[j].innerHTML);
	}
	for (var j = 0; j < items.length; j++) {
		items[j].onclick = function () {

			index = tab.indexOf(this.innerHTML);
			items[index].parentNode.removeChild(items[index]);
			tab.splice(j, 1);
		};
	}
	console.log(tab);
}