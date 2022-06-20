function findElement(array, element) {

    for(let i = 0; i < array.length; i++)
    {
        if(array[i] == element)
        {
            return true;
        }
        
    }
    return false;
    
  }

  console.log(findElement([2, 4, 1 ,9, 42], 4));
  console.log(findElement([43, 56, 3, 20], 70));