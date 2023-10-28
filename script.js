'use strict'

// learn function in javascript

// normal function

function sayHello() {
    console.log('Hello');
    return 'hello world'
}

const text = sayHello();
console.log(text);

// const sum = b => 10 + b; 
const sum = (a, ...b) => {
    let total = 0;
    for (let i = 0; i < b.length; i++){
        total += b[i];
    }
    return total + a;
};
console.log(sum(2, 3, 4, 5, 6, 7));

// there are 3 ways to copy array in javascript : slice, from function, and spread
const scores = [10,20,30,40,50,60]

//slice
const copyScores = scores.slice()
console.log(copyScores);

//from function
const copyScores2 = Array.from(scores)
console.log(copyScores2);

//spread operator
const copyScores3 = [...scores];
console.log(copyScores3);

// Destructuring 
const product = {
    id: 1,
    name: "Pen",
    price: 1.2,
    stock: 10
};
const { id, name, price, stock } = product
console.log("id : ", id);
console.log("name : ", name);
console.log("price : ", price);
console.log("stock : ", stock);

const printReceipt = ({ id, name, price, stock }) => {
    console.log(`id = ${id}`);
    console.log(`name = ${name}`);
    console.log(`price = ${price}`);
    console.log(`stock = ${stock}`);
    
}
printReceipt(product)

// Destructuring array
const priceList = [10, 20, 30, 40, 50]
 console.log(priceList[0]);
 console.log(priceList.at(0));
// const [p1, p2, p3, p4, p5] = priceList
// const [p1, p2, ...rest] = priceList
const [, , p3, p4, p5] = priceList;
console.log(p3,p4,p5);