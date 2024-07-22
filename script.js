document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
        input.addEventListener('input', function(e) {
            const val = e.target.value;
            if (val.length === 1) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                } else {
                    inputs[index].blur(); // Unfocus the last input
                }
            }
        });

        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace') {
                if (index > 0) {
                    inputs[index].value = '';
                    inputs[index - 1].focus();
                }
            }
        });
    });
});
