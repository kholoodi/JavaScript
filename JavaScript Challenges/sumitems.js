function cumulativeAddition(array) {
    let sum = 0;
    let len = array.length;
    for(let i =0; i < array.length; i++)
    {
        sum += array[i];
    }
   
    return [sum, len];   
  }

  console.log(cumulativeAddition([2, 4, 9, 23, 435]));

  console.log(cumulativeAddition([32, 9, 3, 8]));

  console.log(cumulativeAddition([99, 314, 8, 200, 23, 2]));

  console.log(cumulativeAddition([72, 86]));
  
  console.log(cumulativeAddition([55]));
  
