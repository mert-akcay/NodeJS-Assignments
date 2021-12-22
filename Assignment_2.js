const postlar = [
    {id:'1',content:'javascript'},
    {id:'2',content:'nodejs'},
    {id:'3',content:'reactjs'},
];

const listPosts = () =>{
    postlar.map(post => {
        console.log(post.content);
    })
};

const addPost = (newPost) => {
    let promise1 = new Promise((resolve,reject)=>{
        postlar.push(newPost);
        resolve('Post Eklendi.');
        reject('Bir hata oluştu.');
    })
    return promise1;
};

async function showPosts(){
    try{
        await addPost({id:'4',content:'async'});
        listPosts();
    }catch(err){
        console.log(err);
    }
};

showPosts()