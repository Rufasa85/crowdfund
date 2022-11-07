const projectForm = document.querySelector("#addProject");
projectForm.addEventListener("submit",e=>{
    e.preventDefault();
    const projObj = {
        name:document.querySelector("#projectName").value,
        description:document.querySelector("#projectDescription").value,
        needed_funding:document.querySelector("#projectFunding").value,
    }

    fetch("/api/projects",{
        method:"POST",
        body:JSON.stringify(projObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})

const delButtons = document.querySelectorAll(".delBtn");

delButtons.forEach(delBtn=>{
    delBtn.addEventListener("click",e=>{
        const projId = e.target.getAttribute("data-projid")
        console.log(projId);
        fetch(`/api/projects/${projId}`,{
            method:"DELETE"
        }).then(res=>{
            if(res.ok){
                location.reload();
            } else {
                alert("trumpet sound")
            }
        })
    })
})