const File = require('./input/fileOperation')
const Input = require('./input/inputOperation')
const object = require('./process/objectMapping')
const freetime = require('./process/getFreetime')
const categorize = require('./process/categorize')

main = async () => {
    let fileName = await Input.read()
    let fileContent = await File.read(fileName).catch(err => {
        console.log(err)
        process.exit(1)
    })
    json = object.mapping(fileContent)
    if(parseInt(json.t) % 30 != 0){
        console.log(`${json.t} bukan kelipatan 30 mohon gunakan angka dengan kelipatan 30`)
        process.exit(1)
    }
    console.log(json)
    n = json.n
    t = json.t
    listFreetime = freetime.getTime(json.data)
    console.log(listFreetime)
    collect = categorize.collect(listFreetime)
    console.log(collect)
}

main()