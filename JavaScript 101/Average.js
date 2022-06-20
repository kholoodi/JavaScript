function average(array) {
    let sum  = 0;
    for(let i = 0 ; i < array.length ; i++)
    {
        sum += array[i];
    }
    return sum / array.length;
  }

  let arr1 = [2 , 4 , 9 , 23 , 435];
  console.log(average(arr1));
   arr1 = [0 , 44 , 9 , 3 , 8];
  console.log(average(arr1));
   arr1 = [99,23];
  console.log(average(arr1));
   arr1 = [72 , 86 , 23 , 70 , 1];
  console.log(average(arr1));
   arr1 = [55,2,96];
  console.log(average(arr1));

  