let id;
let list = [];
let list2 = [];

function inserir() {
  let name = document.getElementById("iName").value;
  let email = document.getElementById("iEmail").value;
  let bday = document.getElementById("iDate").value;
  let tbody = document.querySelector("tbody");

  if (name === "" || email === "" || bday === "") {
    alert("ora ora vc n escreveu algo");
    return;
  }

  let obj = {};
  if (list.length === 0) {
    obj = { id: 1, name, email, bday };
    id = obj.id;
    list.push(obj);
  } else {
    for (let pessoa of list) {
      if (pessoa.name === name && pessoa.email === email) {
        alert("esse amiguim já existe");
        return;
      } else if (pessoa.email === email) {
        alert("ja tem um amiguim com esse email");
        return;
      }
    }
    obj = { id: id + 1, name, email, bday };
    list.push(obj);
    id++;
  }

  const tr = document.createElement("tr");
  const button = document.createElement("button");
  button.innerHTML = "Excluir";
  button.setAttribute("class", "delete");
  button.setAttribute("id", id);
  button.setAttribute("onclick", `deletar(${id})`);
  let td = document.createElement("td");
  td.innerHTML = id;
  tr.append(td);
  td = document.createElement("td");
  td.innerHTML = name;
  tr.append(td);
  td = document.createElement("td");
  td.innerHTML = email;
  tr.append(td);
  td = document.createElement("td");
  td.innerHTML = bday;
  tr.append(td);
  td = document.createElement("td");
  td.appendChild(button);
  tr.append(td);
  tbody.appendChild(tr);
}

function limpar() {
  let tbody = document.querySelector("tbody");
  list = [];
  tbody.innerHTML = "";
}

function deletar(id) {
  let bId = document.getElementById(id);
  for (let pessoa of list) {
    if (Number(bId.id) === pessoa.id) {
      let pos = list.indexOf(pessoa);
      list.splice(pos, 1);
      document.getElementById("tbody").deleteRow(pos);
    }
  }
}
