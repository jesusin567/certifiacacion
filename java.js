function showMessage(action) {
    const alertBox = document.createElement('div');
    alertBox.className = 'alert';
    alertBox.textContent = `¡${action} exitoso!`;
    document.body.appendChild(alertBox);

    setTimeout(() => alertBox.classList.add('show'), 100);
    setTimeout(() => {
        alertBox.classList.remove('show');
        setTimeout(() => alertBox.remove(), 500);
    }, 3000);
}

function rentBook(button) {
    button.textContent = 'No Disponible';
    button.classList.add('disabled');
    button.disabled = true;
}

function changeGenre(genre) {
    const title = document.getElementById('genre-title');
    title.textContent = genre;
}