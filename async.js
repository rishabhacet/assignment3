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

const pic = async () => {
    try {
    const data =await filereadpro(`${__dirname}/dog.txt`);
    console.log(`breed: ${data}`);
    const res =await superagent.get(`https://dog.ceo/api/breeds/${data}/image/random`);
    console.log(res.body.message);

    await writepro('images.txt',result.body.message,);
    console.log("file saved");
    }catch(err){
        
        console.log(err.message);
        throw(err);
    }
    return "ok";

};
console.log("1 part is running");
pic().then(x=>{
    console.log(x);
    console.log("3 part");
}).catch(err => {
    console.log(err);
});

