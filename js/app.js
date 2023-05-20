
function generateEmployeeId() {
    return Math.floor(1000 + Math.random() * 9000);
  }
  

  function calculateSalary(level) {
    var salaryRange;
    switch (level) {
      case 'Senior':
        salaryRange = { min: 1500, max: 2000 };
        break;
      case 'Mid-Senior':
        salaryRange = { min: 1000, max: 1500 };
        break;
      case 'Junior':
        salaryRange = { min: 500, max: 1000 };
        break;
      default:
        salaryRange = { min: 0, max: 0 };
    }
    var salary = Math.floor(
      salaryRange.min + Math.random() * (salaryRange.max - salaryRange.min + 1)
    );
    var netSalary = salary - salary * 0.075; // Subtract 7.5% tax
    return netSalary.toFixed(2);
  }
  

 
  
  // Employee information
  var employees = [
    { id: generateEmployeeId(), fullName: 'Ghazi Samer', department: 'Administration', level: 'Senior',url:'https://thumbs.dreamstime.com/b/webcam-view-executive-manager-businessman-having-videocall-employees-216458723.jpg' },
    { id: generateEmployeeId(), fullName: 'Lana Ali', department: 'Finance', level: 'Senior',url:'https://thumbs.dreamstime.com/b/portrait-happy-office-employee-working-laptop-looking-camera-109745321.jpg' },
    { id: generateEmployeeId(), fullName: 'Tamara Ayoub', department: 'Marketing', level: 'Senior',url:'https://thumbs.dreamstime.com/b/office-worker-pretty-young-sitting-41462649.jpg' },
    { id: generateEmployeeId(), fullName: 'Safi Walid', department: 'Administration', level: 'Mid-Senior',url:'https://thumbs.dreamstime.com/b/close-up-happy-bearded-man-hr-makes-good-first-impression-close-up-happy-bearded-man-hr-makes-good-first-impression-applicant-183172151.jpg' },
    { id: generateEmployeeId(), fullName: 'Omar Zaid', department: 'Development', level: 'Senior',url:'https://www.shutterstock.com/image-photo/portrait-smiling-millennial-arabic-businessman-260nw-1769759789.jpg' },
    { id: generateEmployeeId(), fullName: 'Rana Saleh', department: 'Development', level: 'Junior',url:'https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1111/wavebreakmediamicro111101651/11205201-busy-office-worker-in-her-office.jpg' },
    { id: generateEmployeeId(), fullName: 'Hadi Ahmad', department: 'Finance', level: 'Mid-Senior' ,url:'https://www.shutterstock.com/image-photo/successful-caucasian-smiling-man-shop-260nw-2079161422.jpg'}
  ];
  


  var table = document.createElement('table');
  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');
  var trow = document.createElement('tr');


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

    for (var i = 0; i < employees.length; i++) {
      var employee = employees[i];
      var salary = calculateSalary(employee.level);
    console.log("Employee name : "+employee.fullName)
    console.log("Employee salary : "+salary)

      var row = document.createElement('tr');
    

      var fullNameCell = document.createElement('td');
      fullNameCell.textContent = employee.fullName;
      row.appendChild(fullNameCell);
    
      var departmentCell = document.createElement('td');
      departmentCell.textContent = employee.department;
      row.appendChild(departmentCell);
    
      var levelCell = document.createElement('td');
      levelCell.textContent = employee.level;
      row.appendChild(levelCell);
    
      var salaryCell = document.createElement('td');
      salaryCell.textContent = salary;
      row.appendChild(salaryCell);

      var imageCell = document.createElement('td');
      var image = document.createElement('img');
      image.setAttribute(
        'src',
        employee.url,
      );
      image.setAttribute('height', 100); //  height in px
image.setAttribute('width', 100); //  width in px
    
     
      imageCell.appendChild(image);
      row.appendChild(imageCell);
    
  
      tbody.appendChild(row);
    }
    

    table.appendChild(tbody);
    

    document.body.appendChild(table);