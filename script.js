
function shoTable() {
    checking = "";
    for (i = 0;  i < check.length; i++) {
        checking += `<tr>
                        <td>${i+1}</td>
                        <td>${check[i].firstName}</td>
                        <td>${check[i].secondName}</td>
                        <td>${check[i].mailPhone}</td>
                        <td style="align-center"><button class="btn btn-danger btn-sm mx-auto float-end" onclick="del(${i})">Delete</button></td>
                        <td style="align-center"><button class="btn btn-warning btn-sm mx-auto float-end" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button></td>
                    </tr>`
         document.getElementById('display').innerHTML = checking
        
    }
}
var check = []
function submit() {
    var firstName = document.getElementById('firstName').value
    var secondName = document.getElementById('secondName').value
    var mailPhone = document.getElementById('mailPhone').value
    var password = document.getElementById('password').value
    if (firstName === '' || secondName === '' || mailPhone === '' || password ==='') {
        emptyErrorMessage.style.display = "block"
        setTimeout(() => {
            emptyErrorMessage.style.display = 'none'
        }, 5000);
    }else{
        var list = {firstName,secondName,mailPhone,password}
       var subStudent = check.push(list)
       if(subStudent) {
        successMessage.style.display = 'block'
        setTimeout(()=>{
        successMessage.style.display = 'none'
        }, 3000)
    } else {
        alert('failed to submit')
    }
       shoTable()
        successMessage.style.display = "block"
        emptyErrorMessage.style.display = "none"
        document.getElementById('firstName').value = ''
        document.getElementById('secondName').value = ''
        document.getElementById('mailPhone').value = ''
        document.getElementById('password').value = ''
    }
    

}
function del(index) {
  check.splice(index, 1)    
  shoTable()
}
