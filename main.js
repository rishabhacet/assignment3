const fs = require('fs');
const superagent =require('superagent')
fs.readFile(`${__dirname}/dog.txt`,(err,result)=>{
    console.log(`breed: ${result}`);
    superagent.get('https://dog.ceo/api/breeds/image/random').end((err,result)=>{
        if(err) return console.log(err.message);
        console.log(result.body.message);
        
        fs.writeFile('images.txt',result.body.message,err=>{
            if(err) return console.log(err.message);
            console.log("image of dog is saved in file");
        });
    });
});
