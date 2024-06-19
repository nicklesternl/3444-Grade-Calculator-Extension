class Course {
    constructor(name, average) {
      this.name = name;
      this.average = average;
      this.assignmentTypes = [];
    }

    addAssignmentType(assignmentType) {
        if (assignmentType instanceof AssignmentType) {
            this.assignmentTypes.push(assignmentType);
        } else {
            throw new Error("Argument must be an assignmentType");
        }
    }

    calculateAverage(){
        let assignmentTypeAverageArray = [];
        let assignmentWeightArray = [];

        this.assignmentTypes.forEach((assignmentType) => {

            const assignmentAvg = assignmentType.getAssignmentTypeAverage();
            const assignmentWeight = assignmentType.getAssignmentWeight();

            assignmentTypeAverageArray.push(assignmentAvg);
            assignmentWeightArray.push(assignmentWeight);
        });
        
        const totalWeight = assignmentWeightArray.reduce((sum, weight) => sum + weight, 0);
        const weightedAverage = assignmentTypeAverageArray.reduce((sum, avg, index) => sum + (avg * assignmentWeightArray[index]), 0) / totalWeight;
        return weightedAverage;
    }

}

class AssignmentType {
    constructor(name, weight) {
      this.name = name;
      this.weight = weight;
      this.grades = [];
    }

    addGrade(grade) {
        if (grade instanceof Grade) {
            this.grades.push(grade);
        } else {
            throw new Error("Argument must be a grade");
        }
    }

    getAssignmentWeight(){
        return this.weight;
    }

    getAssignmentTypeAverage(){
        if (this.grades.length === 0) return 0;

        let total = 0;
        for(var i = 0; i < this.grades.length; i++) {
            if(this.grades[1].score > -1 && this.grades[1].score != "-"){
                total += this.grades[i].score;
            }
        }
        return total / this.grades.length;
    }
}

class Grade {
    constructor(title, type, score, dueDate) {
        
        this.title = title;
        this.type = type;
        this.score = score;
        this.dueDate = dueDate;
    }
}
