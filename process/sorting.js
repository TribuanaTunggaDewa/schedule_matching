exports.sort = (array, t) => {

    result = {}
    data = array

    for(key in data){
        result[key] = smallest(data[key])
    }
    return result
}

smallest = (array) => {
    smallestRange = []
    for(i=0; i < array.length; i++){
        for(j=0;j < array[i].length; j++){
            range = (Math.floor(parseInt(array[i][j][1] - array[i][j][0])/30) - parseInt((array[i][j][1] - array[i][j][0]).toString().slice(0,1)) ) * 30
            if(range == -60){
                range = 30
            }
            smallestRange.push({key : [i,j], range, value : [array[i][j][0],array[i][j][1]]})
        }
    }
    
    smallestRange = smallestRange.sort((a, b) => (a.range > b.range) ? 1 : -1)

    console.log(smallestRange)

    smallestRange =smallestRange.filter(element => {
        return element.range >= t
    })

    
    
    return smallestRange
    
}

exports.sort()