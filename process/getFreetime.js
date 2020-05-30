const extract = require('./extractFreetime')

exports.getTime = (array) => {
    result = []
    data = array

    data.map(element => {
        freetime = {}
        for(key in element){
            if(key.length > 1){
                continue
            }
            freetime[key] = extract.freeTime(element[key])
        }
        result.push(freetime)
    })
    
    return result
    
}