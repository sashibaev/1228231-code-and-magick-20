'use strict';

var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var wizardCoat = document.querySelector('.setup-wizard-wrap .wizard-coat');
var wizardCoatInput = document.querySelector('.setup-wizard-appearance input:nth-child(2)');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardEyesInput = document.querySelector('.setup-wizard-appearance input:nth-child(3)');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

setupFireballWrap.addEventListener('click', function () {
  var fireballColor = window.generalFunctions.getRandom(FIREBALL_COLORS);

  setupFireballWrap.querySelector('input').value = fireballColor;
  setupFireballWrap.style.backgroundColor = fireballColor;
});

var elementColor = function (value1, value2, value3, value4) {
  value1 = window.generalFunctions.getRandom(value2);
  value3.style.fill = value1;
  value4.value = value1;
};

wizardCoat.addEventListener('click', function () {
  elementColor(window.setup.coatColor, window.SetupConstants.COAT_COLORS, wizardCoat, wizardCoatInput);
});

wizardEyes.addEventListener('click', function () {
  elementColor(window.setup.eyesColor, window.SetupConstants.EYES_COLORS, wizardEyes, wizardEyesInput);
});
