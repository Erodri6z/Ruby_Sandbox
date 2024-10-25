// function moveZeros(arr) {
//   let array = arr.filter((notZeros) => notZeros !== 0)
//   const zerosArr = arr.filter((zeros) => zeros === 0)
//   arr.filter.push(...zerosArr)
//   return array
// }

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


function wave(str) {
  let result = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue
    }
    let wave = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1)

    result.push(wave)
  }
  console.log(result)
}

wave("gap")
wave("sleep and weep")