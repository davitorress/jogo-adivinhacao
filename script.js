const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keypress", handleKeypressEnter);

function handleTryClick(event) {
	event.preventDefault();

	const inputNumber = document.querySelector("#inputNumber");

	if (Number(inputNumber.value) == randomNumber) {
		toggleScreen();

		if (xAttempts == 1) {
			screen2.querySelector("h2").innerText = `Parabéns! Você acertou em ${xAttempts} vez!`;
		} else {
			screen2.querySelector("h2").innerText = `Parabéns! Você acertou em ${xAttempts} vezes!`;
		}
	}

	inputNumber.value = "";
	xAttempts++;
}

function handleResetClick() {
	toggleScreen();
	xAttempts = 1;
}

function handleKeypressEnter(event) {
	if (event.key == "Enter" && screen1.classList.contains("hide")) {
		handleResetClick();
		location.reload();
	}
}

function toggleScreen() {
	screen1.classList.toggle("hide");
	screen2.classList.toggle("hide");
}
