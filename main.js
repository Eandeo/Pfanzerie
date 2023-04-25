//function for changing the sun and watering can if selected
function onRadioImgClick(imgType) {
	if (settingsIsClicked === true) {
		setRadioAmount(imgType);
		//hier muss noch der Wert im JSON überschrieben werden.
	}
}

function getRadioValue(imgType) {
	const radioValue = document.querySelector('input[name="' + imgType + 'Amount"]:checked').value;
	console.log("getRadiofunction gets " + radioValue);
	return radioValue;
}
//sets the amount of selected amounts x/5
function setRadioAmount(imgType) {
	const amount = getRadioValue(imgType);

	for (var i = 1; i <= amount; i++) {
		document.getElementById(imgType + "-amount-" + i).classList.add("drinkcardSelected");
		document.getElementById(imgType + "-amount-" + i).classList.remove("drinkcardUnselected");
	}
	for (var i = 5; i > amount; i--) {
		document.getElementById(imgType + "-amount-" + i).classList.replace("drinkcardSelected", "drinkcardUnselected");
	}
	console.log(imgType + "Amount is " + i);
}

//change the symbol of the settings button when clicked + sets the change mode
let settingsIsClicked = false;
function changeSettings() {
	if (!settingsIsClicked) {
		document.getElementById("settings").classList.replace("settingsOn", "settingsClose");
		settingsIsClicked = true;
	} else {
		document.getElementById("settings").classList.replace("settingsClose", "settingsOn");
		settingsIsClicked = false;
	}
	const noHover = document.querySelectorAll(".cardRadios");
	noHover.forEach(noHover => {
		noHover.classList.toggle("noHover");
	});
}

function showAddPlantForm(status) {
	if (status) {
		document.getElementById("plantForm").classList.remove("plantFormHidden");
		setRadiosToThree();
		console.log("Show add form");
	} else {
		document.getElementById("plantForm").classList.add("plantFormHidden");
	}
}

//Submiting the addPlantForm 
let plantForm = document.getElementById("plantForm");

plantForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const plantName = document.getElementById("plant-name").value;
	const plantRoom = document.getElementById("plant-room").value;
	const plantWater = document.querySelector('input[name="formWaterAmount"]:checked').value;
	const plantLight = document.querySelector('input[name="formLightAmount"]:checked').value;
	const plantDescription = document.getElementById("form-plant-description").value;

	const newPlantdata = {
		"name": plantName,
		"room": plantRoom,
		"waterAmount": plantWater,
		"lightAmount": plantLight,
		"description": plantDescription
	};

	const newPlantJson = JSON.stringify(newPlantdata);
	console.log(newPlantJson);

	e.target.reset();
	document.getElementById("plantForm").classList.add("plantFormHidden");

	document.getElementById("name").innerHTML = newPlantdata["name"];
	document.getElementById("about").innerHTML = newPlantdata["description"];
	document.getElementById("input-water-amount-" + newPlantdata["waterAmount"]).checked = true;
	setRadioAmount('water');
	document.getElementById("input-light-amount-" + newPlantdata["lightAmount"]).checked = true;
	setRadioAmount('light');
	//bug---wenn auf bereits gewählten Wert gesetzt wird, wird der neue Wert falsch gesetzt?

});



//object for 1st plant
const plant1 = {
	id: 1,
	name: "Friedenslilie",
	room: "Wohnzimmer",
	img: "plants/einblatt.jpg",
	waterAmount: 5,
	lightAmount: 4,
	description: "Das Einblatt ist wegen ihrer kleinen weißen Blüten sehr beliebt. Dieser Pflanze wird in Deutschland auch Scheidenblatt, Friedenslilie, Blattfahne oder Spathiphyllum genannt. Die Spathiphyllum kommt ursprünglich aus Brasilien. Die Pflanzenfamilie ist Araceae."
}
//loads data for 1st plant
document.getElementById("name").innerHTML = plant1["name"];
document.getElementById("about").innerHTML = plant1["description"];
document.getElementById("plantPic").src = "plants/einblatt.jpg";
document.getElementById("input-water-amount-" + plant1["waterAmount"]).checked = true;
setRadioAmount('water');
document.getElementById("input-light-amount-" + plant1["lightAmount"]).checked = true;
setRadioAmount('light');

//sets the watering cans and suns in the newPlantForm to 3/5
function setRadiosToThree(){
	document.getElementById("form-input-water-amount-3").checked = true;
	setRadioAmount('formWater');
	document.getElementById("form-input-light-amount-3").checked = true;
	setRadioAmount('formLight');
}

