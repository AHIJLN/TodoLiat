window.onload = function(){
document.body.setAttribute("style","padding:50px;background-color:#f0f0f0;color:#040a2b;");
var btn=document.getElementsByClassName("btn");
    btn[0].setAttribute("style","margin:1px;float:right;border: none; font-size: larger;text-decoration-line: underline;");
htmls();

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

var _title=document.getElementById("title").value;
var _message=document.getElementById("message").value;
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
var app=document.getElementById("app");
app.innerHTML +=
        `<div id="${data._id}">
            <div style="background-color: #040a2b;padding: 10px 10px;font-size:24px;color:white;">
                <text id="title${data._id}">${data.title}</text>
<input id="check${data._id}" class="btn" type="checkbox" onclick="changeStatus('${data._id}')" />
            </div>
            <div style="background-color: white;padding: 10px 10px;font-size:18px;color:#040a2;">
                <textarea style="display:none;" id="message${data._id}">${data.content}</textarea>
            </div>
<button class="btn" id="remove${data._id}" onclick="removeList('${data._id}')">Del</button>
                <button  class="btn" id="edit${data._id}"  onclick="editList('${data._id}')">Edit</button>
<button id="update${data._id}" class="btn"  onclick="updateList('${data._id}')">Update</button>
        <br><br></div>`;

//style
var cinput=document.getElementById('check'+id);
var rbutton=document.getElementById('remove'+id);
var ebutton=document.getElementById('edit'+id);
var ubutton=document.getElementById('update'+id);
    cinput.setAttribute("style","margin:1px;float:right;border: none; font-size: larger;text-decoration-line: underline;");
    rbutton.setAttribute("style","margin:1px;float:right;border: none; font-size: larger;text-decoration-line: underline;");
    ebutton.setAttribute("style","margin:1px;float:right;border: none; font-size: larger;text-decoration-line: underline;");
    ubutton.setAttribute("style","display:none;margin:1px;float:right;border: none; font-size: larger;text-decoration-line: underline;");
};





	function removeList(id) {
	document.getElementById(id).remove();
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
	var tid=document.getElementById('title'+id);
	var mid=document.getElementById('message'+id);
	var tinput = document.createElement('input');
	tinput.value=document.getElementById('title'+id).textContent;
	tinput.id="etitle"+id;
	tinput.type="text";
	tinput.setAttribute("style","border: none;border-bottom: 2px solid;background-color: #040a2b;color:white;width: 95%;font-size:20px;");
	tid.parentNode.appendChild(tinput);
	tid.style.display="none";
	mid.setAttribute("style","display:inline;border: none;border-bottom: 2px solid;background-color: white;color:#040a2b;resize: none;width: 95%;");
//style
var cinput=document.getElementById('check'+id);
var ebutton=document.getElementById('edit'+id);
var ubutton=document.getElementById('update'+id);
ebutton.style.display="none";
ubutton.style.display="inline";
cinput.style.display="none";
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
	var title=document.getElementById('title'+id);
	var message=document.getElementById('message'+id);
	var etitle=document.getElementById('etitle'+id);
	var cinput=document.getElementById('check'+id);
	var ebutton=document.getElementById('edit'+id);
	var ubutton=document.getElementById('update'+id);

	title.textContent=etitle.value;
	etitle.remove();
	title.style.display="inline";
	message.style.display="none";
	cinput.style.display="inline";
	ebutton.style.display="inline";
	ubutton.style.display="none";
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

	  //  var title = document.getElementById('title'+id).parentNode;
	  //  var message = title.nextElementSibling;
	    var title = document.getElementById('title'+id);
	    var check = document.getElementById('check'+id);
		var ebutton=document.getElementById('edit'+id);
		var ubutton=document.getElementById('update'+id);
            if (check.checked==true) {
                title.setAttribute("style"," text-decoration: line-through;");
		ebutton.style.display="none";
		ubutton.style.display="none";
	}else {
                title.setAttribute("style"," text-decoration:none;");
		ebutton.style.display="inline";
            };

};





//style

function htmls(){
var div=document.getElementsByTagName("div");
var titlec=document.getElementById("title");
var messagec=document.getElementById("message");
titlec.setAttribute("style","border: none;border-bottom: 2px solid;background-color: #f0f0f0;float: right;width: 100%;");
messagec.setAttribute("style","border: none;border-bottom: 2px solid;background-color: #f0f0f0;resize: none;width: 100%;");
var i;
for (i = 0; i < div.length; i++) {
    div[i].setAttribute("style","padding:0px 0px 40px;");
};
};
