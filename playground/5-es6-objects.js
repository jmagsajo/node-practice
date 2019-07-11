//Object property shorthand

const name = 'Joseph'
const userAge = 28

const user = {
    name,
    age: userAge,
    location: 'Manila'
}

console.log(user)

//Obhect destructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

/* const {label:productLabel, stock, rating = 5} = product

console.log(productLabel)
console.log(stock)
console.log(rating) */

const transaction = (type, /* myProduct */{ label, stock }) => {
    // const { label } = myProduct
    console.log(type, label, stock)
}

transaction('order', product)