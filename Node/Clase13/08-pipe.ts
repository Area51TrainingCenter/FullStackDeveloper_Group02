import * as fs from 'fs'

const readStream = fs.createReadStream("./archivoStream.txt", "utf8")

const writeStream = fs.createWriteStream("./archivoEscrituraStream.txt", "utf8")

readStream.pipe(writeStream)