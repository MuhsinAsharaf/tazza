
function validate() {
    var name = document.forms["frm"]["name"].value;
    var email = document.forms["frm"]["email"].value;
    var num = document.forms["frm"]["num"].value;
    var address= document.forms["frm"]["address"].value;
    var message = document.forms["frm"]["message"].value
       
    if (name == "" || email == "" || message == "" || num == "" || message  =="" || address =="") {
        alert("All fields must be filled out");
        return false;
    }
    else if (/^[0-9]/.test(email)) {
        alert("Email cannot start with a number.");
        return false;
    }
    else{
        alert("Thank you for connecting with us");
    }

}
