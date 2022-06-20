
function maxElement(array) {
    let max =  array[0];
    for (let i = 1; i< array.length; i++)
    { 
        if (max < array[i])

        { 
            max = array[i];
        }
           
    }
    return max;
}

  console.log(maxElement([2 , 4 , 9 , 23 , 435]));
  console.log(maxElement([-32 , -44 , -9 , 3 , -8]));
  console.log(maxElement([-99 , -314 , 0 , -200 , -23]));
  console.log(maxElement([72 , 86 , 23 , 70 , 1]));
  console.log(maxElement([55 , 64 , 0 , 11 , 4]));