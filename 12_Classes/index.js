class Users{
    constructor(username, role){
        this.username = username;
        this.role     = role;
    }

    // x.getAccessId(1)
    getAccessId(accessID = 0){
        console.warn(accessID);
    }

    // x.userData
    get userData(){
        return `Username: ${this.username}, Role: ${this.role}`;
    }

    // x.returnData()
    static returnData(){
        return null;
    }
}

class Admin extends Users{
    constructor(username, role, id){
        super(username, role);
        this.id = id;  
    }

    getAccessId(accessID = 1){
        return accessID;
    }

}

let x = new Admin('jvfaeldon',2);
console.warn(x.getAccessId());