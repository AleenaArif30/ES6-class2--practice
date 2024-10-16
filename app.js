//_____________arrow function
myfuncarrow = () => {
    console.log('hello arrow function' + name)
}
myfuncarrow()

//_____________FUNCTION EXPRESSION

const myfuncexp = function () {
    //   console.log("function expression")
    return "function expression"
}
let exp = myfuncexp()
// exp()
console.log(exp)

//___________Higherorder fuction
//-__________function returning fuction
function outer() {
    function inner() {
        console.log("hello world")
    }
    console.log('hey')
    return inner
}
outer()
const ans = outer()
ans()



//_____________________closures
function first(x) {
    const a = 'vara'
    const b = "varb"
    function second() {
        console.log(a, b, x)
    }
    return second
}
const ans1 = first("c")
ans1()


function exponent(a) {
    function power(base) {
        return a ** base
    }
    return power
}
const finalans = exponent(2)
console.log(finalans(3))


function one() {
    const first = 10
    function two() {
        const second = 20
        function three() {
            const third = 30
            console.log(first, second, third)
        }
        return three
    }


    return two
}

const ones = one()
const twos = ones()
twos()





















//Array method


//forEach

let myarr = [2, 4, 6, 1, 10, 20]
// console.log(myarr[0]*myarr[0])
// for(var i = 0;i<myarr.length;i++){
//     console.log(myarr[i]*myarr[i])
// }
myarr.forEach(news)
myarr.forEach(square)

function square(myarr) {
    return myarr * myarr
}


function news(index, value, array) {
    console.log(value + ":" + index + ":" + "[" + array + "]")
}

//map

let arr = [10, 20, 30, 40]
console.log(arr.map(product))
function product(arr) {
    return arr * 10
}
// console.log(newarr)

//filter
let arr2 = [1, 3, 5, 9, 33, 22, 61]
let newarr2 = arr2.filter(greater)
function greater(arr2) {
    return arr2 > 10
}
console.log(newarr2)


//reduce
let arr3 = [1, 2, 4, 5, 6, 7]
let newarr3 = arr3.reduce(sum, 2) //is accumala
function sum(h1, h2) {
    return h1 + h2
    // console.log(h1+h2)
}
console.log(newarr3)

//_______________find

// let findarr = arr3.find((find)=>{
//     // console.log( find>6)
//     return find>2
// })
// console.log(findarr)
var users = [
    { id: 1, name: "Umra" },
    { id: 2, name: "Wajeeha" },
    { id: 3, name: "Sana" }
]
const findUser = users.find(user => {
    return user.id === 2 //returns the value of the first element that passes a test
})
console.log(findUser);
console.log(typeof (users))
console.log(Array.isArray(users))



//____________________________every

const products = [
    { productId: 1, productName: "Laptop", price: 45000 },
    { productId: 2, productName: "Mobile", price: 25000 },
    { productId: 3, productName: "Watch", price: 15000 },
]
const productsPrice = products.every(product => product.price <= 50000) //returns true if the function returns true for all elements
// const productsPrice = products.every(product => product.price <= 30000) //returns false if the function returns false for one element
console.log(productsPrice);


// let every = arr3.every((every)=>{
//     return every<2
// })
// console.log(every)

//________________________some

let some = arr3.some((every) => {
    return every < 2
    //console.log(every<2)
})
console.log(some)

//_________________________________include

const myarrs = [1, 2, 3]
//includes(value, indexFrom)
console.log(myarr.includes(1, 2));//returns true if an array contains a specified value, starting from a specified index



//fREEZ OBJECT

let obj = {
    name: "alina",
    age: 21
}
Object.freeze(obj)
obj.name = 'ayesha'
delete obj.age
console.log(obj)
let obj1 = Object.assign({}, obj) //shalow copy of object
console.log(obj1)

//_____________________TERNARY OPERATOR
let personage = 4
let age = personage > 5 ? "cofee" : "tea"  //"?" is ternary operator
console.log(age)




//__________________BOOLEAN
console.log(Boolean(0))
console.log(Boolean("")) // 0,'',undefine,null,false,nan (falsy values)
console.log(Boolean('0'))



