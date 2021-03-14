class Student {
    fullName: string;
    constructor(
        firstName: string,
        middleInitial: string,
        lastName: string
    )
    {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
    
function greeter(student: Student) {
    return "Hello, " + student.fullName;
}

let student = new Student("Jane", "M.", "User");

console.log(greeter(student));
