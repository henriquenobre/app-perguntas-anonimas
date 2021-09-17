export  default function Modal(){

    //Selecionando classes da modal para alterações
    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    //adcionando classe para abrir modal
    function open(){

        modalWrapper.classList.add("active")
    } 
    
    //removendo classe para fechar modal
    function close(){

        modalWrapper.classList.remove("active")
    }

   
    return{
        open,
        close
    }
}
