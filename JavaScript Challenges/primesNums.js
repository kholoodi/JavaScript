////not right

function isPrime(n)
{
    if (n <= 1)
        return false;
        for( let i = 2; i < n; i++)
        
        if (n % i == 0)
        return false;
        
        else
        return true
}
function primesNums(array) {
    arr =[]
    for(let i =0 ; i < array.length; i++)
    {
        if (isPrime(array[i]))
         arr.add(array[i])
    }
    return arr;
  }
  

  console.log(primesNums([5, 38, 33, 60, 56, 7]))
  console.log(primesNums([53, 20, 71]))
  console.log(primesNums([31, 44]))
  console.log(primesNums([12, 4, 44, 89]))

