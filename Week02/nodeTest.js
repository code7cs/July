const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let num = 0
let count = 1
readline.question(`Enter a number?`, (num) => {
    console.log(`You entered: ${num}!`)


    var timer = setInterval(function(){

        console.log(num + ' * '+count+" = "+(num*count))
        count++

        if(count > 10){
            clearInterval(timer);
        }

    },1000)


    readline.close()
})


