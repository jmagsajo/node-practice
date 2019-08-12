const greeter = (name = "User", age = "secret") => {
    console.log('Hello ' + name)
    console.log("Your age is " + age)
}

greeter("Joseph", 18)

greeter()