const posts = [
    { title: "Post one", body: "This is post one" },
    { title: "Post two", body: "This is post two" }
]

function getPosts() {
    setTimeout(() => {
        let output = [];
        posts.map( post => {
            output.push(post);
            console.log(output)})
        }, 1000)
}

function createPost(post) {
    setTimeout(() => {
        posts.push(post);
        console.log("New post created!");
    }, 2000);
}

function createPromisePost(post) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            console.log("New post created!")
            const error = false;

            if(!error) {
                resolve();
            } else {
                reject("Error:Oops! Something went wrong.")
            }
        }, 2000)
    })
}

// createPromisePost({title:"Post three", body:"This is post three"}).then(getPosts).catch(err => console.log(err))

async function startMe(){
    await createPromisePost({title:"Post three", body:"This is post three"});
    getPosts();
}

startMe()

async function administrateError () {
    try {
        await addStudentPromise({name: "Henrietta", class:"3C"});
        getStudentList()
    } catch (error){ console.log(error)}
}