exports.print = (array) => {
    result = []
    data = array
    //key = Object.keys(data)

    for(key in data){
        data[key].map(element => {
            result.push({key : element.day, value : element.value})
        })
    }

    for(i=0; i < result.length; i++){
        if(i == 0){
            console.log(`${result[i].key} : ${result[i].value}`)
        }
        else{
            if((result[i].key == result[i-1].key) && (result[i].value[0] == result[i-1].value[0] && result[i].value[1] == result[i-1].value[1])){
                continue
            }
            console.log(`${result[i].key} : ${result[i].value}`)
        }
    }

    // for(i=0; i < key.length; i++){
    //     for(j=0;j < data[key[i]].length;j++){
    //         result.log(`${key[i]} : ${data[key[i]][j].value}`)
    //     }
    // }
    // for(key in data){

    //         for(i=0;i < data[key].length;i++){
    //             if(i == 0){
    //                 console.log(`${key} => ${data[key][i]}`)
    //                 continue
    //             }
    //             if()
    //         }
        
    // }

}