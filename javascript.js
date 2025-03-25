// function moveZeros(arr) {
//   let array = arr.filter((notZeros) => notZeros !== 0)
//   const zerosArr = arr.filter((zeros) => zeros === 0)
//   arr.filter.push(...zerosArr)
//   return array
// }

// const { forEachChild } = require("typescript")

// console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))

// complete the function
// function solution(string) {
//   let reg = /[A-Z]/g
//   let arr = string.split("")
//   for (let i = 1;  i < arr.length; i++ ){
//     arr[i].match(reg) ? arr[i] = ` ${arr[i]}`: arr[i]
//   }
//   console.log(arr.join(""))

// }

// solution("camelCasTing")
// solution("camelCasting")
// solution("JavaScript")
// solution("INeedBurger")


// function smash(words) {
//   console.log(words.join(" "))
// }

// smash(["the", "dog", "walked"])


// function likes(names) {
//   if (names.length === 0 ){
//     console.log("noone likes you")
//   } else if (names.length === 1) {
//     console.log(`${names[0]} likes you`)
//   } else if (names.length === 2) {
//     console.log(`${names[0]} and ${names[1]} likes you`)
//   } else if (names.length === 3) {
//     console.log(`${names[0]}, ${names[1]} and ${names[2]} likes you`)
//   }else if (names.length > 3) {
//     console.log(`${names[0]}, ${names[1]} and ${names.length - 2} others likes you`)
//   }
// }

// likes([])
// likes(['Peter'])
// likes(['Jacob', 'Alex'])
// likes(['Max', 'John', 'Mark'])
// likes(['Alex', 'Jacob', 'Mark', 'Max'])

// function pigIt(str){
//   let arr = str.split(' ')
//   let latin = arr.map((word) => {
//     let wordArr = word.split("")
//     let first = wordArr.shift()
//     let reg = /[^\w\s]/g
//     wordArr.push(first)
//     if (reg.test(wordArr.join(""))){
//       return wordArr.join("")
//     } else {
//       return `${wordArr.join("")}ay`
//     }
//   })
//   console.log(latin.join(" "))
// }


// pigIt('Pig latin is cool')
// pigIt('Hello world!')



// function filter_list(l) {
//   console.log(l.filter((num) => typeof num === "number"))
// }

// filter_list([1,2,'a','b'])
// filter_list([1,'a','b',0,15])
// filter_list([1,2,'aasf','1','123',123])


// function friend(friend) {
//   console.log(friend.filter((n) => n.length === 4))
//   // console.log(arr)

// }

// friend(["Ryan", "Kieran", "Mark"])
// friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])

// function rowSumOddNumbers(n) {
	
// }

// rowSumOddNumbers(42)

// function findShort(s){
//   console.log(s.split(' ').map((n) => n.length).sort((a, b) => a - b)[0])
// }

// findShort("Let's travel abroad shall we")

// function abbrevName(name){
//   console.log(name.split(" ").map((n) => n[0]).join("."))
// }

// abbrevName("Evan Cole")

// function lovefunc(flower1, flower2){
//   flower1 % 2 === 0 && flower2 % 2 !== 0 || flower2 % 2 === 0 && flower1 % 2 !== 0 ? console.log("True") : console.log("False")
// }


// lovefunc(1,4)
// lovefunc(2,3)
// lovefunc(2,4)
// lovefunc(0,1)


// function greet(name){
//   console.log(`Hello, ${name} how are you doing today?`)
// }

// greet("erik")


// function solution(str) {
//   let reverse = str.split("").reverse().join("")
//   console.log(reverse)
// }


// solution("world")
// solution("hello")
// solution("Amongus")

// function dnaStrand(dna){
//   console.log(dna.replace(/[ATCG}]/g, function (match) {
//     switch (match) {
//       case "A": return "T"
//       case "T": return "A"
//       case "C": return "G"
//       case "G": return "C"
//     }
//   }))
  
// }
 
