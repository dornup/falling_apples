// закругление через input:range
document.getElementById('ava_round').addEventListener('input', function() {
    console.log(this.value);
    document.querySelector('main .avatar .mask').style.borderRadius = this.value + '%';
})

/* -------- settings. login ---------- */
const loginInput = document.querySelector('.attribute#login input');
const loginButton = document.querySelector('.attribute#login button');
const loginValue = loginInput.value;

loginInput.addEventListener('input', () => {
    loginButton.disabled = loginInput.value == loginValue;
});

// отправление
document.querySelector('#login form').addEventListener('submit', (e) => {
    e.preventDefault() // сброс стандартного поведения (чтобы не было перезагрузки);
    const data = new FormData(e.target); // формирование форм
    fetch('/change_login', {
        method : 'POST',
        body : data
    })
});