const wsProtocol = location.protocol.includes('https') ? 'wss:' : 'ws:';
const socket = new WebSocket(`${wsProtocol}//${location.host}`);


function edit_row(no) {
    document.getElementById("edit_button"+no).style.display="none";
    document.getElementById("save_button"+no).style.display="block";
    document.getElementById("delete_button"+no).style.display="block";

    const type = document.getElementById("type_row"+no);
    const title = document.getElementById("title_row"+no);
    const status = document.getElementById("status_row"+no);
    const days = document.getElementById("days_row"+no);

    const type_data = type.innerText;
    const title_data = title.innerText;
    const status_data = status.innerText;
    const days_data = days.innerText;

    // type.setAttribute("contenteditable", true);
    type.innerHTML="<input type='text' id='type_text"+no+"' value='"+type_data+"'>";
    title.innerHTML="<input type='text' id='title_text"+no+"' value='"+title_data+"'>";
    status.innerHTML="<input type='text' id='status_text"+no+"' value='"+status_data+"'>";
    days.innerHTML="<input type='text' id='days_text"+no+"' value='"+days_data+"'>";
}

function save_row(no) {
    const type_val=document.getElementById("type_text"+no).value;
    const title_val=document.getElementById("title_text"+no).value;
    const status_val=document.getElementById("status_text"+no).value;
    const days_val=document.getElementById("days_text"+no).value;

    document.getElementById("type_row"+no).innerHTML = type_val;
    document.getElementById("title_row"+no).innerHTML = title_val;
    document.getElementById("status_row"+no).innerHTML = status_val;
    document.getElementById("days_row"+no).innerHTML = days_val;

    document.getElementById("edit_button"+no).style.display="block";
    document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no) {
    document.getElementById("row"+no+"").outerHTML="";
}

function add_row() {
    const new_type = document.getElementById("new_type").value;
    const new_title = document.getElementById("new_title").value;
    const new_status = document.getElementById("new_status").value;
    const new_days = document.getElementById("new_days").value;

    const table = document.getElementById("deadline_table");
    const table_len = (table.rows.length)-1;
    table.insertRow(table_len).outerHTML = 
    "<tr id='row"+table_len+"'>" +
    "<td id='type_row"+table_len+"'>"+ new_type + "</td>" +
    "<td id='title_row"+table_len+"'>"+new_title+ "</td>" +
    "<td id='status_row"+table_len+"'>"+new_status+ "</td>" +
    "<td id='days_row"+table_len+"'>"+new_days+ "</td>" +
    "<td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row("+table_len+")'>" +
    "<input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row("+table_len+")'>" + 
    "<input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

    document.getElementById("new_type").value="";
    document.getElementById("new_title").value="";
    document.getElementById("new_status").value="";
    document.getElementById("new_status").value="";
}




socket.onmessage = (message) =>{
    
}