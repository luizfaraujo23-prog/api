const url = "https://jsonplaceholder.typicode.com"

function buscarApi(rota){
    fetch("https://jsonplaceholder.typicode.com/" + rota)
    .then(resposta => resposta.json())
    .then(data => {
        console.log("Lista de " + rota)
        console.log(data)
    })
}
buscarApi("posts")
buscarApi("comments")
buscarApi("users")
buscarApi("photos")
buscarApi("albums")
buscarApi("todos")