// Faça download da API:
const url = "http://localhost:5500/api"

// Lista todos os usuários
function getUsers(){ 
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}
// Lista usuário por ID
function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => { 
        const data = response.data
        userID.textContent = data.id
        userName.textContent = data.name
        userAvatar.src = data.avatar
        userCity.textContent = data.city
    })
    .catch(error => console.error(error))
}
// Insere usuário
function addNewUser(newUser){
    axios.post(url, newUser)
    .then(response =>{
        console.log(response)
    })
    .catch(error => console.error(error))
}
const newUser = { // userContrutor
    name: "Novo Usuário",
    city: "NewYork",
    avatar: "https://picsum.photos/500/500",
}
// Atualizar usuário
function updateUser(id, userUpdate){
    axios.put(`${url}/${id}`,userUpdate)
    .then(response => console.log(response))
    .catch(error => console.error(error))

}
const userUpdate = { // userConstrutorUpdate
    name: "Usuário atualizado",
    city: "Cidade Local",
    avatar: "https://picsum.photos/500/500",
}


getUsers()
getUser(1)
//addNewUser(newUser)
//updateUser(3, userUpdate)
