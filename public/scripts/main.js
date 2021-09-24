import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalp = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// marcar como lida
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {

    button.addEventListener("click", handleClick)
})

    // excluir
    const deleteButton = document.querySelectorAll(".actions a.delete")

    deleteButton.forEach(button => {

        button.addEventListener("click", (event) => handleClick(event, false))
    })

    //Alterar texto modal
    function handleClick(event, check = true){ 
        event.preventDefault()
        const textp = check ? "marcar como lida?" : "Excluir?"
        const slug = check ? "check" : "delete"

        const roomId = document.querySelector("#room-id").dataset.id
        const questionId = event.target.dataset.id

        const form = document.querySelector(".modal form")
        form.setAttribute("action",`/question/${roomId}/${questionId}/${slug}`)

        modalTitle.innerHTML = check ? "Marcar como lida" : "Excluir"
        modalp.innerHTML = `Tem certeza que deseja ${textp}` 
        modalButton.innerHTML = check ? "Marcar como lida" : "Sim,Excluir"
        
        //Alterar cor botao excluir
        check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

        modal.open()
    }