class user {
    constructor(username)
    {
        this.username = username

    }

    logme(){
        console.log(`username ${this.username}`);
    }
    static createId(){
        return '123'
    }
}

const anubhav = new user("anubhav")
console.log(anubhav.createId());

