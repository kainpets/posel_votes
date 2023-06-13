const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync('./GLOS_2_151.PDF');

pdf(dataBuffer).then(function(data) {
    console.log(data.text)
    }
)