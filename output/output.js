exports.print = (array) => {
    data = array
    key = Object.keys(data)

    for(i=0; i < key.length; i++){
        for(j=0;j < data[key[i]].length;j++){
            if(j == 0){
                console.log(`${key[i]} : ${data[key[i]][j].value}`)
            }
        }
    }
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