import inquirer from "inquirer";
class Student {
    name;
    studentId;
    static id = 10000;
    courses = [];
    balance = 0;
    constructor(name) {
        this.name = name;
        this.studentId = ++Student.id;
    }
    enrollStudentInCourse(course) {
        this.courses.push(course);
    }
    depositAmount(amount) {
        this.balance += amount;
        console.log(`Your balance:${this.balance} and you deposited: ${amount}`);
    }
    viewBalance() {
        console.log(`Balance for ${this.name}: ${this.balance}`);
    }
    payTuitionFee(amount) {
        if (this.balance - amount > 0) {
            this.balance = this.balance - amount;
            console.log(`Tuition paid. New balance: ${this.balance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    showStatus() {
        console.log(`
        Student's Name: ${this.name}
        Student's ID: ${this.studentId}
        Courses Enrolled: ${this.courses.join(", ")}
        Balance: ${this.balance}
        `);
    }
}
const students = [];
async function main() {
    while (true) {
        const { choice } = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                choices: [
                    "Add a new student",
                    "Enroll a student in a course",
                    "Deposite amount to account",
                    "View a student's balance",
                    "Pay tuition fees",
                    "Show student status",
                    "Exit"
                ]
            }
        ]);
        switch (choice) {
            case "Add a new student":
                const { stuName } = await inquirer.prompt([
                    {
                        name: "stuName",
                        type: "input",
                        message: "Enter Student Name:"
                    }
                ]);
                const obj = new Student(stuName);
                students.push(obj);
                console.log(`Student added. Student ID: ${obj.studentId}`);
                console.log(students);
                break;
            case "Enroll a student in a course":
                const { stuId, stuCourse } = await inquirer.prompt([
                    {
                        name: "stuId",
                        type: "number",
                        message: "Enter the Student Id:"
                    },
                    {
                        name: "stuCourse",
                        type: "input",
                        message: "Enter the course to enrolled:"
                    }
                ]);
                const studentEnrolled = students.find((st) => st.studentId === stuId);
                console.log(studentEnrolled);
                if (studentEnrolled) {
                    studentEnrolled.enrollStudentInCourse(stuCourse);
                    console.log(`${stuCourse} enrolled for ${studentEnrolled.name}`);
                }
                else {
                    console.log(`student with Id ${stuId} not found`);
                }
                break;
            case "Deposite amount to account":
                const { studId, amount } = await inquirer.prompt([
                    {
                        name: "studId",
                        type: "number",
                        message: "Enter the Student Id:"
                    },
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter the amount to deposite:"
                    }
                ]);
                const studentDeposite = students.find((st) => st.studentId === studId);
                if (studentDeposite) {
                    studentDeposite.depositAmount(amount);
                    // console.log(`${stuCourse} enrolled for ${studentEnrolled.name}`)
                }
                else {
                    console.log(`student with Id ${studId} not found`);
                }
                break;
            case "View a student's balance":
                const { studeId } = await inquirer.prompt([
                    {
                        name: "studeId",
                        type: "number",
                        message: "Enter the Student Id:"
                    }
                ]);
                const studentBalance = students.find((st) => st.studentId === studeId);
                if (studentBalance) {
                    studentBalance.viewBalance();
                    // console.log(`${stuCourse} enrolled for ${studentEnrolled.name}`)
                }
                else {
                    console.log(`student with Id ${studeId} not found`);
                }
                break;
            case "Pay tuition fees":
                const { studenId, amountFee } = await inquirer.prompt([
                    {
                        name: "studenId",
                        type: "number",
                        message: "Enter the Student Id:"
                    },
                    {
                        name: "amountFee",
                        type: "number",
                        message: "Enter the amount to pay:"
                    }
                ]);
                const studentTuitionFee = students.find((st) => st.studentId === studenId);
                if (studentTuitionFee) {
                    studentTuitionFee.payTuitionFee(amountFee);
                    // console.log(`${stuCourse} enrolled for ${studentEnrolled.name}`)
                }
                else {
                    console.log(`student with Id ${studenId} not found`);
                }
                break;
            case "Show student status":
                const { studentId } = await inquirer.prompt([
                    {
                        name: "studentId",
                        type: "number",
                        message: "Enter the Student Id:"
                    }
                ]);
                const studentShowStatus = students.find((st) => st.studentId === studentId);
                if (studentShowStatus) {
                    studentShowStatus.showStatus();
                }
                else {
                    console.log(`student with Id ${studentId} not found`);
                }
                break;
            case "Exit":
                process.exit(0);
        }
    }
}
main();
