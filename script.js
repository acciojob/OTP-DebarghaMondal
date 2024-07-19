let inputElements = Array.from(document.querySelectorAll(".code"));

inputElements.forEach((inputElement, index) => {
    inputElement.addEventListener("keyup", (event) => {
        let code = event.key.charCodeAt(0);
        if (event.key === "Backspace") {
            if (index > 0) {
                inputElements[index - 1].focus();
            }
        } else if (code >= 48 && code <= 57) {
            if (index < inputElements.length - 1) {
                inputElements[index + 1].focus();
            }
        } else {
            event.target.value = "";
        }
    });
});