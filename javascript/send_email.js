function sendEmailForm(){
    event.preventDefault();
    var name=document.getElementById('nameForm').value;
    var email=document.getElementById('emailForm').value;
    var tel=document.getElementById('telForm').value;
    var choice=document.getElementById("choiceForm").value;
    var text=document.getElementById("textForm").value;
    var message= "Name: "+ name + "  Email: "+email+ "  Phone number: "+tel + "   Can help with:" + choice + "   About him/her:" + text;
    console.log(message);
    alert("Request had been send");
    Email.send("nymousano1@hotmail.com","andre.gg96@gmail.com","volunteer",message,{token:"86b36def-fa1d-42df-a949-4c93af466a3b"});
}