window.addEventListener("load", function() {


let modalElem = document.getElementById("modal");



document.body.addEventListener('click', (event) => {
  if (event.target.matches('.btn')) {openModal(event);}
  if (event.target.matches('.modal_close') ||  event.target.matches(".modal")) {closeModal(event);}
})


const closeModal = event => {
    modalElem.style.opacity =0;
    setTimeout(() => {
      modalElem.style.visibility = "hidden";
      modalElem.style.display = "none";
    },300)
}


const openModal = event =>{
modalElem.style.cssText =  `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 400ms ease-in-out;
`;

modalElem.style.visibility = 'visible';
modalElem.style.opacity = 1;
}







});
