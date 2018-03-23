var x = process.argv
var sum = 0
for(var i = 2; i < x.length; i++){
	sum += +x[i]
}
console.log(sum)
