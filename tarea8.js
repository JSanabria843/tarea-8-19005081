class Tutoring {
    constructor() {
      this.students = [];
      this.teachers = [];
    }
  
    getStudentByName(name, surname) {
      return this.students.find(student => student.name === name && student.surname === surname);
    }
  
    getTeacherByName(name, surname) {
      return this.teachers.find(teacher => teacher.name === name && teacher.surname === surname);
    }
  
    getStudentsForTeacher(teacher) {
      return this.students.filter(student => 
        student.courses.some(studentCourse => 
          teacher.courses.some(teacherCourse => 
            teacherCourse.course === studentCourse.course && teacherCourse.level >= studentCourse.level
          )
        )
      );
    }
  
    getTeacherForStudent(student) {
      return this.teachers.filter(teacher => 
        teacher.courses.some(teacherCourse => 
          student.courses.some(studentCourse => 
            teacherCourse.course === studentCourse.course && teacherCourse.level >= studentCourse.level
          )
        )
      );
    }
  
    addStudent(name, surname, email) {
      const student = new Student({ name, surname, email });
      this.students.push(student);
      return student;
    }
  
    addTeacher(name, surname, email) {
      const teacher = new Teacher({ name, surname, email });
      this.teachers.push(teacher);
      return teacher;
    }
  }
  
  // Prueba del código
  let tutoring = new Tutoring();
  tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
  tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
  tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
  
  let student = tutoring.getStudentByName('Rafael', 'Fife');
  student.addCourse('maths', 2);
  student.addCourse('physics', 4);
  
  let teacher = tutoring.getTeacherByName('Paula', 'Thompkins');
  teacher.addCourse('maths', 4);
  
  let students = tutoring.getTeacherForStudent(student);
  let teachers = tutoring.getStudentsForTeacher(teacher);
  
  console.log(students[0]); 
  console.log(teachers[0]); 
  
  student = tutoring.getStudentByName('Kelly', 'Estes');
  students = tutoring.getTeacherForStudent(student);
  teachers = tutoring.getStudentsForTeacher(teacher);
  
  console.log(students[0]); 
  console.log(teachers[0]); 
  