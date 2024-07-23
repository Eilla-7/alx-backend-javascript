export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const first_student: Student = {
    firstName: "Eilaf",
    lastName: "Ahmed",
    age: 23,
    location: "Sudan",
};

const second_student: Student = {
    firstName: "Yousif",
    lastName: "Ahmed",
    age: 19,
    location: "Sudan",
};

const studentsList: Array<Student> = [
    first_student,
    second_student,
];

