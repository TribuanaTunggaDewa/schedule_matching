//buat gambaran
check = () =>{

}

exec = () => {
    smallestRange = []
    data = [
        [ [ '1300', '1700' ],[ '1300', '1700' ]],
        [ [ '1300', '1530' ] ],
        [ [ '1130', '1530' ] ]
      ]
    matchTime = []

    for(i=0;i < data.length;i++){
        for(j=0;j < data[i].length; j++){
            smallestRange.push({key : [i,j],range : data[i][j][1] - data[i][j][0]})
            console.log(data[i][j][1] - data[i][j][0])
        }
    }

    console.log(data[0])

    smallestRange = smallestRange.sort((a, b) => (a.range > b.range) ? 1 : -1)
    for(i=0; i < smallestRange.length; i++){
        if(smallestRange[i].range < 60){
            continue
        }
        
    }
}

exec()