
function generateEmployeeId() {
  return Math.floor(1000 + Math.random() * 9000);
}



var employee1={
  id: generateEmployeeId(), 
  fullName: 'Ghazi Samer',
  department: 'Administration',
  level: 'Senior',

  salary:function(){
salaryRange = { min: 1500, max: 2000 };
    var salary = Math.floor(
      salaryRange.min + Math.random() * (salaryRange.max - salaryRange.min + 1)
    );
    var netSalary = salary - salary * 0.075; // Subtract 7.5% tax
    return netSalary.toFixed(2);
  },
  url:'https://thumbs.dreamstime.com/b/webcam-view-executive-manager-businessman-having-videocall-employees-216458723.jpg'

}


var employee2={
  id: generateEmployeeId(), 
  fullName: 'Lana Ali',
   department: 'Finance', 
   level: 'Senior',
   salary:function(){
    salaryRange = { min: 1500, max: 2000 };
         var salary = Math.floor(
           salaryRange.min + Math.random() * (salaryRange.max - salaryRange.min + 1)
         );
         var netSalary = salary - salary * 0.075; // Subtract 7.5% tax
         return netSalary.toFixed(2);
       },
   url:'https://thumbs.dreamstime.com/b/portrait-happy-office-employee-working-laptop-looking-camera-109745321.jpg'
}
var employee3={
id: generateEmployeeId(), 
fullName: 'Tamara Ayoub',
 department: 'Marketing',
  level: 'Senior',
  salary:function(){
    salaryRange = { min: 1500, max: 2000 };
         var salary = Math.floor(
           salaryRange.min + Math.random() * (salaryRange.max - salaryRange.min + 1)
         );
         var netSalary = salary - salary * 0.075; // Subtract 7.5% tax
         return netSalary.toFixed(2);
       },
  url:'https://thumbs.dreamstime.com/b/office-worker-pretty-young-sitting-41462649.jpg'
}

var employee4={
id: generateEmployeeId(),
 fullName: 'Safi Walid', 
 department: 'Administration', 
 level: 'Mid-Senior',
 salary:function(){
  salaryRange = { min: 1000, max: 1500 };
       var salary = Math.floor(
         salaryRange.min + Math.random() * (salaryRange.max - salaryRange.min + 1)
       );
       var netSalary = salary - salary * 0.075; // Subtract 7.5% tax
       return netSalary.toFixed(2);
     },
url:'https://thumbs.dreamstime.com/b/close-up-happy-bearded-man-hr-makes-good-first-impression-close-up-happy-bearded-man-hr-makes-good-first-impression-applicant-183172151.jpg' 
}

var employee5={
id: generateEmployeeId(),
 fullName: 'Omar Zaid', 
 department: 'Development',
  level: 'Senior',

  salary:function(){
    salaryRange = { min: 1500, max: 2000 };
         var salary = Math.floor(
           salaryRange.min + Math.random() * (salaryRange.max - salaryRange.min + 1)
         );
         var netSalary = salary - salary * 0.075; // Subtract 7.5% tax
         return netSalary.toFixed(2);
       },

  
  url:'https://www.shutterstock.com/image-photo/portrait-smiling-millennial-arabic-businessman-260nw-1769759789.jpg' 
}

var employee6={
id: generateEmployeeId(), 
fullName: 'Rana Saleh',
 department: 'Development',
  level: 'Junior',
  salary:function(){
    salaryRange = { min: 500, max: 1000 };
         var salary = Math.floor(
           salaryRange.min + Math.random() * (salaryRange.max - salaryRange.min + 1)
         );
         var netSalary = salary - salary * 0.075; // Subtract 7.5% tax
         return netSalary.toFixed(2);
       },

  
  url:'https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1111/wavebreakmediamicro111101651/11205201-busy-office-worker-in-her-office.jpg'
}

var employee7={
id: generateEmployeeId(),
 fullName: 'Hadi Ahmad',
  department: 'Finance', 
level: 'Mid-Senior' ,
salary:function(){
  salaryRange = { min: 1000, max: 1500 };
       var salary = Math.floor(
         salaryRange.min + Math.random() * (salaryRange.max - salaryRange.min + 1)
       );
       var netSalary = salary - salary * 0.075; // Subtract 7.5% tax
       return netSalary.toFixed(2);
     },
url:'https://www.shutterstock.com/image-photo/successful-caucasian-smiling-man-shop-260nw-2079161422.jpg'
}
// Employee information
var employees = [
  employee1,employee2,employee3,employee4,employee5,employee6,employee7
];



var table = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
var trow = document.createElement('tr');

var thid= document.createElement('th');
thid.textContent="#id"
trow.appendChild(thid)

var thFullName = document.createElement('th');
thFullName.textContent="full name"
trow.appendChild(thFullName)

var thdepartment = document.createElement('th');
thdepartment.textContent="department"
trow.appendChild(thdepartment)

var thlevel = document.createElement('th');
thlevel.textContent="level"
trow.appendChild(thlevel)

var thsalary = document.createElement('th');
thsalary.textContent="salary"
trow.appendChild(thsalary)

var thimage = document.createElement('th');
thimage.textContent = 'Image';
trow.appendChild(thimage);

thead.appendChild(trow);
table.appendChild(thead);

  for (const item of employees) {
  // var employee = employees[i];
 //console.log(employee)
  console.log("Employee name : "+item.fullName)
  console.log("Employee salary : "+item.salary())

    var row = document.createElement('tr');
  
 var idCell = document.createElement('td');
 idCell.textContent = item.id;
    row.appendChild(idCell);

    var fullNameCell = document.createElement('td');
    fullNameCell.textContent = item.fullName;
    row.appendChild(fullNameCell);
  
    var departmentCell = document.createElement('td');
    departmentCell.textContent = item.department;
    row.appendChild(departmentCell);
  
    var levelCell = document.createElement('td');
    levelCell.textContent = item.level;
    row.appendChild(levelCell);
  
    var salaryCell = document.createElement('td');
    salaryCell.textContent = item.salary();
    row.appendChild(salaryCell);

    var imageCell = document.createElement('td');
    var image = document.createElement('img');
    image.setAttribute(
      'src',
      item.url,
    );
    image.setAttribute('height', 100); //  height in px
image.setAttribute('width', 100); //  width in px
  
   
    imageCell.appendChild(image);
    row.appendChild(imageCell);
  

    tbody.appendChild(row);
  }
  

  table.appendChild(tbody);
  

  document.body.appendChild(table);