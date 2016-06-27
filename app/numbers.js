exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var bin1 = (num >>> 0).toString(2);
    var revbin = bin1.split('').reverse().join('');
    return Number(revbin[bit - 1]);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
      return ("000000000" + num.toString(2)).substr(-8)
  },

  multiply: function(a, b) {
    return Number((a * b).toFixed(8));
  }
};
