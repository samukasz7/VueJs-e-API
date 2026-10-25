const form = document.getElementById("form")
const input = document.getElementById("tarefa")
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento) => {

    evento.preventDefault()

    const texto = input.value

    const item = document.createElement("li")

    item.innerText = texto

    if (texto.includes("erro")) {
        item.classList.add("bloqueada")
    } else {
        item.classList.add("permitida")
    }

    lista.appendChild(item)

    input.value = ""
})