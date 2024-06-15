document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.onclick = () => {
            const buttonId = button.id;

            switch (buttonId) {
                case 'clear':
                    display.innerText = '';
                    break;
                case 'backspace':
                    display.innerText = display.innerText.slice(0, -1);
                    break;
                case 'equal':
                    if (display.innerText) {
                        try {
                            display.innerText = eval(display.innerText);
                        } catch {
                            display.innerText = 'Error';
                        }
                    } else {
                        display.innerText = 'Empty!';
                    }
                    break;
                case '√':
                    display.innerText = Math.sqrt(eval(display.innerText));
                    break;
                default:
                    display.innerText += buttonId;
            }
        };
    });
});
