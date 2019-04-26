// CODE here for your Lambda Classes
class Person{
    constructor(personAttribute){
        this.name = personAttribute.name;
        this.age = personAttribute.age;
        this.location = personAttribute.location;
        this.gender = personAttribute.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
};

class Instructor extends Person{
    constructor(instructorAttribute){
        super(instructorAttribute);
        this.specialty = instructorAttribute.specialty;
        this.favLanguage = instructorAttribute.favLanguage;
        this.catchPhrase = instructorAttribute.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    };
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    };
};

class Student extends Person{
    constructor(studentAttribute){
        super(studentAttribute);
        this.previousBackground = studentAttribute.previousBackground;
        this.className = studentAttribute.className;
        this.favSubjects = studentAttribute.favSubjects;
    }
    listsSubjects(favSubjects){
        for(let i=0; i<favSubjects.length; i++){
            console.log(favSubjects[i])
        }
    };
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    };
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    };
};
class ProjectManager extends Instructor{
    constructor(pmAttribute){
        super(pmAttribute);
        this.gradClassName = pmAttribute.gradClassName;
        this.favInstructor = pmAttribute.favInstructor;
    }
    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, @channel standup time!`
    };
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}
const gendo = new Instructor({
    name: 'Gendo Ikari',
    age: 48,
    location: 'Tokyo-3',
    gender: 'M',
    specialty: 'Making robots',
    favLanguage: 'Japanese',
    catchPhrase: 'Get in the robot Shinji!'
});
const midoriya = new Instructor({
    name: 'Deku',
    age: 16,
    location: 'UA Highschool',
    gender: 'M',
    specialty: 'Breaking his own arms',
    favLanguage: 'All-Might Speak',
    catchPhrase: 'Plus Ultra'  
});
const Aizawa = new Instructor({
    name: 'Shoto Aizawa',
    age: 30,
    location: 'UA Highschool',
    gender: 'M',
    specialty: 'Erausre',
    favLanguage: 'Japanese',
    catchPhrase: 'Theres nothing crueler than letting a dream end midway'
});
const shinji = new Student({
    name: 'Shinji Ikari',
    age: 15,
    location: 'Tokyo-3',
    gender: 'M',
    previousBackground: 'Crying',
    className: 'Eva Units',
    favSubjects: [
        'not getting in the robot',
        'being loved by his father',
    ]
});
const zero2 = new Student({
    name: 'Zero Two',
    age: 15,
    location: 'Earth',
    gender: 'F',
    previousBackground: 'test-subject',
    className: 'Squad 13',
    favSubjects: [
        'Hiro',
        'All things human',
        'defeating Klaxosaurs',
    ]
});
const bakugou = new ProjectManager({
    name: 'Lord Explosion Murder',
    age: 16,
    location: 'UA Highschool',
    gender: 'M',
    specialty: 'fighting Deku',
    favLanguage: 'Japanese',
    catchPhrase: 'Deku is a nerd',
    gradClassName: 'Did not graaduate',
    favInstructor: 'All-Might'
});
const levi = new ProjectManager({
    name: 'Levi Ackerman',
    age: 32,
    location: 'Wall Rose',
    gender: 'M',
    specialty: 'titan slaying',
    favLanguage: 'English',
    catchPhrase: 'KENNNYY!!!',
    gradClassName: '90th Training Corps',
    favInstructor: 'Commander Irwin'
});
console.log(zero2.listsSubjects(zero2.favSubjects))