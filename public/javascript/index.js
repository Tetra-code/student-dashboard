const wsProtocol = location.protocol.includes('https') ? 'wss:' : 'ws:';
const socket = new WebSocket(`${wsProtocol}//${location.host}`);

const course_edit = document.getElementById('course-edit');
const grade_edit = document.getElementById('grade-edit');

const deadline_add = document.getElementById('deadline-add');
const deadline_edit = document.getElementById('deadline-edit');
const deadline_delete = document.getElementById('deadline-delete');
const event_add = document.getElementById('event-add');
const event_edit = document.getElementById('event-edit');
const event_delete = document.getElementById('event-delete');

const editor = document.getElementById("editor");
const close = document.getElementsByClassName("close")[0];

const dashboard= [];

socket.onmessage = (message) =>{
    try {
        const response = JSON.parse(message.data);
        displayQuote.innerText = constructQuote(
            response.firstname, response.lastname, response.content);
    } catch (e) {
        displayQuote.innerText = "Not a valid character"
        return false;
    }
}

course_edit.onclick = function() {
    editor.style.display = "block";
}

grade_edit.onclick = function() {
    editor.style.display = "block";
}

close.onclick = function() {
    editor.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == editor) {
    editor.style.display = "none";
  }
}

deadline_add.onclick = function() {
    editor.style.display = "block";
}

deadline_edit.onclick = function() {
    editor.style.display = "block";
    //pass along attributes
}




// course_edit.addEventListener('click', ()=>{
//     const payload = {
//         "method": "add",
//         "type": 'event',
//         "data": 'object'
//     }
//     firstName.value = "";
//     lastName.value = "";
//     socket.send(JSON.stringify(payload));
// })
