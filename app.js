let token = "6c39d089-d593-44b5-8b7b-acad269932a8"

async function getContatos(){
    const data = await fetch('https://api.box3.work/api/Contato/'+token)
}

async function postContatos(){
    let name = document.getElementById("name").value;
    let fone = document.getElementById("fone").value;
    let email = document.getElementById("email").value;
    let status = document.getElementById("status").checked;
    let data = document.getElementById("data").value;

    let infos = {
        nome: name,
        telefone: fone,
        email: email,
        ativo: status,
        dataNascimento: data
    }

    let request = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(infos)
    }
    console.log(request.body)
    fetch('https://api.box3.work/api/Contato/'+token, request)
        .then(res => res.json())
         .then(resData => {
                    console.log("Resposta da API:", resData);
                })
                .catch(error => {
                    console.error("Erro na requisição:", error);
                });
}