console.log('before');
/*getuser(1,(user)=>{
    getrepo(user.githubuser,(repos)=>{
        getcommit(repos[0],(commits)=>{
            console.log(commits);
        })
    })
});*/
/*getuser(1)
.then(user=> getrepo(user.githubuser))
.then(repos => getcommit(repos[0]))
.then(commits => console.log('commits',commits))
.catch(err => console.log('Error',err.message));
*/

async function displaycommits() {
    const user = await getuser(1);
    const repos = await getrepo(user.githubuser);
    const commits = await getcommit(repos[0]);
    console.log(commits);
}
displaycommits();

console.log('after');

function getuser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("loading...");
            resolve({id:id,githubuser:'thanusik'})},2000);
    })
}
function getrepo(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("calling github api...")
            resolve(['repo1','repo2','repo3']);
          },2000)
    })
}
function getcommit(repo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('calling github api...');
            resolve(['commit']);
        },2000);
    })
    
}

