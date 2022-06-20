function search(word, character) {
	for (let i =0 ; i < word.length; i++){
		if (word[i] == character)
			return i
	}
	return -1
}

console.log(search('Programming','o'))
console.log(search('Java','a'))
console.log(search('like','z'))
console.log(search('python','n'))