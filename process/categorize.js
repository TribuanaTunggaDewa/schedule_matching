exports.collect = (array) => {
    collectionTime = {
        
    }
    data = array

    key = Object.keys(data[0])

    key.map(element => {
        collectionTime[element] = []
    })

    for (i=0; i < data.length; i++){
        for(key in data[i]){

                    collectionTime[key].push(data[i][key])
                
        }
    }
    return collectionTime
}