// dnaStrand("AAAA")
// dnaStrand("ATTGC")
// dnaStrand("GTAT")

// var number = function (busStop) {
//   let peopleGettingOn = 0
//   let peopleGettingOff = 0

//   for (let i = 0; i < busStop.length; i++) {

//       peopleGettingOn = peopleGettingOn + busStop[i][0]
//       peopleGettingOff = peopleGettingOff + busStop[i][1]
//     }
//   console.log(peopleGettingOn - peopleGettingOff)

// }

// number([[1,0],[2,3]])
// number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])
// number([[10,0],[3,5],[5,8]])
// number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])


// function doubleInt(i) {
//   console.log(i * 2)

// }

// doubleInt(2)
// doubleInt(30)
// doubleInt(10)

// function getCount(str){
//   console.log(str.replace(/[^aeiou]/gi, "").length)

// }

// getCount("abracadabra")
// getCount("amongus")

// function comp(ar1, ar2) {
//   function check(v1, v2) {
//     return v1 === Math.sqrt(v2) || Math.sqrt(v1) === v2 || v1 === v2 ** 2 || v2 === v1 **2
//   }
//   let tempArr2 = [...ar2]

//   const condition1 = ar1.every(v1 => {
//     let index = tempArr2.findIndex(v2 => check(v1,v2))
//     if (index !== -1) {
//       tempArr2.splice(index, 1)
//       return true
//     }
//     return false
//   })

//   let tempArr1 = [...ar1]
//   const condition2 = ar2.every(v1 => {
//     let index = tempArr1.findIndex(v2 => check(v1, v2))
//     if (index !== -1) {
//       tempArr1.splice(index,1)
//       return true
//     }
//     return false 
//   } )

//   console.log(condition1 && condition2)
// }

// let a = [121, 144, 19, 161, 19, 144, 19, 11]  
// let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

// comp([2,2,3], [4,9,9])

// var uniqueInOrder=function(iterable) {
//   const arr = []
//   // const a = iterable.split("")
//   for (let i = 0; i < iterable.length; i++){
//     if (i === 0 || iterable[i] !== iterable[i - 1]){
//       arr.push(iterable[i])     
//     } 
//   }
//   console.log(arr)
// }



// uniqueInOrder('AAAABBBCCDAABBB')
// uniqueInOrder('ABBCcAD')
// uniqueInOrder([1,2,2,3,3])   


// function removeSmallest(numbers) {
//   numbers.forEach(n => {
//     if (n < 1000000){
//       small = n
//     }
//   })
//   let smallest = numbers.indexOf(small)
//   numbers.splice(smallest, 1)
//   console.log(numbers)
// }

// removeSmallest([1, 2, 3, 4, 5])
// removeSmallest([5, 3, 2, 1, 4])
// removeSmallest([2, 2, 1, 2, 1])



// function disemvowel(str) {
//   let rex = /[aeiouAEIOU]/gi
//   console.log(str.replace(rex, ''))
// }

// disemvowel("What are you, a communist?")
// disemvowel("GTFO bruh")
// disemvowel("You Suck")


// function high(x) {
//   let xArr = x.split(' ')
//   let alphaArr = 'abcdefghijklmnopqrstuvwxyz'.split('')
//   let maxScore = 0
//   let highWord = ''

//   for (let i = 0; i < xArr.length; i++){
//     let points = 0
//     for (let y = 0; y < xArr[i].length; y ++){
//       points += alphaArr.indexOf(xArr[i][y]) + 1
//     }
//     if (points > maxScore) {
//       maxScore = points
//       highWord = xArr[i]
//     }
//   }
//   console.log(highWord)
// }

// high("qnzytqlaojztvulaxicad jegdsdblaczsionzawgjg ffiyhrltmmfwqtxgmjgum zbxgfevksunopigcshhgq")

// const reverseSeq = n =>   {
//   let arr = []
//   while (n > 0) {
//     arr.push(n)
//     n--
//   } 
//   console.log(arr)
// }

