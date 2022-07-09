
//step
//1.HTML
//2.JS
//3.alert
//4.newList
//5.innerHTML+div
//6.update display="none"
//7.removeList()
//8.editList()
//8.1 input
//8.2 textarea
//8.3 display none (title+message+edit button)
//8.4 display inline update buttoon
//9.updateList()
//9.1 input+textarea.value=text
//9.2 input+textarea.remove()
//9.3 display none (update button)
//9.4 display inline title message edit buttoon
//10.check(X),check(),line-through
//11.changeList:edit button +message,none
//12.style


window.onload=function (){

document.head.innerHTML+=`
<style>
body{
  padding: 20px 20px 0;
  color:#040a2b;
  font-size:20px;
}

div{
  
  padding: 0 0 40px;
  
}

#title{
  border: none;
  border-bottom: 2px solid;
  width: 95%;
}

#message{
  border: none;
  border-bottom: 2px solid;
    width: 95%;
}

button{
  background-color: white;
  font-size: larger;
  float: right;
    border: none;
  text-decoration-line: underline;
}

.btn{
  background-color: white;
  font-size: larger;
  float: right;
    border: none;
  text-decoration-line: underline;
}

.onetitle{
  background-color: #040a2b;
  padding: 10px 10px 10px;
  color:white;
}

.twotitle{
  background-color: white;
  padding: 10px 10px 10px;
  color:#040a2b;;
}

.oneedit{
  font-size: 24px;
  color: white;
  border: none;
  border-bottom: 2px solid;
  width: 95%;
   background-color: #040a2b;
}

.twoedit{
  border: none;
  border-bottom: 2px solid;
    width: 95%;
}







</style>




`;


};



var id=1;
function addList(){

var _title =_("title").value;
var _message =_("message").value;

if(_title==""||_message==""){

alert("Please type word!");

}else{

var newtodo={
'_id':id,
'title':_title,
'message':_message,
};
newList(newtodo);
id++;
};};


//newList

function newList(data){
document.body.innerHTML+=`
<div id="${data._id}">
<div class="onetitle" >
<text id="title${data._id}">${data.title}</text>
<input id="check${data._id}" class="btn" onclick="changeList('${data._id}')" type="checkbox"/>
</div>
<div class="twotitle">
<text id="message${data._id}">${data.message}</text>
</div>
<button onclick="editList('${data._id}')" id="edit${data._id}">Edit</button>
<button style="display:none" onclick="updateList('${data._id}')" id="update${data._id}">Update</button>
<button onclick="removeList('${data._id}')" id="remove${data._id}">Remove</button>
</div>`;
};


function removeList(id){

_(id).remove();

};


function editList(id){
_('title'+id).parentNode.innerHTML+=`<input id="editt${id}" class="oneedit" type="text" />`;
_('editt'+id).value=_('title'+id).textContent;
_('message'+id).parentNode.innerHTML+=`<input id="editm${id}" class="twoedit" type="text" />`;
_('editm'+id).value=_('message'+id).textContent;
_('title'+id).style.display="none";
_('message'+id).style.display="none";
_('edit'+id).style.display="none";
_('update'+id).style.display="inline";
};

function updateList(id){
_('title'+id).textContent=_('editt'+id).value;
_('message'+id).textContent=_('editm'+id).value;
_('editt'+id).remove();
_('editm'+id).remove();
_('title'+id).style.display="inline";
_('message'+id).style.display="inline";
_('edit'+id).style.display="inline";
_('update'+id).style.display="none";
};



function changeList(id){

if (_('check'+id).checked==true){
_('title'+id).style.textDecorationLine="line-through";
_('edit'+id).style.display="none";
_('message'+id).style.display="none";
}else{
_('title'+id).style.textDecorationLine="none";
_('edit'+id).style.display="inline";
_('message'+id).style.display="inline";
}
};




//document.getElementById

function _(id){return document.getElementById(id);};
