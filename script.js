document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');

    inputs.forEach((input, index) => {
        input.addEventListener('input', function(e) {
            const currentLength = e.target.value.length;
            if (currentLength === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && index > 0 && input.value === '') {
                inputs[index - 1].focus();
            }
        });
    });
});