// reverseSeq(5)

// function isTriangle(a,b,c) {
//   if(a <= 0 ||b <= 0 || c <= 0) {
//     console.log("false")
//   }else if ((a + b) > c && (a + c) > b && (c + b) > a) {
//     console.log("true")
//   }else {
//     console.log("false")
//   }
// }




// isTriangle(7,2,2)
// isTriangle(1,2,2)

// function count(str){
//   let object = {}
//   for (let i = 0; i < str.length; i++) {
//     let count = 0
//     for( let j = 0 ;j < str.length; j++){
//       if( str[i] == str[j] && i > j  ) {
//         break
//       }
//       if( str[i] == str[j]  ) {
//         count++
//       }
//     }
//     if( count > 0 ){
//       if(!object[str[i]]){
//         object[str[i]] = count
//       }
//     }
//   }
//   console.log(object)
// }

// count('abaabaabb')

// function stray(numbers){
//   let n = numbers.sort()
//   console.log(n)
//   let oddOneOut = 0
//   n.forEach(element => {
//     oddOneOut ^= element
//   });
//   console.log(oddOneOut)
// }

// stray([1,1,2,2,5,5,6,6,3,3,4,5,5,6,6,6,

// function bouncingBall(h, bounce, window){
//   let count = 0
//   if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
//     count = -1
//   } else {
//     while (h > window){
//       count ++
//       h *= bounce 
//       if (h > window){
//         count++
//       }
//     }
//   }
//   console.log(count)
// }


// bouncingBall(3.0, 0.66, 1.5)
// bouncingBall(30.0, 0.66, 1.5)
// bouncingBall(3.0, 1.0, 1.5)

// function printerError(s){
//   let reg = /[abcdefghijklm]/gi

//   console.log(`${s.replace(reg, '').length}/${s.length}`)
// }

// printerError("aaaxbbbbyyhwawiwjjjwwm")
// printerError("aaabbbbhaijjjm")


// function wave(str) {
//   let result = []

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       continue
//     }
//     let wave = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1)

//     result.push(wave)
//   }
//   console.log(result)
// }

// wave("gap")
// wave("sleep and weep")

// function toCamelCase(str) {
//   let arr = str.split(/-|_| /)
//   let resultArr = []
//   for (let i = 0; i < arr.length; i++) {
//     i !== 0 ? resultArr.push(arr[i].replace(arr[i][0], arr[i][0].toUpperCase() )) : resultArr.push(arr[i])
//   }

//   let result = resultArr.join("")
//   console.log(arr)
//   console.log(result)

// }


// toCamelCase("among_us")
// toCamelCase("java-script")
// toCamelCase("My first game")

// function humanReadable(seconds) {
//   let hh = (Math.floor(seconds / 3600)).toString()
//   let mm = (Math.floor((seconds % 3600) / 60)).toString()
//   let ss = (seconds % 60).toString()

//   if (mm.length === 1) {
//     mm = "0" + mm
//   }
//   if (hh.length === 1) {
//     hh = "0" + hh
//   }
//   if (ss.length === 1) {
//     ss = "0" + ss
//   }

//   console.log(`${hh}:${mm}:${ss}`)

// }

// humanReadable(86400)

// function findOutlier(int) {
//   let arr = []
//   int.forEach(n => {
//     arr.push(Math.abs(n) % 2)
//   })
//   let sum = arr.reduce((a, b) => a + b)
//   console.log(int, arr)
  
//   if (sum === 1 ) {
//     let position = arr.findIndex((e) => e === 1)
//     console.log(int[position])
//   } else {
//     let position = arr.findIndex((e) => e === 0)
//     console.log(int[position])
//   }
// }

// findOutlier([2,3,4,6,8])

// findOutlier([1,3,5,6,7])

// findOutlier([24409982,64201512,-76964836,-135519610,164947204,-37811392,-121086372,-114137250,72089848,-189837332,-30369866,105908570,90393978,103132998,168983728,24887162,-196396334,-5385068,-170722608,-50023452,-119810224,-19345039,-148689014,-54511450,65485564,29053754,66415766,-443778,62056754])


