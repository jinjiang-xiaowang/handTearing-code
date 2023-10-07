function outputNth(arr, n) {
    var arr2 = []
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] == arr[i]) count++;
      }
      if (count < n) {
        if (arr2.indexOf(arr[i]) == -1)
          arr2.push(arr[i]);
        else
          arr2.splice(arr2.indexOf(arr[i]) + 1, 0, arr[i]);
      }
    }
    return arr2;
  }

  console.log(outputNth([20, 37, 20, 20, 21], 2)); //[20,20,37,21]