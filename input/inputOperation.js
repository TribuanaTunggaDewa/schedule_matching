const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

exports.read = () => {
    return new Promise((resolve, reject) => {
        rl.question('Which file you want read ? ', (answer) => {
            if(answer[0] != '.'){
                resolve(`./source/${answer}`)
            }else{
                resolve(answer)
            }
            
        })
    })
}
