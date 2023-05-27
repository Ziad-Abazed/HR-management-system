let arrIds=[];
function generateEmployeeId() {
 
let getID= Math.floor(1000 + Math.random() * 9000);
if(arrIds.includes(getID)){
  generateEmployeeId();
}else{
  arrIds.push(getID);
  return getID;
}


}
var allEmployees=[]
function Employee(fullName,department,level,image) {
    
  this.fullName = fullName;
  this.catImage = image;
  this.department = department;
  this.level = level;
  this.image=image;

  allEmployees.push(this);
  
}
Employee.prototype.id=function(){
  return generateEmployeeId();
}

Employee.prototype.salary=function(){
  var salaryRange;
  if(this.level=="Senior"){
      salaryRange = { min: 1500, max: 2000 };

  }else if(this.level=="Mid-Senior"){
      salaryRange = { min: 1000, max: 1500 };

  }else{
      salaryRange = { min: 500, max: 1000 };

  }

  var EmployeeSalary = Math.floor(
      salaryRange.min + Math.random() * (salaryRange.max - salaryRange.min + 1))
      var netSalary = EmployeeSalary - EmployeeSalary * 0.075;
      return netSalary.toFixed(0);
}


let employee1=new Employee("Ghazi Samer","Administration","Senior","./assets/Ghazi.jpg");
let employee2=new Employee(  'Lana Ali', 'Finance',  'Senior','./assets/Lana.jpg' )
let employee3=new Employee(  'Tamara Ayoub', 'Marketing',  'Senior','./assets/Tamara.jpg' )
let employee4=new Employee( 'Safi Walid', 'Administration',  'Mid-Senior','./assets/Safi.jpg' )
let employee5=new Employee(  'Omar Zaid', 'Development',  'Senior','./assets/Omar.jpg' )
let employee6=new Employee('Rana Saleh', 'Development',  'Junior','./assets/Rana.jpg' )
let employee7=new Employee(  'Hadi Ahmad', 'Finance',  'Mid-Senior','./assets/Hadi.jpg' )



let main=document.getElementById("main");

let flexdiv=document.createElement("div");

flexdiv.className="flex-box";

let Administrationdiv=document.createElement("div");

Administrationdiv.className="Administrationtdiv";

let Financediv=document.createElement("div");

Financediv.className="Financediv";


let Marketingdiv=document.createElement("div");

Marketingdiv.className="Marketingdiv";


let Developmentdiv=document.createElement("div");

Developmentdiv.className="Developmentdiv";



Employee.prototype.render=function(){
  console.log("Employee name: "+this.fullName)
  console.log("Department: "+this.department)
  console.log ("Employee salary: "+this.salary())

  let carddiv=document.createElement("div");
  carddiv.className="cards";
  let img=document.createElement("img");
  img.setAttribute("src",`${this.image}`);
  let line1=document.createElement("p");
  line1.textContent=`Name:${this.fullName} - ID: ${this.id()}`;
  
  let line2=document.createElement("p");
  line2.textContent=`Department: ${this.department} - Level:${this.level}`;
  console.log(line2)
  let line3=document.createElement("p");
  line3.textContent=`Salary:${this.salary()}`;
  
  
  carddiv.appendChild(img)
  
  carddiv.appendChild(line1)
  carddiv.appendChild(line2)
  carddiv.appendChild(line3)

  switch(this.department){
    case 'Administration':Administrationdiv.appendChild(carddiv);break;
    case 'Finance':Financediv.appendChild(carddiv);break;
    case 'Marketing':Marketingdiv.appendChild(carddiv);break;
    case 'Development':Developmentdiv.appendChild(carddiv);break;
  }
}


flexdiv.appendChild(Administrationdiv)
flexdiv.appendChild(Financediv)
flexdiv.appendChild(Marketingdiv)
flexdiv.appendChild(Developmentdiv)
main.appendChild(flexdiv);
for (let i = 0; i < allEmployees.length; i++){
allEmployees[i].render();
}




