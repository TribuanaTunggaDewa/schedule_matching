const File = require('./input/fileOperation')
const Input = require('./input/inputOperation')
const object = require('./process/objectMapping')
const freetime = require('./process/getFreetime')
const categorize = require('./process/categorize')
const sorting = require('./process/sorting')
const compare = require('./process/compare')
const output = require('./output/output')
const sliceObj = require('./process/sliceObject')

main = async () => {
    let result = []
    let bind = []
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
    n = json.n
    t = json.t
    listFreetime = freetime.getTime(json.data)

    collect = categorize.collect(listFreetime)

    
    sort = sorting.sort(collect, t)

    

    for(key in sort){
        bind[key] =  compare.compare( sort[key], listFreetime, [key])
    }
    for(key in bind){
        if(bind[key].length == 0){
            continue
        }
        result[key] = bind[key]
    }

    
    slice = sliceObj.objSlice(result, n)
    output.print(slice, n)

}

main()