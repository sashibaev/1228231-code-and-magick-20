'use strict';

(function () {
  window.generalFunctions = {
    getRandom: function (list) {
      return list[Math.floor(Math.random() * list.length)];
    }
  };
})();
