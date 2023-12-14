let contactContainer = document.querySelector('#contactContainer');
let contactBtn = document.querySelector('#contactBtn');
let inputName = document.querySelector('#inputName');
let inputNumber = document.querySelector('#inputNumber');
let createContactBtn = document.querySelector('#createContactBtn');
const rubrica ={
    contacts : [
        {nome : 'Francesco', numero : 3332123111},
        {nome : 'Alessandro', numero : 3332123111},
        {nome : 'Cristiam', numero : 3332123111},
        {nome : 'Manuel', numero : 3332123111},
        {nome : 'Alessio', numero : 3332123111},
        {nome : 'Elisa', numero : 3332123111},
        {nome : 'Caterina', numero : 3332123111},
        {nome : 'Giordano', numero : 3332123111},
        {nome : 'Leonardo', numero : 3332123111},
        {nome : 'Antonio', numero : 3332123111},
        ],
    showContacts : function(){
        this.contacts.forEach((contacts)=>{
            let cardContact= document.createElement('div')
            cardContact.classList.add('p-5',  'card-custom',)
            cardContact.innerHTML = `
            <p>${contacts.nome}</p>
            <p>${contacts.numero}</p>
            `;
           contactContainer.appendChild(cardContact);
        })
    },
}
let check= false;
contactBtn.addEventListener('click',()=>{
    if(!check){
        contactContainer.innerHTML='';
        rubrica.showContacts(); 
        check = true;
        contactBtn.innerHTML = 'Nascondi Contatti'
    }else{
        contactContainer.innerHTML='';
        check = false;
        contactBtn.innerHTML = 'Mostra Contatti'
    }
    
});