// function isPrime(num) {
//   if (num <= 1) {
//     console.log(false)
//   }
//   if (num <= 3) {
//     console.log(false)
//   }
//   if (num % 2 === 0 || num % 3 === 0) {
//     console.log(false)
//   }
//   for (let i = 5; i <= num; i+= 6) {
//     if (num % i === 0 || num % (i + 2) === 0 ) {
//       console.log(false)
//       break
//     }
//   }
//   console.log(true)
//   return 
// }


// isPrime(2)
// isPrime(75)


// function narcissistic(value) {
//   // code must return true or false
//   let numArr = value.toString().split("")
//   let count = 0
//   for (let i = 0; i < numArr.length; i++) {
//     let int = parseInt(numArr[i]) ** numArr.length
//     // console.log(int)
//     count = count + int
//   }
//   // console.log(numArr.length)
//   console.log(count === value)
// }

// narcissistic(153)
// narcissistic(1652)


// function spinWords(str) {
//   //code here 
//   let sArr = str.split(' ')

//   for (let i = 0; i < sArr.length; i++){
//     if (sArr[i].split('').length >= 5){
//       let reversed = sArr[i].split("").reverse().join("")
//       sArr[i] = reversed 
//     }
//   }
//   console.log(sArr.join(" "))
// }

// spinWords("Hey fellow warriors")


// function divisors(int) {
//   let i = 0
//   let result = []
//   while (i !== int) {
//     if (int % i === 0 && i !== int && i !== 1) {
//       result.push(i)
//     }
//     i++
//   }
//   result.length !== 0 ? console.log(result) : console.log(`${int} is a prime number`)
// }

// divisors(12)
// divisors(25)
// divisors(13)


// function deleteNth(arr, n) {
//   //
//   const counts = {}
//   const result = []

//   for (const e of arr) {
//     if (!counts[e]){
//       counts[e] = 0
//     }

//     if (counts[e] < n) {
//       result.push(e)
//       counts[e]++
//     }
//   }
//   console.log(result)
// }

// deleteNth([20,37,20,21], 1)
// deleteNth([1,1,3,3,7,2,2,2,2], 3)
// deleteNth([12,39,19,39,39,19,12], 1)

// function generateHashtag( str ) {
//   let words = str.split(" ")
//   let  w = words.map(e => 
//     e.charAt(0).toUpperCase() + e.slice((1))
//     ).join("")
//   w.length > 120 || w.length < 1 ? 
//   console.log("false")
//   :
//   console.log(`#${w}`)
// }

// generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")
// generateHashtag("Do We have A Hashtag")
// generateHashtag("Codewars is nice")


// function duplicateEncode(word) {
//   let stringArr = word.split("")
//   let encoded = []

//   stringArr.forEach(e => {
//     stringArr.filter(i => i.toUpperCase() === e.toUpperCase()).length > 1 ?
//     encoded.push(")")
//     :
//     encoded.push("(")
//   });

//   console.log(encoded.join(""))
// }

// duplicateEncode("din")
// duplicateEncode("recede")
// duplicateEncode("Success")
// duplicateEncode("(( @")

// function order(words){
//   let compareFm = (a, b) => a.replace(/\D/g, '') - b.replace(/\D/g, '')
//   let arr = words.split(" ")
//   let result = arr.sort(compareFm).join(" ")
//   console.log(result)
// }

// order("is2 Thi1s T4est 3a")
// order("4of Fo1r pe6ople g3ood th5e the2")
// order("")


