window.addEventListener('load', () => {

    document.querySelector('#create-button').addEventListener('click', () => {
        const createInterface = document.querySelector('#calendar-create');
        const createContainer = createInterface.parentElement;

        createContainer.style.display = 'flex';
        setTimeout(() => {
            createInterface.style.transform = 'scale(1, 1)';
        }, 100)
    })

    document.querySelector('#calendar-create-background').addEventListener('click', () => {
        const createInterface = document.querySelector('#calendar-create');
        const createContainer = createInterface.parentElement;

        createInterface.style.transform = 'scale(0, 0)';
        setTimeout(() => {
            createContainer.style.display = 'none';
        }, 100)
    });

    document.querySelector('#submit').addEventListener('click', () => {
        fetchPHP()
    })

    function fetchPHP() {
        const nameInputField = document.querySelector('#name-field');
        const dateInputField = document.querySelector('#date-field');
        const destcriptionInputField = document.querySelector('#textarea');

        fetch("./index.php", {
            mode: 'cors',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `data=${nameInputField.value};${dateInputField.value};${destcriptionInputField.value}`
        })
            .then((response) => {
                return response.text();
            })
            .then((responseText) => {
                const createInterface = document.querySelector('#calendar-create');
                const createContainer = createInterface.parentElement;

                createInterface.style.transform = 'scale(0, 0)';
                setTimeout(() => {
                    createContainer.style.display = 'none';
                }, 100)
            })
    }
});