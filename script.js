const userInput = document.getElementById("user-input")
const checkBtn = document.getElementById("check-btn")
const resultDiv = document.getElementById("result-div")
const clearBtn = document.getElementById("clear-btn")
checkBtn.addEventListener("click", () => {
    checkValidNumber(userInput.value)
    userInput.value = ""
})

const checkValidNumber = input => {
    if (input === '') {
        alert('Please provide a phone number');
        return;
    }
    const countryCode = '^(1\\s?)?';
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
    const spacesDashes = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
    const phoneRegex = new RegExp(
        `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
    );

    const pTag = document.createElement("p")
    pTag.className = "result-text"
    phoneRegex.test(input) ? (pTag.style.color = "#00FF00") : (pTag.style.color = "#FF0000");
    pTag.innerText = `${phoneRegex.test(input) ? "Valid" : "Invalid"} US number: ${input}`
    resultDiv.appendChild(pTag)
}

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkValidNumber(userInput.value);
        userInput.value = '';
    }
});

clearBtn.addEventListener('click', () => {
    while (resultDiv.firstChild) {
        resultDiv.removeChild(resultDiv.firstChild)
    }
});
