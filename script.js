function studentGrading (studentName, studentScore) {
    // 90 - 100,   A
    // 80 - 89,    B
    // 70 - 79     C

    let studentGrade
    
    debugger;
    if (studentScore >=90 && studentScore <=100) { 
        studentGrade = "A"
    }

    else if (studentScore >=88 && studentScore < 90) {
        studentGrade = "B"
    }

    else if (studentScore >=70 && studentScore < 80) {
        studentGrade = "C"
    }

    else if (studentScore >=0 && studentScore < 69) {
        studentGrade = "F"
    }
    
    console.log (`Hello ${studentName}, your score is ${studentScore} and your grade is ${studentGrade}.`)
}

studentGrading("Cameron", 91)
studentGrading("Jordan", 75)
studentGrading("Renna", 58)