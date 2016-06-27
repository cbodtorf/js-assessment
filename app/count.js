exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var timeout;
    function upIt () {
      console.log(start++);

      if (start <= end) {
        timeout = setTimeout(upIt, 100);
      }
    }

    upIt();

    return {
      cancel: function () {
        clearTimeout(timeout);
      }
    };
  }
};
