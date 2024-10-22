console.log('before');
getuser(1,(user)=>{
getrepo(user.githubuser,(repos)=>{
    getcommit(repo,displaycommits); 
});
});
console.log('after');

function getuser(id,callback){
    setTimeout(()=>{
        console.log("loading...");
        callback({id:id,githubuser:'thanusik'})},2000)
}
function getrepo(username,callback){
      setTimeout(()=>{
        console.log("calling github api...")
        callback(['repo1','repo2','repo3']);
      },2000)
}
function displaycommits(commits){
    console.log(commits);
}
function getcommit(repos,displaycommits){

}
