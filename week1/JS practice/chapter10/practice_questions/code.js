//question 1
let data = "secret info";
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("You are viewing website data :",data);
    }
}
let student1 = new User("pj","pjnayaks@gmail.com")
let student2 = new User("jj","jjnayaks@gmail.com")
//question 2
class Admin extends User{
    constructor(name, email){
        super(name,email)
    }
    editData(data){
        data = data;
    }
}
let Admin1 = new Admin("admin1","pppp@gmail.com");