
function TextBox(){
	document.getElementById('inp').disabled=false;
	document.getElementById('inp').focus();
}

/*Function is onclick at the submit button on the login button*/
/*function login(){
	var Username = "Andrzej Fedorowicz"
	//setting variable Username as my name. This will be the variable the code will check in order to "log you in"
	var Password = "Password"
	//Password variable is set to "Password". The function will also check the Password form to check if the input is the same
	if (document.getElementById("username").value === Username) {
		//if statement checks the username form input. If it matches, the function continues. If not, there will be an alert 
		//saying an incorrect username was submitted.
		if (document.getElementById("password").value === Password) {
			//If statement checks if the password input matches the Password variable. If so, the second header on the webpage will 
			change to say "Welcome Username(variable)" Otherwise, there will be an alert saying an incorrect password was inputed.
			document.getElementById("welcome").innerHTML = "Welcome " + Username;
		} else {alert("Incorrect Password")}
	} else {alert("Incorrect Username")}
}*/

/*function ends*/

function login(){
	for(i = 0; array.length < i; i++) {
	
		if() = {
			
		}
	}

}




function users(Username, Password) {
	this.Username = Username;
	this.Password = Password;
}
var a = 0
var array = [];
function signUp(){
	var el1 = document.getElementById("usernames").value;
	var el2 = document.getElementById("passwords").value;
	var profile = new users(el1, el2);
	/*console.log(profile);*/
	array.push(profile);
	/*console.log(array);*/
	var newUser = JSON.stringify(array);
	//Here I made the array into a string so it can be saved in local storage
	var number = JSON.stringify(a);
	localStorage.setItem("User", newUser);
	console.log(JSON.parse(localStorage.getItem("User")));
	a++
	document.getElementById("usernames").value = null;
	document.getElementById("passwords").value = null;
}