function average(array) {
    sum = 0;
    let len = array.length;
    for(let i =0; i < len; i++)
    {
        sum +=  array[i];
    }
    return sum /len;
  }

  console.log(average([2 , 4 , 9 , 23 , 435]));
  console.log(average([0 , 44 , 9 , 3 , 8]));
  console.log(average([99 , 23]));
  console.log(average([72 , 86 , 23 , 70 , 1]));
  console.log(average([55 , 2 , 96]));
