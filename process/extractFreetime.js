exports.freeTime = (array) => {
    begin = 0900
    end = 1700
    free = []
    data = array
    for(i = 0; i < data.length; i++){
        if(data.length == 1){
            if(parseInt(data[i][0]) > begin){
                timeStart = begin.toString()
                time = data[i][0]
                if(timeStart.length < 4){
                    timeStart = `0${timeStart}`
                }
                if(time.length < 4){
                    time = `0${time}`
                }
                free.push([timeStart,time])
            }
            if(parseInt(data[i][1]) < end){
                timeEnd =  end.toString()
                time = data[i][1]
                if(time.length < 4){
                    time = `0${time}`
                }
                if(timeEnd.length < 4){
                    timeEnd = `0${timeEnd}`
                }
                free.push([time, timeEnd])
            }
        }else{
            if(i == 0){
                if(parseInt(data[i][0]) > begin){
                    timeStart = begin.toString()
                    time = data[i][0]
                    if(timeStart.length < 4){
                        timeStart = `0${timeStart}`
                    }
                    if(time.length < 4){
                        time = `0${time}`
                    }
                    free.push([timeStart,time])
                }
            }else {
                if(parseInt(data[i][0]) > parseInt(data[i-1][1])){
                    timeStart = data[i-1][1]
                    timeEnd = data[i][0]
                    if(timeStart.length < 4){
                        timeStart = `0${timeStart}`
                    }
                    if(timeEnd.length < 4){
                        timeEnd = `0${timeEnd}`
                    }
                    free.push([timeStart, timeEnd])
                }            
                if(i == data.length-1){
                    if(parseInt(data[i][1]) < end){
                        timeStart = data[i][1]
                        timeEnd = end.toString()
                        if(timeStart.length < 4){
                            timeStart = `0${timeStart}`
                        }
                        if(timeEnd.length < 4){
                            timeEnd = `0${timeEnd}`
                        }
                        free.push([timeStart, timeEnd])
                    }
                }           
            }
        }
    }
    return free
}