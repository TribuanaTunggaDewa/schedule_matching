const fs = require('fs')

exports.read = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
        if(err){
        let warn = `error :
         file tidak ditemukan
         file yang akan dibaca
         harus diletakkan pada
         folder source, jika 
         ada pada folder lain
         harap menyertakan path
         secara lengkap mulai dari
         root folder \ncontoh:
         ./folder/file.txt \n`

        reject(warn)
        }
        resolve(data)
        })
    })
}








