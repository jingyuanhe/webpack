function count(){
    var div=document.createElement('div');
    div.innerHTML=10
    div.onclick=function(){
        div.innerHTML=parseInt(div.innerText)+1
    }
    document.body.appendChild(div)
}
export default count;