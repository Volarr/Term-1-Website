
function TextBox(){
	document.getElementById('inp').disabled=false;
	document.getElementById('inp').focus();
}
//Ignore this

function users(Username, Password) {
	this.Username = Username;
	this.Password = Password;
}
//This function is an object creator. When you call the function with two parameters, it creates an object with parameters equal to whatever you want.

var array = [];
//Setting an empty array in which objects can be placed(or pushed)
function signUp(){
	var el1 = document.getElementById("usernames").value;
	//Setting the input value of the username form as a variable which will become the new object's username parameter.
	var el2 = document.getElementById("passwords").value;
	//Same thing as before, except this will be the password parameter.
	var profile = new users(el1, el2);
	//This creates a new object using the two variables that are equal to whatever the value of the inputs were.
	array.push(profile);
	//Pushing the new object to the array.
	var newUser = JSON.stringify(array);
	//Here I made the array into a string so it can be saved in local storage(local storage can't save arrays or objects, only strings)
	localStorage.setItem("User", newUser);
	/*The local storage saves the array with the new object in it. When another object is created, the array will be saved another time,
	but it won't matter considering they are essentially the same*/
	console.log(JSON.parse(localStorage.getItem("User")));
	//This just logs the array so you can see the parameters of the objects, if you forgot them.
	document.getElementById("usernames").value = null;
	document.getElementById("passwords").value = null;
	//These set the values of the forms as null, so you don't have to erase what you already typed in each time you want to create a new user.
}


var fin = true;
//This variable is used when trying to say that one of the inputs is incorrect and making alert out of it.
function login(){
	var check = JSON.parse(localStorage.getItem("User"));
	//This sets the parsed version of the array from the local storage as a variable.
	for(i = 0; check.length > i; i++) {
		//This for loop is used for checking if each input is equal to one of the parameters of one of the objects in the array.
		var arr = check[i];
		//This variable is equal to the object in the position i(so that the function checks different objects each time)
		if(document.getElementById("username").value === arr["Username"]) {
			//If statement checks if the form value of the username is equal to the parameter of the object it is currently checking
			if(document.getElementById("password").value === arr.Password){
				//Same thing, but for the password
				document.getElementById("welcome").innerHTML = "Welcome " + arr.Username
				alert("Successfully Logged In")
				fin = false
				//Sets fin as false(basically saying that the inputs are correct and there won't be any alerts saying that the inputs are incorrect)
				break;
			}
			
		}

	}
	if(fin){
		alert("Incorrect Username or Password")
	}
}//Does what I explained in the previous comment


//These functions are onclick within the HTML pages.
