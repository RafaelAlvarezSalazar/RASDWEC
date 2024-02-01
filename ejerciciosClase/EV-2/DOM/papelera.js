
const trash = document.querySelector('.trash')
trash.addEventListener("click",function (){   
    trash.style.backgroundImage='url(https://cdn.icon-icons.com/icons2/12/PNG/256/recycling_recyclebin_empty_delete_trash_1771.png)'
    setTimeout(() => {
        alert("la papelera se ha vaciado")
    }, 50);
})
document.oncontextmenu = function(){return false}