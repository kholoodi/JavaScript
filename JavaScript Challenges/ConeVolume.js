function ConeVolume(radius, height) {
	let r  = Math.pow(radius, 2);
    return (height * (r *3.14))/3
}

console.log(ConeVolume(3, 7))
console.log(ConeVolume(2, 4))
console.log(ConeVolume(5.2, 7.2))
console.log(ConeVolume(4, 3.3))