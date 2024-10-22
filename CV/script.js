function sumbitForm(){
    var form =document.getElementById('cvForm');
    var formData = new FormData(form)

    
var name = formData.get('name');
var email = formData.get('email');
var gender = formData.get('gender'); 
var agree = formData.get('agree');

var reader = new FileReader(); 
reader.readAsDataURL(formData.get('photo'));

reader.onload = function(event){ 
var photoData = event.target.result;
var tableContent = `
<table border="1">
<tr><th>Nombre</th> <td>${name} </td></tr>
<tr><th>Email</th><td>${email}</td></tr>
<tr><th>Género</th><td>${gender}</td></tr>
<tr><th>Foto</th> <td><img src="${photoData}" alt="Foto" width="100"></td></tr> <tr><th>Aceptó términos</th><td>${agree ? 'Si' : 'No'}</td> </tr>
</table>
`;
alert("Formulario enviado con éxito");
var newwindow= window.open();
newwindow.document.write(tableContent)
}
}

