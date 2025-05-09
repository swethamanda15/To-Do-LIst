function addtask() {
    const taskinput = document.getElementById("text");
    const taskvalue = taskinput.value.trim();

    if(taskvalue === ""){
        alert("Please Enter Your Task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskvalue;

  

    const completebtn = document.createElement("button");
    completebtn.textContent = "Complete";
    completebtn.className = "complete";
    completebtn.onclick = function () {
        li.classList.toggle("completed");
    };
    
    li.appendChild(completebtn);


    // const editbtn = document.createElement("button");
    // editbtn.textContent = "Edit";
    // editbtn.className = "edit";
    // editbtn.onclick = function () {
    //     const newText = prompt("Edit your task:", span.textContent);
    //     if (newText !== null && newText.trim() !== "") {
    //         span.textContent = newText.trim();
    //     }
    // };
    // li.appendChild(editbtn);
    


    
    const deletebtn = document.createElement("button");
    deletebtn.textContent="Delete";
    deletebtn.className="delete";
    deletebtn.onclick = function() {
        li.remove();
    };
    
    li.appendChild(deletebtn);

    

    document.getElementById("result").appendChild(li);


    taskinput.value = " ";
}