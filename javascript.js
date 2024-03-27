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

function dnaStrand(dna){
  
}

dnaStrand("AAAA")
dnaStrand("ATTGC")
dnaStrand("GTAT")