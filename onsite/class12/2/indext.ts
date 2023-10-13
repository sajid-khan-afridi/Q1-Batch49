import inquirer from "inquirer";

class Student{
    name:string;
    static num:number=10000;
    courses:string[]=[];
    studentId:number;
    balance:number=0;
    
    constructor(name:string){
        this.name=name;
        this.studentId=++Student.num;
    }

    enrollStudent(course:string){
        this.courses.push(course)
    }

    depositeBalance(amount:number){
        this.balance+=amount;
    }

    viewBalance(){
        console.log(`Your balance: ${this.balance}`)
    }

    payTuition(amount:number){
        if(this.balance-amount<0){
            console.log(`insufficient balance`)
        }else{
            this.balance-=amount;
            console.log(`Tuition paid. New balance: ${this.balance}`)
        }
    }

    showStatus(){
        console.log(`
        Student Name: ${this.name}
        course Enrolled: ${this.courses.join(", ")}
        Balance: ${this.balance}
        Student Id: ${this.studentId}
        `)
    }

}

const students:Student[]=[];

async function main(){
    while(true){
    const {choice}=await inquirer.prompt([
        {
            type:"list",
            name:"choice",
            // message:"Choose an action",
            choices:[
            'Add a new student',
            'Enroll a student in a course',
            'Deposite amount to account',
            'View a student\'s balance',
            'Pay tuition fees',
            'Show student status',
            'Exit',
            ]
        }
    ]);

    switch(choice){
        case 'Add a new student':
            const {name}=await inquirer.prompt([
                {
                    name:"name",
                    type:"input",
                    message:"Enter the name:"
                }
            ]);
            const newStudent=new Student(name);
            students.push(newStudent);
            console.log(students);
            console.log(`Student added. Student ID: ${newStudent.studentId}`)
            break;
            
        case'Enroll a student in a course':
            const {stuId, course}=await inquirer.prompt([
                {
                    name:"stuId",
                    type:"number",
                    message:"Enter the Student Id:"
                },
                {
                    name:"course",
                    type:"input",
                    message:"Enter the course to enrolled:"
                }
            ]);
            const studentToEnroll=students.find((student)=>student.studentId===stuId);
            console.log(studentToEnroll);
            if(studentToEnroll){
                studentToEnroll.courses.push(course);
                console.log(`${course} enrolled for ${studentToEnroll.name}`);
            }else{
                console.log(`student with Id ${stuId} not found`)
            }
        break;

        case 'Deposite amount to account':
            const {studId,amount}=await inquirer.prompt([
                {
                    name:"studId",
                    type:"number",
                    message:"Enter the student's ID",
                },
                {
                    name:"amount",
                    type:"number",
                    message:"Enter the amount to deposite: "
                }
            ]);
            const studentToDeposite=students.find((student)=>student.studentId===studId);
            console.log(studentToDeposite);
            if(studentToDeposite){
                studentToDeposite.balance+=amount;
                console.log(`Your new Balance is ${studentToDeposite.balance} and You deposited balance is ${amount}`)
            }else {
                console.log(`student with Id ${studId} not found`)
            }
            break;

        case'View a student\'s balance':
        const {studeId}=await inquirer.prompt([
            {
                name:"studeId",
                type:"number",
                message:"Enter the student's ID",
            }
        ]);
        const studentToViewBalance=students.find((student)=>student.studentId===studeId);
        if(studentToViewBalance){
            console.log(`Balance for ${studentToViewBalance.name}: ${studentToViewBalance.balance}`)
        }else{
            console.log(`student with Id ${studeId} not found`)
        }

            break;

        case'Pay tuition fees':
        const {studentId,TAmount}=await inquirer.prompt([
            {
                name:"studentId",
                type:"number",
                message:"Enter the student's ID:",
            },
            {
                name:"TAmount",
                type:"number",
                message:"Enter the amount to pay: "
            }
        ]);
        const studentToPay=students.find((student)=>student.studentId===studentId);
            if(studentToPay){
                studentToPay.payTuition(TAmount)
            }else{
                console.log(`student with Id ${studeId} not found`)
            }
            break;
            
        case'Show student status':
        const {student_ID}=await inquirer.prompt([
            {
                name:"student_ID",
                type:"number",
                message:"Enter the student's ID",
            }
        ]);
        const studentStatus=students.find((student)=>student.studentId===student_ID);
        if(studentStatus){
            studentStatus.showStatus();
        }else {
                console.log(`student with Id ${student_ID} not found`)
            }
            break;
            
        case'Exit':
        console.log("Goodbye!");
        process.exit(0)
        break;
    }
        
    }
}
main();
