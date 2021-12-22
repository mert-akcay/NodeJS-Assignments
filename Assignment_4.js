const fs = require('fs');

//WRITE FILE
fs.writeFile('employees.json', '[{"name":"Arin","age": 6},','utf-8',(err)=>{
    if(err) console.log(err);
});


// READ FILE
fs.readFile('employees.json','utf-8',(err,data)=>{
    if(err) console.log(err);
    console.log(data);
});


//APPEND FILE
fs.appendFile('employees.json','\n{"name":"Mert","age": 23}]','utf-8',(err)=>{
    if(err) console.log(err);
});

//REMOVE FILE
fs.unlink('employees.json',(err)=>{
    if(err) console.log(err);
})