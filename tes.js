bool = []
sub = [
    [ [ '1300', '1700' ],[ '1300', '1700' ]],
    [ [ '1300', '1530' ] ],
    [ [ '1130', '1520' ] ]
  ]

a = ['1300','1530']

for(i=0;i < sub.length;i++){
    for(j=0; j < sub[i].length; j++){
        if(a[0] >= sub[i][j][0] && a[1] <= sub[i][j][1]){
            console.log(true)
            bool.push({key : [i,j], result : true})
        }else{
            console.log(false)
            bool.push({key : [i,j], result : false})
        }
    }
}

bool = bool.filter(element => {
    return element.result == true
})

console.log(bool)

if(bool.length < sub.length){
    console.log('salah ?')
    process.exit(1)
}

for(i = bool.length-1; i > 0;i--){
   range = bool[i].key[0] - bool[i-1].key[0]
   if(range > 1){
       console.log('salah ?')
   }else{
       console.log(bool[i].key[0], 'digit')
       console.log(range)
   }
}

