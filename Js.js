const user_name = document.getElementById("user_name");
const pass = document.getElementById("pass");
const sub = document.getElementById("sub");

sub.addEventListener("click",function(e){
if(user_name.value === '' || user_name.value == null){
    window.alert('User Name field is required');
    e.preventDefault();
}

if(pass.value ==='' || pass.value == null){
    window.alert('password field is required');
    e.preventDefault();
}

});