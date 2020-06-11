'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_FENAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userPreferencesWindow = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');
setupOpenIcon.setAttribute('tabindex', '0');
setupClose.setAttribute('tabindex', '0');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  userPreferencesWindow.classList.remove('hidden');

  window.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userPreferencesWindow.classList.add('hidden');

  window.addEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closePopup();
  }
});

var similarCharacters = document.querySelector('.setup-similar');
similarCharacters.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandom = function (list) {
  return list[Math.floor((Math.random() * list.length))];
};

var createANewArray = function (lengthArray) {
  var newArray = [];

  for (var j = 0; j < lengthArray; j++) {
    newArray[j] = {
      name: WIZARD_NAMES[j] + WIZARD_FENAMES[j],
      coatColor: COAT_COLORS[j],
      eyesColor: EYES_COLORS[j]
    };
  }
  return newArray;
};

var createCloneElement = function () {
  wizardElement = similarWizardTemplate.cloneNode(true);
  return wizardElement;
};

var createNewElement = function (content1, content2, fill1, fill2) {
  wizardElement.querySelector('.setup-similar-label').textContent = content1 + ' ' + content2;
  wizardElement.querySelector('.wizard-coat').style.fill = fill1;
  wizardElement.querySelector('.wizard-eyes').style.fill = fill2;
  return wizardElement;
};

var wizards = createANewArray(4);
var wizardElement;
var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  var wizardName = getRandom(WIZARD_NAMES);
  var wizardFename = getRandom(WIZARD_FENAMES);
  var coatColor = getRandom(COAT_COLORS);
  var eyesColor = getRandom(EYES_COLORS);

  createCloneElement();
  createNewElement(wizardName, wizardFename, coatColor, eyesColor);

  fragment.appendChild(wizardElement);
}

similarListElement.appendChild(fragment);

var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var userNameInput = document.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MIN_NAME_LENGTH) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var wizardCoat = document.querySelector('.setup-wizard-wrap .wizard-coat');
var wizardCoatInput = document.querySelector('.setup-wizard-appearance input:nth-child(2)');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardEyesInput = document.querySelector('.setup-wizard-appearance input:nth-child(3)');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

setupFireballWrap.addEventListener('click', function () {
  var fireballColor = getRandom(FIREBALL_COLORS);

  setupFireballWrap.querySelector('input').value = fireballColor;
  setupFireballWrap.style.backgroundColor = fireballColor;
});

var elementColor = function (value1, value2, value3, value4) {
  value1 = getRandom(value2);
  value3.style.fill = value1;
  value4.value = value1;
};

wizardCoat.addEventListener('click', function () {
  elementColor(coatColor, COAT_COLORS, wizardCoat, wizardCoatInput);
});

wizardEyes.addEventListener('click', function () {
  elementColor(eyesColor, EYES_COLORS, wizardEyes, wizardEyesInput);
});
