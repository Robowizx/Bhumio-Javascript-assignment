// number of table records
let size = 0;

//to set validity message for email field
function emailcheck(e){
    if(e.value != '')
        e.setCustomValidity("Enter a valid email.");
    else
        e.setCustomValidity('Please fill out this field.');            
}

//to setup table cells and style them
function setCell(row,loc,val){
    const cell = row.insertCell(loc);
    cell.innerHTML = val;
    cell.classList.add('cell-style');
    cell.addEventListener('click',()=>{
        switch(loc){
            case 0: alert(`No. = ${val}`);
                    break;
            case 1: alert(`Name = ${val}`);
                    break;
            case 2: alert(`Email = ${val}`);                
        }
    });
}

//to setup table rows
function setRow(table,loc,name,email){
    const row = table.insertRow(loc);
    setCell(row,0,loc);
    setCell(row,1,name);
    setCell(row,2,email);
}

//to switch form visibilty
function formOpen(e){
    const form_container = document.getElementById('formContainer');

    e.style.visibility = 'hidden';
    form_container.style.visibility = 'visible';
}

//to handle form submit and table manipulation
function formSubmit(){

   const form = document.getElementById('user-form').elements;
   const name_valid = form.name.validity.valid;
   const email_valid = form.email.validity.valid;

   if(name_valid && email_valid){

       const form_container = document.getElementById('formContainer');
       const add_btn = document.getElementById('add');
       const table = document.getElementById('user-table');
       const name = escape(form.name.value);
       const email = form.email.value;

       form.name.value ='';
       form.email.value ='';

       add_btn.style.visibility = 'visible';
       form_container.style.visibility = 'hidden';

       if(size == 0)
        table.deleteRow(1);

       size++;  
       setRow(table,size,name,email);
   }
   
}