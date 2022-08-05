/*Variables */
const dt=new Date();
const dateText=document.querySelector('.date');
let  theNewTask;
const inputText=document.getElementById("theNew");
const addedTask=document.getElementById("addedTask");

/*Functions And Appeanding childs */
dateText.textContent=dt.getDate() + "." + [dt.getMonth()+1] + "." + dt.getFullYear();
var i=1;
function addTask(){
    if(inputText.value == ''){
        confirm("Type a new task");
    }
    else{
        var content =inputText.value;
        const taskElement=document.createElement('div');
        taskElement.classList.add('taskaddsection');
        
        let taskLine=document.createElement('input');
        taskLine.classList.add('newtask');
        taskLine.value=content;
        taskLine.setAttribute("readonly","readonly");
    
        const btnsContainer=document.createElement('div');
        btnsContainer.classList.add('btnCont'); 
        btnsContainer.classList.add('linearBg');
         /*tell him who are the children */
    
         const spanEdit=document.createElement('span');
         spanEdit.classList.add('gradientClr');
         spanEdit.classList.add('btns');
         spanEdit.innerText="EDIT";
    
         const spanDel=document.createElement('span');
         spanDel.classList.add('delete');
         spanDel.classList.add('btns');
         spanDel.innerText="DELETE";
    
        
         taskElement.appendChild(taskLine);
         taskElement.appendChild(btnsContainer);
         addedTask.appendChild(taskElement);
         btnsContainer.appendChild(spanEdit);
         btnsContainer.appendChild(spanDel);
    
         spanEdit.addEventListener('click', function(){
            if(spanEdit.innerText.toLowerCase() == "edit"){
              taskLine.removeAttribute("readonly");
              taskLine.focus();
              /*btnsContainer.previousSibling.focus();*/
              spanEdit.innerText="SAVE";
            }
            else{
                taskLine.setAttribute("readonly", "readonly");
                spanEdit.innerText="EDIT";
            }
           });
         spanDel.addEventListener('click', function(){
             clearTimeout(timer);
            if(confirm("Are you sure you want to delete the task?") == true){
               taskElement.remove();
               document.getElementById("bottomsnackbar").style.display="block";
               var timer=setTimeout(function(){
                document.getElementById("bottomsnackbar").style.display="none";
               },3000);
            }
            else return;
        });
        taskLine.addEventListener('click', function(){
            taskLine.classList.add('line-mid');
            spanEdit.classList.add('hidden');
        });
    }
}

function login(){
    clearTimeout(timer2);
    document.getElementById("bottomsnackbar").innerHTML="Currently Not Available!";
    document.getElementById("bottomsnackbar").style.display="block";
    document.getElementById("bottomsnackbar").style.color="red";
       var timer2=setTimeout(function(){
        document.getElementById("bottomsnackbar").style.display="none";
       },4000);
}
