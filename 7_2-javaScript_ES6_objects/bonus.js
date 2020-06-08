// Objecto criado no exercício 5

const allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: { 
    materia: 'História', 
    numeroEstudantes: 20, 
    professor: 'Carlos'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
}

// 1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const countMathStudents = (course) => {
  let students = 0;
  for (i in allLessons) {
    if (allLessons[i].materia == course) {
      students += allLessons[i].numeroEstudantes;
    }
  }
  return students;
}

// 2. Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
const createReport = (lessons, teacher) => {
  let courses = [];
  let students = 0;
  for (i in lessons) {
    if (lessons[i].professor == teacher) {
      courses.push(lessons[i].materia);
      students += lessons[i].numeroEstudantes;
    }
  }
  return {
    professor: teacher,
    aulas: courses,
    estudantes: students   
  }
}

console.log(createReport(allLessons, 'Maria Clara'));