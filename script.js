let inputElements = Array.from(document.querySelectorAll(".code"));

inputElements.forEach((inputElement, index) => {
    inputElement.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && index > 0) {
            setTimeout(() => inputElements[index - 1].focus(), 10);
        }
    });
    inputElement.addEventListener("input", (event) => {
        let value = event.target.value;
        if (value.length === 1) {
            let code = value.charCodeAt(0);
            if (code >= 48 && code <= 57 && index < inputElements.length - 1) {
                setTimeout(() => inputElements[index + 1].focus(), 10);
            } else {
                event.target.value = "";
            }
        } else if (value.length > 1) {
            event.target.value = value.slice(0, 1); // Allow only one character
        }
    });
});
