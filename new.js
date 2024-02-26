const login = document.querySelector('sign-in');
const signup = document.querySelector('sign-up');
const formbox = documet.querySelector('form-box');

signup.addEventListener('click', ()=>{
    formbox.classList.toggle('active');
});