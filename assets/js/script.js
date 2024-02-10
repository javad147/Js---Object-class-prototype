let stu1 = {
    id: 1,
    fullName: "Javad Bakirli",
    age: 32,
    address: "Baku"
};

let stu2 = {
    id: 2,
    fullName: "Nijat Bakirli",
    age: 29,
    address: "Qazax"
};

let stu3 = {
    id: 3,
    fullName: "Nazim Bakirli",
    age: 65,
    address: "Tovuz"
};

let stu4 = {
    id: 4,
    fullName: "Zaur Akbarov",
    age: 36,
    address: "Salyan"
};

let stu5 = {
    id: 5,
    fullName: "Emin Aliyev",
    age: 40,
    address: "Naxcivan"
};

let group = {
    name: "P418",
    capacity: 5,
    students: [],
    addStudent: function (stu) {
        if (stu === undefined) {
            console.log("Input can't be empty");
            return;
        }
        if (this.students.length >= this.capacity) {
            console.log("Group is already full");
            return;
        }
        this.students.push(stu);
    },
    getAllStudents: function(){
        let studentInfo = this.students.map(student => {
            return `ID: ${student.id}, FullName: ${student.fullName}, Age: ${student.age}, Address: ${student.address}`;
        });
        return studentInfo.join('\n');
    },
    editStudent: function(id, newData) {
        let studentToEdit = this.students.find(student => student.id === id);
        if (studentToEdit) {
            Object.assign(studentToEdit, newData);
            console.log(`Student with ID ${id} edited successfully`);
        } else {
            console.log(`Student with ID ${id} not found`);
        }
    },
    deleteStudent: function(id) {
        let indexToDelete = this.students.findIndex(student => student.id === id);
        if (indexToDelete !== -1) {
            this.students.splice(indexToDelete, 1);
            console.log(`Student with ID ${id} deleted successfully`);
        } else {
            console.log(`Student with ID ${id} not found`);
        }
    },
    searchStudent: function(query) {
        let foundStudents = this.students.filter(student => 
            student.fullName.toLowerCase().includes(query.toLowerCase())
        );
    
        let result = foundStudents.map(student => {
            return `ID: ${student.id}, FullName: ${student.fullName}, Age: ${student.age}, Address: ${student.address}`;
        }).join('\n');
    
        return result;
    },
getStudentByID: function(id) {
    let student = this.students.find(student => student.id === id);
    if (student) {
        return `ID: ${student.id}, FullName: ${student.fullName}, Age: ${student.age}, Address: ${student.address}`;
    } else {
        return `Student with ID ${id} not found`;
    }
}

};


group.addStudent(stu1);
group.addStudent(stu2);
group.addStudent(stu3);
group.addStudent(stu4);
group.addStudent(stu5);

console.log(group.getAllStudents());
console.log(group.searchStudent('Bakirli'));
console.log(group.getStudentByID(2));

group.editStudent(2, {fullName: 'Asim Abbasov', age: 30});
console.log(group.getStudentByID(2));

group.deleteStudent(2);
console.log(group.getAllStudents());





class Box {
    constructor(element) {
      this.element = element;
    }
  
    animate() {
      this.element.classList.add('animate');
    }
  
    stopAnimation() {
      this.element.classList.remove('animate');
    }
  }
  
  const boxElement = document.querySelector('.box');
  const box = new Box(boxElement);
  
  box.animate();
  
  setTimeout(() => {
    box.stopAnimation();
  }, 360000);
  