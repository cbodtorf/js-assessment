exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(arguments) {
      return str + ', ' + arguments;
    };
  },

  makeClosures: function(arr, fn) {
    guessIt = [];

    var closeIt = function (value) {
      return function () {
        return fn(value);
      };
    };

    for (var i = 0, len = arr.length; i < len; i++) {
      guessIt.push(closeIt(arr[i]));
    }
    return guessIt;
  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
