const url="https://api.github.com/users/JamyleTeles"
const urlRepos="https://api.github.com/users/JamyleTeles/repos"
const nameUser = document.querySelector('#user')
const photo = document.querySelector('#photo')
const repositories = document.querySelector('#repos-container')

function getUser(){
    axios.get(url)
    .then(response =>{
        const data = response.data;
        renderUser(data);
    })
    .catch(error => console.log(error))
}
getUser()

function renderUser(data){
    nameUser.innerText = data.login;
    photo.setAttribute('src', data.avatar_url)
}

function getRepos(){
    axios.get(urlRepos)
    .then(response =>{
        const data = response.data;
        renderRepos(data);
    })
    .catch(error => console.log(error))
}
getRepos()

function renderRepos(data){
    for (i=0; i<data.length; i++){
        const divRepo = document.createElement('div');
        divRepo.innerHTML=`<div class="repositories">
        <div class="title-date">
            <h5 class="title-repository">${data[i].name}</h5>
            <span class="date-create">${Intl.DateTimeFormat('pt-BR').format(new Date (data[i].created_at))}</span>
        </div>
        <div class="link">
            <a href="${data[i].svn_url}"class="link-repository" target="_blank">link</a>
            <span class="language"><span class="circle"></span>${data[i].language}</span> 
        </div>
        </div>`
        repositories.appendChild(divRepo);
    }
}
