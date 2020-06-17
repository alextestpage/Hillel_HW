const students = [{
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
]

studentsAverageMark(students);
groupAverageMark(students);

function studentsAverageMark(studentsList){
studentsList.forEach((student) => {
    const studAverage = student.marks.reduce((acc, curr) => acc + curr) / student.marks.length;

    return console.log(`${student.name} : ${studAverage}`);
});
}

function groupAverageMark(studentsList){
    const allMarks = students.reduce((acc, curr) => acc.concat(curr.marks), []);
    const reduced = allMarks.reduce((acc, curr) => acc + curr) / allMarks.length;

    return console.log(`Average mark: ${reduced}`);
    };

