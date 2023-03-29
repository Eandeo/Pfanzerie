    //function for changing the sun and watering can if selected
    function onRadioImgClick(imgType, amount) {
       
    
        //noHover.classList.toggle("noHover");
        // });

        if (settingsIsClicked === true) {
            setRadioAmount(imgType, amount);
            //hier muss noch der Wert im JSON überschrieben werden.
        }
    }
    //sets the amount of selected amounts x/5
    function setRadioAmount(imgType, amount) {
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
            console.log("Show add form");
        } else {
            document.getElementById("plantForm").classList.add("plantFormHidden");
        }
    }



    const plant1 = {
        id: 1,
        name: "Friedenslilie",
        room: "Wohnzimmer",
        img: "plants/einblatt.jpg",
        waterAmount: 5,
        lightAmount: 4,
        description: "Das Einblatt ist wegen ihrer kleinen weißen Blüten sehr beliebt. Dieser Pflanze wird in Deutschland auch Scheidenblatt, Friedenslilie, Blattfahne oder Spathiphyllum genannt. Die Spathiphyllum kommt ursprünglich aus Brasilien. Die Pflanzenfamilie ist Araceae."
    }

    document.getElementById("name").innerHTML = plant1["name"];
    document.getElementsByClassName("about").innerHTML = plant1["description"];
    document.getElementById("plantPic").src = "plants/einblatt.jpg";
    setRadioAmount("water", plant1["waterAmount"]);
    setRadioAmount("light", plant1["lightAmount"]);
