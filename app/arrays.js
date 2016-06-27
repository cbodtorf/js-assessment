exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var sum =0;
    arr.forEach(function(e){
      sum += e;
    })
    return sum;
  },

  remove: function(arr, item) {
    arr.forEach(function(e,i){
      var i = arr.indexOf(item);
      arr.splice(i,1)
    })
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    arr.forEach(function(e,i){
      var i = arr.indexOf(item);
      arr.splice(i,1)
    })
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    arr.forEach(function(e){
      if (e === item) {count++}
    })
    return count;
  },

  duplicates: function(arr) {
    //[ 1, 2, 4, 4, 3, 3, 1, 5, 3 ]
     var sorted = arr.slice().sort();
     var dups = [];

     for (var i = 0; i < arr.length - 1; i++) {
        if (sorted[i + 1] === sorted[i]) {
          if(dups.indexOf(sorted[i]) === -1){
            dups.push(sorted[i]);
          }
        }
      }
      return dups;
  },

  square: function(arr) {
    var squareRes = []
    arr.forEach(function(e){
      squareRes.push(e*e);
    })
    return squareRes;
  },

  findAllOccurrences: function(arr, target) {
    var ocArr = [];
    arr.forEach(function(e,i){
      if(e === target) {
        ocArr.push(i);
      }
    });
    return ocArr;
  }
};
