function task(){
    // const input=document.getElementById('inp')
    // if(Inp.value=="") return
    const newt=document.createElement('li')
    const task=document.getElementById('taskl')
    task.appendChild(newt)
    newt.textContent=document.getElementById('inp').value
    document.getElementById('inp').value=""
    ti(newt)
    deletetask(newt)





}
function ti(t){
    
  const b=document.createElement("button")
  b.textContent = "✓" 
  t.appendChild(b)
  b.onclick=function(e){
    e.stopPropagation()
    t.classlist.toggle("done")
    if(t.classlist.contains("done")){
        b.style.backgroundColor="green"
            
  }
    else{
        b.style.backgroundColor="yellow"
  }


}
}
function deletetask(taski){
    const bt=document.createElement('button')
    bt.textContent="Delete"
    taski.appendChild(bt)
    bt.onclick=function(){
        taski.remove()
    }


}