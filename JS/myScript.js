<<<<<<< HEAD
function TextBox(){
	document.getElementById('inp').disabled=false;
	document.getElementById('inp').focus();
}

/*Function is onclick at the submit button on the login button*/
function login(){
	var Username = "Andrzej Fedorowicz"
	/*setting variable Username as my name. This will be the variable the code will check in order to "log you in"*/
	var Password = "Password"
	/*Password variable is set to "Password". The function will also check the Password form to check if the input is the same*/
	if (document.getElementById("username").value === Username) {
		/*if statement checks the username form input. If it matches, the function continues. If not, there will be an alert 
		saying an incorrect username was submitted.*/
		if (document.getElementById("password").value === Password) {
			/*If statement checks if the password input matches the Password variable. If so, the second header on the webpage will 
			change to say "Welcome Username(variable)" Otherwise, there will be an alert saying an incorrect password was inputed.*/
			document.getElementById("welcome").innerHTML = "Welcome " + Username;
		} else {alert("Icorrect Password")}
	} else {alert("Incorrect Username")}
}

=======
function TextBox(){
	document.getElementById('inp').disabled=false;
	document.getElementById('inp').focus();
}

/*Function is onclick at the submit button on the login button*/
function login(){
	var Username = "Andrzej Fedorowicz"
	/*setting variable Username as my name. This will be the variable the code will check in order to "log you in"*/
	var Password = "Password"
	/*Password variable is set to "Password". The function will also check the Password form to check if the input is the same*/
	if (document.getElementById("username").value === Username) {
		/*if statement checks the username form input. If it matches, the function continues. If not, there will be an alert 
		saying an incorrect username was submitted.*/
		if (document.getElementById("password").value === Password) {
			/*If statement checks if the password input matches the Password variable. If so, the second header on the webpage will 
			change to say "Welcome Username(variable)" Otherwise, there will be an alert saying an incorrect password was inputed.*/
			document.getElementById("welcome").innerHTML = "Welcome " + Username;
		} else {alert("Icorrect Password")}
	} else {alert("Incorrect Username")}
}

>>>>>>> origin/master
/*function ends*/