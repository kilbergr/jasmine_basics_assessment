module.exports = {
	letterGrader: function(x){
		var num = Math.floor(x);
		if(num <= 59 && num >= 0){
			return("F");
			}
		else if(num <= 69 && num >= 60){
			return("D");
		}	
		else if(num <= 79 && num >= 70){
			return("C");
		}	
		else if(num <= 89 && num >= 80){
			return("B");
		}	
		else if(num <= 100 && num >= 90){
			return("A");
		}	
		else {
			return("Invalid entry, grade must be between 0 and 100.");
		}
	},

	averageScore: function(arr){
		var sum = 0;
		for(i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
			var ave = sum/arr.length;
			return ave;
	},

	medianScore: function(arr){
			for (i = 0; i < arr.length; i++) {
				for (j = 0; j < arr.length; j++) {
					if (arr[j] > arr[j+1]){
						var temp = arr[j];
						arr[j] = arr[j+1];
						arr[j+1] = temp;
					}
				}
			}
			if(arr.length%2 === 0) {
				var centerEven = arr.length/2;
				var value = (arr[centerEven] + arr[centerEven-1])/2;
				return(value);
			}
			else {
				var center = Math.floor(arr.length/2);
				return arr[center];
			}
		},

	modeScore: function(arr){
		var list = {};
		var keyArr = [];
		var max = 0;
		for(var i = 0; i < arr.length; i++) {
			var num = arr[i];
			if(list[num]) {
				list[num] += 1;
			}
			else {
				list[num] = 1;
			}
		}
		for (var key in list) {
			keyArr.push(list[key]);
		}
		for(var j = 0; j < keyArr.length; j++) {
			if (max < keyArr[j]) {
				max = keyArr[j]
			}
		}
		return max;
	}	
}

