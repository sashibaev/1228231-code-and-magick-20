'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_FENAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  window.SetupConstants = {
    COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
  };

  var similarCharacters = document.querySelector('.setup-similar');
  similarCharacters.classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var createANewArray = function (lengthArray) {
    var newArray = [];

    for (var j = 0; j < lengthArray; j++) {
      newArray[j] = {
        name: WIZARD_NAMES[j] + WIZARD_FENAMES[j],
        coatColor: window.SetupConstants.COAT_COLORS[j],
        eyesColor: window.SetupConstants.EYES_COLORS[j]
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
    var wizardName = window.generalFunctions.getRandom(WIZARD_NAMES);
    var wizardFename = window.generalFunctions.getRandom(WIZARD_FENAMES);

    window.setup = {
      coatColor: window.generalFunctions.getRandom(window.SetupConstants.COAT_COLORS),
      eyesColor: window.generalFunctions.getRandom(window.SetupConstants.EYES_COLORS)
    };

    createCloneElement();
    createNewElement(wizardName, wizardFename, window.setup.coatColor, window.setup.eyesColor);

    fragment.appendChild(wizardElement);
  }

  similarListElement.appendChild(fragment);
})();
