"use strict";

// SELECTORES O SELECTORS
var numberContainer = document.querySelector('.card__buttons');
var rateNumber = document.querySelector('.thanks__selected--number');
var btnSubmit = document.querySelector('.card__btn');
var thankElement = document.querySelector('.thanks');
var cardElement = document.querySelector('.card');

// EVENTOS O EVENTS
numberContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('card__button')) {
    var numberSelected = e.target.innerText;
    rateNumber.textContent = numberSelected;

    if (numberSelected >= '1') {
      btnSubmit.addEventListener('click', function () {
        thankElement.style.display = 'block';
        cardElement.style.display = 'none';
      });
    }
  }
});