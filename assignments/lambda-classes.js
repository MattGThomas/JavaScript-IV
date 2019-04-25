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
const matt = new Student({
    name: 'matt',
    favSubjects: ['math', 'poker', 'pencil-skirts']
});

const nubia = new ProjectManager({
    name: 'Nubia'
})
