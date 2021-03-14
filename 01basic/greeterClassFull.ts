
class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
        ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
 }
 
 interface Person {
    firstName: string;
    lastName: string;
 }
 
 
 function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
 }
 
 
 let user = new Student("Jane", "M.", "User");
 
 //Person型の引数に対して、Student型を代入してる
 //同じ名前のプロパティに引き当てられる
 console.log(greeter(user));


