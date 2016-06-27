exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    // constructor["greeting"] = greeting;
  },

  iterate: function(obj) {
    for(i in obj) {
      i++
    }
  }
};
