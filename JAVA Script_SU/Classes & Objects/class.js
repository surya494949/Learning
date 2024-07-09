// Sentex of prototype
let student = {
    fullName : "suraj MAte",
    marks : 98.5,
    id:2096
}

let print = {
    printStudentDtl() {
        console.log(this.fullName,",",this.marks,",",this.id)
    }
}

student.__proto__ = print; // here we are adding print object to student object prototype

student.printStudentDtl() // calling print class function throug student class by prototype

// IF WE have same methods in object as well as in protype object then
// parent class method will be called

let student1 = {
    fullName : "suraj MAte",
    marks : 98.5,
    id:2096,
    printStudentDtl() {
        console.log(this.fullName," (print only Name)");
    }

}
student1.__proto__ = print; 
//now there are two methods printStudentDtl one in student1 and one in print prototype in
//student1 object

student1.printStudentDtl() // it will print only Name

// Classes Started classes use to define template of an object we can create
// multiple object from class.

// class myCars created
class myCars{

    constructor(brandNameCon){
        this.brandName = brandNameCon;
        console.log(brandNameCon," car is Listed");
    }
    stratCar(){
        console.log("car is started ",this.brandName);
    }

    stopCar(){
        console.log("car is stobed ",this.brandName);
    }
    
    setBrandName(brandName){
        this.brandName = brandName;
     }
}

// create object of myCars
let lamborghini = new myCars();
lamborghini.brandName = "Lamborghini";
lamborghini.stratCar();
lamborghini.stopCar();

// using constructor
let rangeRover = new myCars("Range Rover");
rangeRover.stratCar();
rangeRover.stopCar();

// Inheritance Strated
console.log("Inheritance Started")

class Human{
    gender = "";
    type = "";
    constructor(gender,type){
        this.gender = gender;
        this.type = type;
    }

    printHumanInfo(){
        console.log("this homosipain is ",this.gender,"and type is ",this.type,".")
    }
}

// here employee calss is inheriting the all prop and methods of Human calss
class Employee extends Human{
    Name ="";
    id="";
    mobNo = "";
    printEmployeeInfo(){
        console.log(this.Name,"with Id ",this.id," & have Mob No ",this.mobNo);
    }
}

// now we create object for employee calss and inherite the Human class properties
// here we can see constructor also inherited
let emp1 = new Employee("Male","Boy"); //this mail & boy pass to Human class
emp1.Name = "Suraj Mate";               // here we are setting properties of Employee class
emp1.id = "cjoiuhreiuvchreoivh27r98u439j";
emp1.mobNo = "123457890";

emp1.printEmployeeInfo(); // call to an child class method;
emp1.printHumanInfo() // call to Prent class method

// what if both class have constructor then we have to use super keyWord

class Part {
    constructor(partName,partId){
        this.partName = partName;
        this.partId = partId;
    }

    printPartInfo(){
        console.log(this.partName," Part have id ",this.partId);
    }
}

class mobilePart extends Part {
    constructor(partId,partName ,mobilePartName){
        super(partName,partId);                     //super calling parent constructor
                                                    // with passing two patrameter
        this.mobilePartName = mobilePartName;        
    }
    printMobPartInfo(){
        super.printPartInfo()                      // calling parent class method
        console.log("& Mob Part Name is ",this.mobilePartName);
    }
}

let part1 = new mobilePart("PRT-00001","Fuse","Mobile Fuse");

part1.printMobPartInfo();