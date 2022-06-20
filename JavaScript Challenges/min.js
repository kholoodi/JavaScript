function smallestNumber(array) {
    let min =  array[0];
    for (let i = 1; i< array.length; i++)
    { 
        if (min > array[i])

        { 
            min = array[i];
        }
           
    }
    return min;
}

  console.log(smallestNumber([13 , 2 , 1 , 4 , 106]));
  console.log(smallestNumber([90 , 7 , 56 , 33 , 83]));
  console.log(smallestNumber([91 , 67 , 223 , 943 , 34]));
  console.log(smallestNumber([43 , 3 , -6 , 55 , 205]));
  console.log(smallestNumber([5 , 0 , 1 , 21 , 43]));