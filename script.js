const USER = [{id: 'parsa98', pass: '12345678', fName:'parsa'}]

const user = document.getElementById('Email');
const password = document.getElementById('password');
const btn = document.getElementById('submit');
const errorFiled = document.getElementById('login');

btn.addEventListener('click', (e) =>{
    e.preventDefault();
    if(user.value === USER[0].id && password.value === USER[0].pass){
        console.log('user', user.value); console.log('pass', password.value)
        btn.innerHTML = `<div class="spinner-border" role= "status"></div>`
        window.localStorage.setItem('name', JSON.stringify(USER[0].fName));
        setTimeout(() => {
            btn.innerHTML = 'submit';
            window.location.replace('./panel.html');
        }, 2000);
    }else{
        const smallText = document.createElement('small');
        smallText.innerHTML = 'wrong username or password';
        mb.classList.add('text-danger')
        const mb = document.getElementById('mb-5');
        mb.innerHTML = 'wrong username or password'
        errorFiled.appendchild(smallText);
    }
})