
let addItemsBtn = document.getElementById('add-items-btn');  
let addCookiesBtn = document.getElementById('add-cookies-btn'); 
let dataInput = document.getElementById('data-input');   
let cookiesInput = document.getElementById('cookies-input');                                            
let account = document.getElementById('account'); 
let itemStorage = document.getElementById('item-storage');  
let cookiesStorage = document.getElementById('coockies-storage');
let dataList = document.getElementById('data-list');  

addItemsBtn.addEventListener('click', addDataToItemList);  
addCookiesBtn.addEventListener('click', addDataToItemList);   

function addDataToItemList(event) {
  event.preventDefault();
  if (event.target === addItemsBtn) {
    const inputLine = document.createElement('div');
    inputLine.classList.add('data')
    const inputPanel = document.createElement('input');
    inputPanel.value = dataInput.value;
    inputPanel.classList.add('data-item');
    inputLine.appendChild(inputPanel);
    const editButton = document.createElement('edit-button');
    editButton.innerHTML = 'Edit';
    editButton.classList.add('edit-btn');
    inputLine.appendChild(editButton);
    const deleteButton = document.createElement('delete-button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('delete-btn');
    inputLine.appendChild(deleteButton);
    itemStorage.appendChild(inputLine);
    dataInput.value = '';
    deleteButton.addEventListener('click', deletData);
  }
  if (event.target === addCookiesBtn) {
    const inputLine = document.createElement('div');
    inputLine.classList.add('data')
    const inputPanel = document.createElement('input');
    inputPanel.value = cookiesInput.value;
    inputPanel.classList.add('cookies-input');
    inputLine.appendChild(inputPanel);
    const deleteButton = document.createElement('delete-button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('delete-btn');
    inputLine.appendChild(deleteButton);
    cookiesStorage.appendChild(inputLine);
    cookiesInput.value = '';
    deleteButton.addEventListener('click', deletData);
  }
}


 
function deletData(event) {
  let deleteButton = event.target;
  event.target.parentElement.remove()
}

