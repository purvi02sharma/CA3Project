if(localStorage.getItem("user"))
{}
else
	{
		const user=[{username:"",password:""}]
		localStorage.setItem("user",JSON.stringify(user));
	}
function user()                                                                                                                  //function to check if any user is still logged in  on the website when it was last accesed on the browser
{
	if(localStorage.getItem("userLogin"))
	{
		document.getElementById("username").style.display="block";
		var user=localStorage.getItem("userLogin");
		var users = JSON.parse(localStorage.getItem("user"));
		var userIndex = users.findIndex(x=>x.username == user)
		console.log("hello")
		document.getElementById("username").innerHTML=users[userIndex].username;
		document.getElementById("logout").style.display="block";
		document.getElementById("login").style.display="none";
		document.getElementById("home").style.display="block";
		document.getElementById("signin").style.display="none";
	
	}
	console.log("no item present");
}

function check()                                                                                                                //function to check information entered by user while signing up
{
	var name=document.getElementById("userid");
	var safe=document.getElementById("pswrd");
	var confirm=document.getElementById("cpswrd");
	if(name.value.trim()=="")
	{
		alert("PLEASE FILL ALL THE REQUIRED DETAILS");
		console.log("ok");
		return false;
	}
	else if(safe.value.trim()=="")
	{
		alert("PLEASE FILL ALL THE REQUIRED DETAILS")
		console.log("not happening");
		return false;
	}
	else if(safe.value.trim()!=confirm.value.trim())
	{
		alert("CONFIRM PASSWORD AGAIN!!");
		console.log("ohoo");
		return false;
	}
               else if(safe.value.length<=8)
               {
                alert("PASSWORD SHOULD BE MORE THAN 8 CHARACTERS");
                   return false;
                }
             else
           {
		return true;
            }
}

function logincheck()                                                                                               //function to check information entered by user while logging-in on the website

{
    var name=document.getElementById("userid");
	var safe=document.getElementById("pswrd");
               if(name.value.trim()=="")
	{
		alert("PLEASE FILL ALL THE REQUIRED DETAILS");
		console.log("ok");
		return false;
	}
	else if(safe.value.trim()=="")
	{
		alert("PLEASE FILL ALL THE REQUIRED DETAILS")
		console.log("not happening");
		return false;
	}
               else
	{
		return true;
	}
}

function signup()                                                                                          //function to signup on the website or to add the username
{
	if(check())
	{
		document.getElementById("userid").style.border="solid 3px  orange";
		document.getElementById("pswrd").style.border="solid 3px orange";
		document.getElementById("cpswrd").style.border="solid 3px orange";
                                
		if(localStorage.getItem("user"))
		{
			var username=document.getElementById("userid").value;
			var pass=document.getElementById("pswrd").value;                                  
			var store=window.btoa(pass.toString());
			const users= JSON.parse(localStorage.getItem("user"))
			const userindex= users.findIndex(x=>x.username==username.toString())
			if(userindex==-1)
			{
				users.push({username:document.getElementById("userid").value,password:store});
				console.log("registered!");
             alert("USERNAME ADDED!!");
				localStorage.setItem("user",JSON.stringify(users));
				return true;
			}
			else 
			{
				alert("USERNAME ALREADY EXISTS!!");
				return true;
			}
		}
	
	
                 }
	else
	{
	return false;
	}
}

 function login()                                                                                                       //function to login on the website
{
	if(logincheck())
	{
		document.getElementById("userid").style.border="solid 3px orange";
		document.getElementById("pswrd").style.border="solid 3px orange";
		if(localStorage.getItem("user"))
		{
			var user=document.getElementById("userid").value;
			user=user.toString();
			var pass=document.getElementById("pswrd").value;
			const users=JSON.parse(localStorage.getItem("user"));
			const userindex=users.findIndex(x=>x.username==user);
			if(userindex>0)
			{
				var dec=window.atob(users[userindex].password);
				console.log("enterred");
				if(dec==pass)
				{
				localStorage.setItem("userLogin",user);
				console.log("set");

				return true;
			}
			alert("PASSWORD INCORRECT!!");
			document.getElementById("userid").style.border="solid 3px orange";
			document.getElementById("pswrd").style.border="solid 3px orange";
			return false;
			}
			else
			{
				document.getElementById("userid").style.border="solid 3px orange";
				document.getElementById("pswrd").style.border="solid 3px ornage";
				alert("USERNAME DOESNOT EXIST!!");
				return false;
			}
		}
		else
		{
			alert("NOT FOUND!!");
			return false;
		}
	}
	else
	{
		return false;
	}
}

function logout()                                                                                                //function to log out of a username on the website
{
         if(localStorage.getItem("userLogin"))
            {
                localStorage.removeItem("userLogin");
                document.getElementById("username").style.display="none";
                document.getElementById("logout").style.display="none";
                document.getElementById("login").style.display="block";
                document.getElementById("signin").style.display="block";
                console.log("logged out");
            }
}
