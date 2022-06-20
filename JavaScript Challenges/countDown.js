function countDown(number) {
    let count  = " "
    let item
	for(let i = number; i <0; i--)
    {  item =string(i)
      count = item.join(" ")
    }

    return count
}

console.log(countDown(5))
console.log(countDown(3))
console.log(countDown(2))