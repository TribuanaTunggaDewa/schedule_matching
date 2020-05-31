exports.compare = ( d, p, char) => {
    match = []
    char = char


    for(i=0; i < d.length; i++){
      for(j=0; j < p.length; j++ ){
        for(key in p[j]){
          if(key != char){
            continue
          }
          for(k=0; k < p[j][key].length;k++){
            if(p[j][key].length == 1 && k==0){
              if(d[i].value[0] >= p[j][key][k][0] && d[i].value[1] <= p[j][key][k][1]){
                match.push([d[i].value[0],d[i].value[1]])
              }else{
                match.push(null)
                break
              }
            }else{
              if(k == 0){
                continue
              }
              if((d[i].value[0] >= p[j][key][k][0] && d[i].value[1] <= p[j][key][k][1]) || (d[i].value[0] >= p[j][key][k-1][0] && d[i].value[1] <= p[j][key][k-1][1])){
                match.push([d[i].value[0],d[i].value[1]])
              }else{
                match.push(null)
                break
              }
              
            }
          }
        }
      }
    }
    match = chunk(match, p.length)
    match = match.map(element => {
        return element.filter(item =>{
          return item != null
        })
    })

    for(i=0; i < d.length; i++){
      d[i].day = char
      d[i].result = match[i]
    }

    d = d.filter(element => {
      return element.result != undefined
    })

    d = d.filter(element => {
      return element.result.length == p.length
    })

    return d

}

chunk = (array, size) => {
  const firstChunk = array.slice(0, size);
  if(!firstChunk.length){
    return array
  }
  return [firstChunk].concat(chunk(array.slice(size, array.length),size))
}
