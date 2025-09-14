document.getElementById("myButton").addEventListener("click", function() {
    // Dice 1
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var imagePicked = "./images/dice" + randomNumber + ".png";
    var image1 = document.querySelector(".img1");
    image1.setAttribute("src", imagePicked);

    // Dice 2
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var imagePicked1 = "./images/dice" + randomNumber1 + ".png";
    var image2 = document.querySelector(".img2");
    image2.setAttribute("src", imagePicked1);

    // Winner Logic
    if (randomNumber > randomNumber1) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber < randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "DRAW!!!";
    }
});


