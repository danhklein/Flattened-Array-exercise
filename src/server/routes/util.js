

// var newArray = []
// var arr = [
//   [1,2,3],[4,5,6]
// ]

// newArray = newArray.concat(arr.split(','))

function FlattenArray(arr, callback) {
  if (!Array.isArray(arr)) {
    return callback('Please use an Array!')
  } else {
    var singleArr = [].concat.apply([], arr);;
      return callback(null, singleArr);
    }
};

module.exports = FlattenArray;