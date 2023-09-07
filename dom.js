let header = document.getElementById('main-header');
header.style.border = '4px solid black'

let item = document.getElementById('addItem');
item.style.fontWeight = 'bold';
item.style.color = 'green';


let list = document.getElementsByClassName('list-group-item');
list[2].style.backgroundColor ='green';


for(let i = 0; i <list.length;i++){
    list[i].style.backgroundColor = 'yellow';
    list[i].style.fontWeight='bold';
}

let li = document.getElementsByClassName('cls')
li[0].style.backgroundColor ='yellow';
li[0].style.listStyle='none';
li[0].style.fontWeight='bold';
li[0].style.padding='4px 20px'
