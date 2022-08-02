// SELECTORES O SELECTORS
const numberContainer = document.querySelector('.card__buttons');
const rateNumber = document.querySelector('.thanks__selected--number');
const btnSubmit = document.querySelector('.card__btn');
const thankElement = document.querySelector('.thanks');
const cardElement = document.querySelector('.card');

numberContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('card__button')){
        const numberSelected = e.target.innerText;
        rateNumber.textContent = numberSelected;

        if(numberSelected >= '1'){
            btnSubmit.addEventListener('click', () => {
                thankElement.style.display = 'block';
                cardElement.style.display = 'none';
            });
        }
        
    }
    
});

