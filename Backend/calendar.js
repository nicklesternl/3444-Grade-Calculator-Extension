document.addEventListener('DOMContentLoaded', function() {
    const textContent = `
Grades for Nicholas Lester
Course
MATH 1780 Section 001 - Probability Models (Fall 2023 1)
Arrange By
Due Date

You can view your grades based on What-If scores so that you know how grades will be affected by upcoming or resubmitted assignments. You can test scores for an assignment that already includes a score, or an assignment that has yet to be graded.
Name    Due    Submitted    Status    Score    Details    Submission Progress Status
1780-Homework 0 (Entering Math Answers in WA)
Assignments
Aug 25, 2023 by 11:59pm            
Click to test a different score105%    
 
 
1780-Homework 1 (Section 1.3, 1.4 and 2.1)
Assignments
Sep 1, 2023 by 11:59pm            
Click to test a different score105%    
 
 
1780-Homework 2 (Section 2.2)
Assignments
Sep 8, 2023 by 11:59pm            
Click to test a different score100%    
 
 
1780-Homework 3 (Section 2.4)
Assignments
Sep 15, 2023 by 11:59pm            
Click to test a different score100%    
 
 
1780-Homework 4 (Section 2.5)
Assignments
Sep 15, 2023 by 11:59pm            
Click to test a different score100%    
 
 
1780-Homework 5 (Section 2.3)
Assignments
Sep 22, 2023 by 11:59pm            
Click to test a different score105%    
 
 
Exam 1
Exams
Sep 26, 2023 by 3:30pm            
Click to test a different score110 / 100    
 
 
1780-Homework 6 (Section 3.1, 3.2)
Assignments
Oct 6, 2023 by 11:59pm            
Click to test a different score105%    
 
 
1780-Homework 7 (Section 3.3)
Assignments
Oct 6, 2023 by 11:59pm            
Click to test a different score105%    
 
 
1780-Homework 8 (Section 3.4)
Assignments
Oct 13, 2023 by 11:59pm            
Click to test a different score100%    
 
 
1780-Homework 9 (Section 3.5, 3.6)
Assignments
Oct 13, 2023 by 11:59pm            
Click to test a different score100%    
 
 
Exam 2
Exams
Oct 17, 2023 by 3:30pm            
Click to test a different score110 / 100    
 
 
1780-Homework 10 (Review for Calculus I)
Assignments
Oct 27, 2023 by 11:59pm            
Click to test a different score105%    
 
 
1780-Homework 11 (Section 4.1, 4.2)
Assignments
Oct 27, 2023 by 11:59pm            
Click to test a different score100%    
 
 
1780-Homework 12 (Section 4.3)
Assignments
Nov 3, 2023 by 11:59pm            
Click to test a different score105%    
 
 
1780-Homework 13 (Section 4.4)
Assignments
Nov 10, 2023 by 11:59pm            
Click to test a different score105%    
 
 
Exam 3
Exams
Nov 28, 2023 by 3:30pm            
Click to test a different score100 / 100    
 
 
1780-Homework 14 (Section 4.5)
Assignments
Dec 1, 2023 by 11:59pm            
Click to test a different score103%    
 
 
1780-Homework 15 (Section 4.6, 5.4, 5.5)
Assignments
Dec 1, 2023 by 11:59pm            
Click to test a different score100%    
 
 
Final Exam
Exams
Dec 12, 2023 by 1:30pm            
Click to test a different score0 / 100
`;

    function parseAssignments(text) 
    {
        const lines = text.split('\n');
        const assignments = [];
        let currentAssignment = null;

        lines.forEach(line => {
            line = line.trim();
            if (line.startsWith('1780-Homework') || line.startsWith('Exam') || line.startsWith('Final Exam')) 
            {
                currentAssignment = 
                {
                    name: line,
                    date: ''
                };
                assignments.push(currentAssignment);
            } 
            else if (line.match(/\b\w{3}\s\d{1,2},\s\d{4}\sby\s\d{1,2}:\d{2}[ap]m\b/)) 
            {
                if (currentAssignment) 
                {
                    currentAssignment.date = line.split(' by ')[0];
                }
            }
        });

        return assignments;
    }

    const assignments = parseAssignments(textContent);

    const calendarBody = document.getElementById('calendar-body');

    assignments.forEach(assignment => 
    {
        const row = document.createElement('tr');
        const dateCell = document.createElement('td');
        const nameCell = document.createElement('td');

        dateCell.textContent = assignment.date;
        nameCell.textContent = assignment.name;

        row.appendChild(dateCell);
        row.appendChild(nameCell);
        calendarBody.appendChild(row);
    });
});
