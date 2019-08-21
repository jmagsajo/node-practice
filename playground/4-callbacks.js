/* setTimeout( () => {
    console.log('Two seconds are up')
}, 2000)

const names = ['Joseph', 'Andrew', 'Jen', 'Jess']
const shortNames = names.filter( (name) => {
    return name.length <= 4
}) */

// const geocode = (address, callback) => {
    
//     /* const data = {
//         latitude : 0,
//         longitude : 0
//     }
    
//     return data */

//     setTimeout(() => {
//         const data = {
//             latitude : 0,
//             longitude : 0
//         }
        
//         callback(data)
//     }, 2000)

// }

// const data = geocode('Philadelphia')
// console.log(data)

/* geocode('Philadelphia', (data) => {
    console.log(data)
}) */

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (a, b, callback) => {

//     setTimeout(() => {
//         const data = a + b
        
//         callback(data)
//     }, 2000)

// }

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })

const dowWorkCallback = (callback) => {
    setTimeout( () => {
        // callback('This is my error!', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

dowWorkCallback((error, result) => {
    if(error){
        return console.log(error)
    }

    console.log(result)
})