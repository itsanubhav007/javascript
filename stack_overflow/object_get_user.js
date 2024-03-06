const user = {
_email : 'h@hc.com',
_password : "abc" 
,
get email(){
return this._email.toLocaleUpperCase();
},
set email(value){
this._email = value;
}



}


console.log(user.email);
 const tea  = Object.create(user);
 console.log(tea.email);


