const newsletter = document.querySelector('.newsletter')
const errorEmail = document.querySelector('.newsletter__text-form-box-error')
const inputEmail = document.querySelector('.newsletter__text-form-email')
const btnSendEmail = document.querySelector('.newsletter__text-form-btn')
const popup = document.querySelector('.popup')
const popupBtn = document.querySelector('.popup__btn')

const popupYourMail = document.querySelector('.popup__text-info span')


const regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const checkEmail = () => {
    if(inputEmail.value.match(regex)){
        newsletter.style.display = 'none'
        popup.style.display = 'flex'
        errorEmail.style.display = 'none'
        popupYourMail.textContent = inputEmail.value
        inputEmail.classList.remove('newsletter__text-form-email--active')
    } else {
        errorEmail.style.display = 'block'
        inputEmail.classList.add('newsletter__text-form-email--active')
    }
}


btnSendEmail.addEventListener('click', checkEmail)
popupBtn.addEventListener('click', () =>{
    inputEmail.value = ''
    popup.style.display = 'none'
    newsletter.style.display = 'flex'
})
