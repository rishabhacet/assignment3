const fs = require('fs');
const superagent =require('superagent');

const filereadpro= file =>{
    return new Promise((resolve,reject)=>{
        fs.readFile(file,(err,data)=>{
            if(err) reject('cannot get the file');
            resolve(data);
        });
    });
};
const writepro = (file,data)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(file,data,err =>{
            if(err) reject('could not write');
            resolve('sucess');
        });
    });
};
filereadpro(`${__dirname}/dog.txt`)
    .then(data => {
    console.log(`breed: ${data}`);

    return superagent.get(`https://dog.ceo/api/breeds/${data}/image/random`);
    })
    .then(result=>{
        
        console.log(result.body.message);
        return writepro('images.txt',result.body.message,)      
       
    })
    .then(() => {
    console.log('random imgage save');
    })
    .catch(err => {
        console.log(err.message);
    });
    
