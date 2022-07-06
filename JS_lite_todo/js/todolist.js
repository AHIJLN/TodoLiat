window.onload = function(){
___('body')[0].setAttribute("style","padding:50px 10px 200px;background-color:#ffffff;color:#040a2b;");
 button("submit");
uline("title","message");
};




//                 HTML
//    +-------------------------------+
//    |title                          |
//    |message                        |
//    |                    [addList]  |
//    +-------------------------------+    
//                             |         
//                             |
//           JS (newtodo)------+
//                  |
//                  v
//    +-------------------------------+
//    |_id=id                         |
//    |title==>_title=title.value     |---->(alert)
//    |content==>_messag=message.value|
//    +-------------------------------+

var id = 1; 
function addList() {  

var _title=_("title").value;
var _message=_("message").value;
    if (_title == "" || _message == "") {
        alert(" Please type title and message !"); 
    } else {
        var newtodo = {
            '_id': id,
            'title': _title,
            'content': _message,
        };
        newList(newtodo); 
        id++;
    }
}


//         (newList(newtodo))
//                  |
//                  v
//    +---------------------------+
//    | id=1                      |
//    | title            [check)] |
//    | content(none)             |
//    |  [update](none)[edit][Del]|
//    +---------------------------+

function newList(data) {
___("body")[0].innerHTML +=
        `<div id="${data._id}">
            <div>
                <text id="title${data._id}">${data.title}</text>
<input id="check${data._id}" class="btn" type="checkbox" onclick="changeStatus('${data._id}')" />
            </div>
<div><textarea style="display:none;" id="message${data._id}">${data.content}</textarea>
            </div>
<button  id="remove${data._id}" onclick="removeList('${data._id}')">Del</button>
                <button  class="btn" id="edit${data._id}"  onclick="editList('${data._id}')">Edit</button>
<button id="update${data._id}" style="display:none" onclick="updateList('${data._id}')">Update</button>
        <br><br><br></div>`;

//style

_(id).style.padding="100px 0 0";
_('title'+id).parentNode.setAttribute("style","background-color: #040a2b;padding:10px 10px;font-size:24px;color:#ffffff;");
_('message'+id).parentNode.setAttribute("style", "background-color: #ffffff;padding: 10px 10px;font-size:18px;color:#040a2;")
button('check'+id,'remove'+id,'edit'+id);

};





	function removeList(id) {
	_(id).remove();
};


//               [edit]
//                  |
//                  v
//    +---------------------------+
//    | input       [check](none) |
//    | content(inline)           |
//    |  [update][edit](none)[Del]|
//    +---------------------------+



	function editList(id) {
//	var tinput = document.createElement('input');
//	tinput.value=_('title'+id).textContent;
//	tinput.id="etitle"+id;
//	tinput.type="text";
//	tinput.setAttribute("style","border: none;border-bottom: 2px solid;background-color: #040a2b;color:#ffffff;width: 95%;font-size:20px;");
//	_('title'+id).parentNode.appendChild(tinput);
	_('title'+id).parentNode.innerHTML+=`<input id="editt${id}"  type="text" \>`;
_('editt'+id).value=_('title'+id).textContent;
_('editt'+id).setAttribute("style","border: none;border-bottom: 2px solid;background-color: #040a2b;color:#ffffff;width: 95%;font-size:20px;");

//style
uline('message'+id);
displays('check'+id,'title'+id,'edit'+id);
button('update'+id);
};


//               [update]
//                  |
//                  v
//    +---------------------------+
//    | title             [check] |
//    | content(none)             |
//    |  [update](none)[edit][Del]|
//    +---------------------------+

	function updateList(id){
	_('title'+id).textContent=_('editt'+id).value;
	_('editt'+id).remove();
	displays('title'+id,'message'+id,'check'+id,'edit'+id,'update'+id);

};

//                [check(X)]
//                    |
//                    v
//    +-------------------------------+
//    | -title-            [check(X)] |
//    | content(none)                 |
//    |[update](none)[edit](none)[Del]|
//    +-------------------------------+

	function changeStatus(id) {
            if (_('check'+id).checked==true) {
	    _('title'+id).setAttribute("style"," text-decoration: line-through;");
	displays('edit'+id);
	}else {
               _('title'+id).setAttribute("style"," text-decoration:none;");
	displays('edit'+id);
            };

};

//_(id)= document.getElementById(id)
function _(id) { return document.getElementById(id); };
//___(id)= document.getElementsByTagNamne(id)
function ___(id) { return document.getElementsByTagName(id); };
//__(id)= document.getElementsByClassName(id)
function __(id) { return document.getElementsByClassName(id); };

function button(...vars) {
   var len=vars.length;
    for(var i=0;i<len;i++){
 _(vars[i]).setAttribute("style","margin:1px;float:right;border: none; background-color: #ffffff;font-size: larger;text-decoration-line: underline;");
};};


function uline(...vars) {
   var len=vars.length;
    for(var i=0;i<len;i++){
  _(vars[i]).setAttribute("style","resize:none;border: none;border-bottom: 2px solid;background-color: #ffffff;float: right;width: 100%;");
};};


function displays(...vars){
   var len=vars.length;
    for(var i=0;i<len;i++){
(_(vars[i]).style.display=="none")?_(vars[i]).style.display="inline":_(vars[i]).style.display="none";
};};
