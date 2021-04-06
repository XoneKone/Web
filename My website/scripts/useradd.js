let item = document.getElementById("userdiv");

item.onclick = function(){
    answer = prompt("Введите текст","");
    if (answer != null) {
       let div = document.createElement('div')
       let a = document.createElement('a')
       a.innerHTML = answer
       div.append(a)
       item.prepend(div)
    }
}

item.oncontextmenu = function(){
    let lastchild = item.firstChild
    item.remove(lastchild)
}