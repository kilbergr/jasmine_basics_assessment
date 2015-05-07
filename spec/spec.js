var grader = require("../grader.js") 


describe('letter grader', function(){
	it('should return numbers as letter grades', function(){
		expect(grader.letterGrader(85)).toEqual("B");
		expect(grader.letterGrader(40)).toEqual("F");
		})

	it('should return numbers rounded down as letter grades', function(){
		expect(grader.letterGrader(85.3)).toEqual("B");
		expect(grader.letterGrader(58.2)).toEqual("F");
		})
	});

describe('average finder', function(){
	it('should return average of scores', function(){
		expect(grader.averageScore([5, 10, 18])).toEqual(11);
		expect(grader.averageScore([90, 95, 87, 60])).toEqual(83);
	})
});

describe('Median Score Finder', function(){
	it('should return median score', function(){
		expect(grader.medianScore([52,80,94,86,80])).toEqual(80);
		expect(grader.medianScore([52,80,94,86,75,80])).toEqual(80);
	})
});

describe('Mode Score Finder', function(){
	it('should return mode score', function(){
		expect(grader.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92);
		expect(grader.modeScore([82, 86, 92, 98, 86, 95, 100, 86])).toEqual(86);
	})
})

//modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])
//=> 92