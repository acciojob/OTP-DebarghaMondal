let inputElements = Array.from(document.querySelectorAll(".code"));

inputElements.forEach((inputElement, index) => {
    inputElement.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && index > 0) {
            setTimeout(() => inputElements[index - 1].focus(), 10);
        }
    });
    inputElement.addEventListener("input", (event) => {
        let code = event.data.charCodeAt(0);
        if (code >= 48 && code <= 57 && index < inputElements.length - 1) {
            setTimeout(() => inputElements[index + 1].focus(), 10);
        } else {
            event.target.value = "";
        }
    });
});