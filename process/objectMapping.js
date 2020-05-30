exports.mapping = (string) => {
    result = {data : []}
    string = string.split("\n").filter(element => {
        return element != ''
    })
    word = string[0].split(" ")
    word = word.filter(element => {
        return element != ''
    })
    result.n = word[0]
    result.t = word[1]
    j = 0
    for(i=1; i < string.length; i++){

        if((i == 1 || string[i-1] == 'done') && string[i] != 'done'){
            result.data.push({ name : string[i]})
            continue
        }
        if(string[i] == 'done'){
            j += 1
            continue
        }
        let time = string[i].split(" ").filter(element => {
            return element != ''
        })
        if(string[i][0] != string[i-1][0]){
            result.data[j][time[0]] = [[time[1],time[2]]]
        }else{
            result.data[j][time[0]].push([time[1],time[2]])
        }      
    }
    return result;
}