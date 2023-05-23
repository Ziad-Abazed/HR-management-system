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
function Employee(id ,fullName,department,level,image) {
    
  this.id = id;
  this.fullName = fullName;
  this.catImage = image;
  this.department = department;
  this.level = level;
  this.image=image;

  allEmployees.push(this);
  
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
      return netSalary.toFixed(2);
}


let employee1=new Employee(generateEmployeeId(),"Ghazi Samer","Administration","Senior","https://thumbs.dreamstime.com/b/webcam-view-executive-manager-businessman-having-videocall-employees-216458723.jpg");
let employee2=new Employee( generateEmployeeId(), 'Lana Ali', 'Finance',  'Senior','https://thumbs.dreamstime.com/b/portrait-happy-office-employee-working-laptop-looking-camera-109745321.jpg' )
let employee3=new Employee( generateEmployeeId(), 'Tamara Ayoub', 'Marketing',  'Senior','https://thumbs.dreamstime.com/b/office-worker-pretty-young-sitting-41462649.jpg' )
let employee4=new Employee( generateEmployeeId(), 'Safi Walid', 'Administration',  'Mid-Senior','https://thumbs.dreamstime.com/b/close-up-happy-bearded-man-hr-makes-good-first-impression-close-up-happy-bearded-man-hr-makes-good-first-impression-applicant-183172151.jpg' )
let employee5=new Employee( generateEmployeeId(), 'Omar Zaid', 'Development',  'Senior','https://www.shutterstock.com/image-photo/portrait-smiling-millennial-arabic-businessman-260nw-1769759789.jpg' )
let employee6=new Employee( generateEmployeeId(), 'Rana Saleh', 'Development',  'Junior','https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1111/wavebreakmediamicro111101651/11205201-busy-office-worker-in-her-office.jpg' )
let employee7=new Employee( generateEmployeeId(), 'Hadi Ahmad', 'Finance',  'Mid-Senior','https://www.shutterstock.com/image-photo/successful-caucasian-smiling-man-shop-260nw-2079161422.jpg' )
document.write("<table>")
document.write("<thead>")
document.write("<tr>")
document.write("<th>#id</th>")

document.write("<th> Name</th>")
document.write("<th>Department</th>")
document.write("<th>Level</th>")
document.write("<th>image</th>")
document.write("</tr>")
document.write("</thead>")
document.write("</table>")
Employee.prototype.render=function(){
  console.log("Employee name: "+this.fullName)
  console.log("Department: "+this.department)
  console.log ("Employee salary: "+this.salary())

  document.write("<table>")
  document.write("<tbody>")
  document.write("<tr>")

  document.write(`<td> ${this.id}</td>`)
  document.write(`<td> ${this.fullName}</td>`)
  document.write(`<td> ${this.department}</td>`)
  document.write(`<td> ${this.level}</td>`)
  document.write(`<td>  <img src=${this.image} height=100px width=100px></td>`)



  document.write("</tr>")

  document.write("</tbody>")
  document.write("</table>")
}



for (let i = 0; i < allEmployees.length; i++){
allEmployees[i].render();
}