// function triangle(row) {
//   let alpha = "abcdefghijklmnopqrstuvwxyz".split("")
//   let rowArr = row.split("") 
  
  
//   while (rowArr.length !== 1) {
//     let arr = []
//     console.log(rowArr)
//     for (let i = 0; i < rowArr.length - 1; i++){
//       let num = alpha.indexOf(rowArr[i]) + alpha.indexOf(rowArr[i + 1]) + 1
//       if (num >= 26) {
//         num -= 26
//       }
//       arr.push(alpha[num])
//     }
//     rowArr = arr
//   }
//   console.log(rowArr[0])
// }

// // triangle('codewars')
// // triangle('youhavechosentotranslatethiskata')
// triangle('triangle')
// // triangle('b')

// function stringToArray(string){
//   console.log(string.split(" "))
// }

// stringToArray("Robin Singh")
// stringToArray("I love arrays they are my favorite")

// function digPow(n, p){
//   let total = 0
//   let arr = n.toString().split("")
//   let k = 0
  
//   for (let i = 0; i < arr.length; i++) {
//     total = total + (parseInt(arr[i]) ** (p + i))            
//   }

//   k = total / n 
//   console.log(k === Math.floor(k) ? k : -1)
// }

// digPow(89, 1)
// digPow(92, 1)
// digPow(46288, 3)

// function camelize(str) {
//   console.log(str.toLowerCase().split(/ |[^a-zA-Z0-9]/).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(""))
// }

// camelize("cODE warS")
// camelize("cODE-warS")

// function validBraces(braces){
//   let p = 0
//   let c = 0
//   let b = 0 

//   for (let i = 0; i < braces.length; i++) {
//     if (braces[i] === "("){
//       p++
//     }
//     else if (braces[i] === "["){
//       c++
//     }else if (braces[i] === "{"){
//       b++
//     }else if (braces[i] === ")"){
//       p--
//     }
//     else if (braces[i] === "]"){
//       c--
//     }else if(braces[i] === "}"){
//       b--
//     }
//   }
//   console.log(c === 0 && b === 0 && p === 0)
// }


// validBraces("()))")
// validBraces("([{}])")


// function countSmileys(arr) {
//   let count = 0
//   for (let i = 0; i < arr.length; i++) {
//     let smile = arr[i].split("")
//     if (smile.length === 3)
//     {
//       if (
//         (smile[0] === ":" || smile[0] === ";") 
//         && 
//         (smile[1] === "-" || smile[1] === "~")
//         && 
//         (smile[2]=== ")" || smile[2] === "D") 
//         ){
//           console.log(smile, "yes, 3 len")
//           count++
//         }
//       } else if (smile.length === 2){
//         if ((smile[0] === ":" || smile[0] === ";" )
//         && 
//         (smile[1]=== ")" || smile[1] === "D" )) {
//           count++
//       }
//     } 
//   }
//   console.log(count)
// }

// countSmileys([';]', ':[', ';*', ':$', ';-D'])

// countSmileys([':D',':~)',';~D',':)'])

// function persistence(num) {
//   let count = 0
//   while (num.toString().length > 1) {
//     num = num.toString().split("").reduce((p , d) => p * parseInt(d), 1)
//     count++
//   }
//   console.log(count)
// }

// persistence(39)
// persistence(4)
// persistence(999)


// function arithmetic(a, b, operator){
//   switch (operator) {
//     case "add":
//       return a + b
//     case "subtract":
//       return a - b
//     case "multiply":
//       return a * b
//     case "divide":
//       return a / b
//   }
// }

// console.log(arithmetic(1, 2, "add"))
// console.log(arithmetic(8, 2, "subtract"))
// console.log(arithmetic(5, 2, "multiply"))
// console.log(arithmetic(8, 2, "divide"))

// function SeriesSum(n) {
//   let count = 1
//   let m = 0
//   let result = 1
//   if (n <= 1 ) return n.toFixed(2)
//   while (m !== n) {
//     result+= 1/(4 + (3 * m))
//     count++
//     m++ 
//   }

//   return result.toFixed(2).toString()
// }

// console.log(SeriesSum(0))
// console.log(SeriesSum(1))
// console.log(SeriesSum(2))
// console.log(SeriesSum(4))