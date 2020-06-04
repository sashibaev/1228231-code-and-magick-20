'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_FENAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userPreferencesWindow = document.querySelector('.setup');
userPreferencesWindow.classList.remove('hidden');

var similarCharacters = document.querySelector('.setup-similar');
similarCharacters.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandom = function (list) {
  return list[Math.floor((Math.random() * list.length))];
};

var createANewArray = function (i) {
  var newArray = [];

  for (var j = 0; j < i; j++) {
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
