
const urlApi = "https://api.box3.work/api/Contato/6c39d089-d593-44b5-8b7b-acad269932a8"

async function getAllContatos() {
    fetch(urlApi)
        .then(response => response.json())
        .then(data => {
            // Processar os dados da API e exibir na tabela
            showData(data);
        })
        .catch(error => {
            console.error("Erro na requisição:", error);
        });
    function showData(data) {
        var tabelaBody = document.querySelector("#tabela tbody");

        // Limpar o conteúdo atual da tabela
        tabelaBody.innerHTML = "";

        // Adicionar cada item da API como uma linha na tabela
        data.forEach(item => {
            var newRow = tabelaBody.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);
            var cell6 = newRow.insertCell(5);

            cell1.textContent = item.id;
            cell2.textContent = item.nome;
            cell3.textContent = item.telefone;
            cell4.textContent = item.email;
            cell5.textContent = item.ativo;
            cell6.textContent = item.dataNascimento;
            // Adicione mais células conforme necessário
        });
    }

}
async function getContatobyId() {
    let id = document.getElementById("id").value;
    fetch(urlApi + "/" + id)
        .then(response => response.json())
        .then(data => {
            // Processar os dados da API e exibir na tabela
            showData(data);
        })
        .catch(error => {
            console.error("Erro na requisição:", error);
        });
    function showData(data) {
        var tabelaBody = document.querySelector("#tabela tbody");

        // Limpar o conteúdo atual da tabela
        tabelaBody.innerHTML = "";

        // Adicionar cada item da API como uma linha na tabela
        var newRow = tabelaBody.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);

        cell1.textContent = data.id;
        cell2.textContent = data.nome;
        cell3.textContent = data.telefone;
        cell4.textContent = data.email;
        cell5.textContent = data.ativo;
        cell6.textContent = data.dataNascimento;
        // Adicione mais células conforme necessário
    };
}

async function postContatos() {
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
    fetch(urlApi, request)
        .then(res => res.json())
        .then(resData => {
            console.log("Resposta da API:", resData);
        })
        .catch(error => {
            console.error("Erro na requisição:", error);
        });
}
async function putContatobyId() {
    let name = document.getElementById("namePUT").value;
    let fone = document.getElementById("fonePUT").value;
    let email = document.getElementById("emailPUT").value;
    let status = document.getElementById("statusPUT").checked;
    let data = document.getElementById("dataPUT").value;

    let infos = {
        nome: name,
        telefone: fone,
        email: email,
        ativo: status,
        dataNascimento: data
    }
    let request = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(infos)
    }
    let id = document.getElementById("idPUT").value;
    fetch(urlApi + "/" + id, request)
        .then(res => res.json())
        .then(resData => {
            console.log("Resposta da API:", resData);
        })
        .catch(error => {
            console.error("Erro na requisição:", error);
        });
}
function handleDelete(){
    const confirmation = window.confirm("Tem certeza que deseja apagar?");

      if (confirmation) {
        deleteContatobyId()
      } else {
        console.log("Ação de exclusão cancelada.");
      }
}
async function deleteContatobyId() {
    let id = document.getElementById("idDelete").value;
    let requestOptions = {
        method: 'DELETE'
    };
    console.log(urlApi + "/" + id)
    fetch(urlApi + "/" + id, requestOptions)
    .then(res => res.json())
        .then(resData => {
            console.log("Resposta da API Deletar:", resData);
        })
        .catch(error => {
            console.error("Erro na requisição:", error);
        });
}