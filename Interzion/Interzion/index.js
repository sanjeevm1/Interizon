const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
}); 

function log(){
	var http=new XMLHttpRequest();
	http.onload()=()=>{
		document.getElementById("test").innerHTML=http.responseText;
	}
	http.open("GET",`http://localhost:3000/home?name=arun`);
	http.send();
}
