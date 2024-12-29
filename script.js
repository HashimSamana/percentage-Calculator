function calculateGrade() {
    var totalMarks = parseFloat(document.getElementById('totalMarks').value);
    var obtainedMarks = parseFloat(document.getElementById('obtainedMarks').value);

    var percentage = (obtainedMarks / totalMarks) * 100;
    var grade;

    if (percentage >= 90)
        {

         grade = 'A+';
    }
    else if (percentage >= 80)
        { 
            grade = 'A';
        }
    else if (percentage >= 70) 
    {
        grade = 'B';
    }
    else if (percentage >= 60) 
        {
            grade = 'C';
        }
    else if (percentage >= 50) 
        {
            grade = 'D';
        }
    else grade = 'F';

    document.getElementById('result').innerHTML = `Percentage: ;


             ${percentage.toFixed(2)}%<br>Grade: ${grade}`;
}