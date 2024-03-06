class user {

    constructor(email , password)
    {
   this.email = email,
   this.password = password
    }
  
get email(){
  return this._email.toUpperCase()
}

set email(value){
  this._email = value;
}


    get password(){
        return this._password.toUpperCase()
    }

  set password(value){
 this._password = value;
  }

}


const anubhav = new user("aRT@gmail.com" , "123Abc")
console.log(anubhav.password);
console.log(anubhav.email);
console.log(anubhav);