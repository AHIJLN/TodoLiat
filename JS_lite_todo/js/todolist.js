window.onload = function(){
___('body')[0].setAttribute("style","padding:50px 10px 200px;background-color:#ffffff;color:#040a2b;");
 button("submit");
uline("title","message");
_('submit').parentNode.style.padding="0 0 100px";
};
//                 HTML
//    +-------------------------------+
//    |title                          |
//    |message                        |
//    |                    [addList]  |
//    +-------------------------------+    
//                             |         
//                  +----------|         
//                  |          V
//                  | +------------------+
//                  | | title.value==""  |
//                  | | message.value="" |
//                  | |  (alert_text)    |
//                  | +------------------+
//                  |                      
//                  |                      
//                  |                      
//                  |                  
//                  |                      
//                  |             
//           newList (newtodo)
//                  |
//                  v
//    +-------------------------------+
//    |_id=id                         |
//    |title==>_title=title.value     |
//    |content==>_messag=message.value|
//    +-------------------------------+

var id=1;
function addList() {  
(_("title").value==""||_("message").value=="")?alert_t():t_m();
};

//         (newList(newtodo))
//                  |
//                  v
//    +---------------------------+
//    |           body            |
//    +---------------------------+
//    | id=1                      |
//    | title            [check)] |
//    | content                   |
//    |  [update](none)[edit][Del]|
//    +---------------------------+

function newList(data) {

___("body")[0].innerHTML +=
        `<div id="${data._id}">
            <div>
                <text id="title${data._id}">${data.title}</text>
<input id="check${data._id}" class="btn" type="checkbox" onclick="changeStatus('${data._id}')" />
            </div>
<div><text  id="message${data._id}">${data.content}</text>
            </div>
<button  id="remove${data._id}" onclick="removeList('${data._id}')">Del</button>
                <button  class="btn" id="edit${data._id}"  onclick="editList('${data._id}')">Edit</button>
<button id="update${data._id}" style="display:none" onclick="updateList('${data._id}')">Update</button>
<br><br>       </div>`;

//style
newList_inner("title"+id,"message"+id);
button('check'+id,'remove'+id,'edit'+id);

};





	function removeList(id) {
	_(id).remove();
};


//                   [edit]
//                     |
//                     v
//    +-----------------------------------+
//    | input(editt+id)     [check](none) |
//    | (input.value=title.text)          |
//    | textarea(editm+id)                |
//    | (textarea.value=message.text)     |
//    | text(none)                        |
//    | text(none)                        |
//    |  [update](inline)[edit](none)[Del]|
//    +-----------------------------------+

	function editList(id) {
	_('title'+id).parentNode.innerHTML+=`<input id="editt${id}"  type="text" \>`;
	_('message'+id).parentNode.innerHTML+=`<textarea id="editm${id}"></textarea></div>`;
_('editt'+id).value=_('title'+id).textContent;
_('editm'+id).value=_('message'+id).textContent;
//style
editList_inner('editt'+id,'editm'+id);
displays('check'+id,'title'+id,'message'+id,'edit'+id);
button('update'+id);
};


//                   [update]
//                     |
//                     v
//    +-----------------------------------+
//    | input(remove)     [check](inline) |
//    | textarea(remove)                  |
//    | text(inline)                      |
//    | (title.text=input.value)          |
//    | text(inline)                      |
//    | (message.text=textarea.value)     |
//    |  [update](none)[edit](inline)[Del]|
//    +-----------------------------------+

	function updateList(id){
	_('title'+id).textContent=_('editt'+id).value;
	_('editt'+id).remove();
	_('message'+id).textContent=_('editm'+id).value;
	_('editm'+id).remove();
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

//                [check()]
//                    |
//                    v
//    +---------------------------------+
//    | title                 [check()] |
//    | content(inline)                 |
//    |[update](none)[edit](inline)[Del]|
//    +---------------------------------+
	function changeStatus(id) {
         (_('check'+id).checked==true)?check_line('title'+id,"line-through",'message'+id,'edit'+id):check_line('title'+id,"none",'edit'+id,'message'+id);

};


//Lite dom
//_(id)= document.getElementById(id)
function _(id) { return document.getElementById(id); };
//___(id)= document.getElementsByTagNamne(id)
function ___(id) { return document.getElementsByTagName(id); };
//__(id)= document.getElementsByClassName(id)
function __(id) { return document.getElementsByClassName(id); };


//style
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

//alert_text
        
function alert_t(){
alert(" Please type title and message !"); 
};

//title_message_newList
function t_m(){
        var newtodo = {
            '_id': id,
            'title': _("title").value,
            'content': _("message").value,
        };
        newList(newtodo); 
id++;
    };

function displays(...vars){
   var len=vars.length;
    for(var i=0;i<len;i++){
 (_(vars[i]).style.display=="none")?_(vars[i]).style.display="inline":_(vars[i]).style.display="none";
};};


function newList_inner(a,b){

_(a).parentNode.setAttribute("style","background-color: #040a2b;padding:10px 10px;font-size:24px;color:#ffffff;");
_(b).parentNode.setAttribute("style", "background-color: #ffffff;padding: 10px 10px;font-size:18px;color:#040a2;")

};


function editList_inner(a,b){
_(a).setAttribute("style","border: none;border-bottom: 2px solid;background-color: #040a2b;color:#ffffff;width: 95%;font-size:20px;");
_(b).setAttribute("style","border: none;border-bottom: 2px solid;background-color: #ffffff;color:040a2b;width: 95%;font-size:18px;resize:none;");
};


function check_line(a,b,c,d){
_(a).style.textDecorationLine =b ;
displays(c,d);



};
