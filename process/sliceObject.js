exports.objSlice = (obj, lastExclusive) => {
    var filteredKeys = Object.keys(obj).slice(0, lastExclusive);
    var newObj = {};
    filteredKeys.forEach(function(key){
        newObj[key] = obj[key];
    });
    return newObj;
}