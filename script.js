emailjs.init("fg3x9snV40S-ijke0");

const form = document.getElementById("form");
const status = document.getElementById("status");
const message = document.getElementById("message");

function selectPackage(pkg){
message.value = "Ik wil graag het pakket: " + pkg;
document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}

form.addEventListener("submit", function(e){
e.preventDefault();

status.innerText = "Versturen...";

emailjs.send("service_z81n99u","template_csno00g",{
from_name: document.getElementById("name").value,
from_email: document.getElementById("email").value,
message: message.value
})

.then(()=>{
status.innerText = "Succes! We nemen contact op.";
form.reset();
})

.catch(()=>{
status.innerText = "Fout bij verzenden.";
});
});