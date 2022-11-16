const button = document.getElementById("button");

const input = document.getElementById("inputNumber").value;

button.addEventListener("click", (event) => {
    event.preventDefault();

    const input = document.getElementById("inputNumber").value;

    const randomNum1_10 = Math.floor(Math.random() * 10) + 1;

    let winner = randomNum1_10 == input ? "Sie haben gewonnen! 🎉" : "Sie haben leider verloren! 😔 <br />Die korrekte Zahl lautet " + randomNum1_10 + ".";

    document.getElementById("outputResult").innerHTML = winner;
})

