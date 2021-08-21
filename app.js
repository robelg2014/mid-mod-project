var playerShip = {ship: 150};
var playerPoints = playerShip.ship;
var alienShip = [
                {alien: true},
                {alien: true},
                {alien: true},
                {alien: true},
                {alien: true},
                {alien: true}]
var randomWeapon = function () {
    var weaponOne = null;
  var randomNumber = Math.random();
  if (randomNumber < 0.7) {
    var weaponOne = true;
  } else {
    var weaponOne = false;
  }
    return weaponOne;
}
var playerTurn = function () {
    backToBase();
    var getInput = prompt("Jarvis:' Sir fire: Type '1' for Arc Reactor Blast or '2' for shoulder missiles'");
        if (getInput === "1" || "2") {
        randomWeapon();
        var test = randomWeapon();
            if (test == true) {
                alert("Jarvis:'Sir weapon ready!'")
                destroyAlienShip();
            } else {
                alert("Jarvis:'Weapon fired Sir, but they seem to have avoided it!'");
            }
    } else if (getInput !== "1" || "2") {
        getInput;
    }
}
var alienTurn = function () {
    randomWeapon();
    var test = randomWeapon();
    if (test == true) {
        alert("Jarvis:'The enemy has fired, that was a direct hit sir, your Arc Reactor is now -7% power");
        playerDamaged();
        alienRandomAttack();
    } else {
        alert("Jarvis:'Sir that was a close one, excellent maneuverability on that dodge.'");
    }
}
    var alienRandomAttack = function () {
            randomWeapon();
            var test = randomWeapon();
            if (test == true) {
                alert("Jarvis:'Sir it seems as though the enemy is not giving up, and has started another attack.'");
                alienTurn();
            }
}
var playerDamaged = function() {
    playerPoints -= 10;
    alert("Jarvis:'Sir your Arc Reactor is at' " + playerPoints + " 'and dropping'");
    return playerPoints;
}
var destroyAlienShip = function () {
    var whichAlien = prompt("Jarvis:'Who shall we go after first Sir?' 1, 2, 3, 4, 5, Loki(6)?");
    var i = whichAlien - 1;
    if (whichAlien === "") {
        alert ("Jarvis:'Sir something went wrong.'");
        var whichAlien = prompt("Jarvis:'Who shall we target?'");
        destroyAlienShip();
    } if (i < alienShip.length) {
        if (alienShip[i].alien === true) {
            alert("Jarvis:'Bullseye Sir, excellent aim'" + whichAlien + " wont be in the next Avengers film");
             alienShip[i].alien = false;
        } else {
        alert("Jarvis:'Sorry Sir'" + whichAlien + " has already met your wrath");
        destroyAlienShip();
        }
    } else {
        alert("Jarvis:'Sir something went wrong.'");
        destroyAlienShip();
    }
} 
var checkAliens = function () {
    var result = true;
    for (var i in alienShip) {
        if (alienShip[i].alien === true) {
            result = false;
        }
    } return result;
}
var backToBase = function () {
    if (playerPoints < 150) {
        var recharge = confirm("Jarvis:'Sir would you like to add some charge to your Arc Reactor");
        if (recharge == true) {
            playerPoints += 25;
            alert("recharged 17 percent: you are now at " + playerPoints + "of your Arc Reactors potential ");
        }
    }
}
var takeTurns = function() {
    while ((playerPoints > 0) && (checkAliens() == false)) {
        player = 1;
        if (player = 1) {
            playerTurn();
            player = 2;
        } if (player = 2) {
            alienTurn();
            player = 1;
        }
    }
}
var playAgain = function () {
        var replay = confirm("Are you ready for more Mr. Stark? (Y / N )");
        if (replay == true) {
            console.log("replay == true");
            location.reload();
        } else {
            alert("Maybe its time for some r&r with Miss Potts!");
        }
}
var playGame = function () {
    alert("Earth has been attacked by Loki and a giant army of space aliens. It is your job as Tony Stark to save New York!")
    takeTurns();
    if (playerPoints <= 0) {
        alert("Jarvis: 'Sir your power is at 0% time to go home.'");
        playAgain();
    } if (checkAliens() === true) {
        alert("Jarvis:'Very good sir, you have saved New York. Unfortunately, Thanos used the time stone to turn back the battle. Would you like to save New York again??");
        playAgain();
    }
}
playGame();