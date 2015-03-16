angular.module("EvalApp").factory("studentFactory", ["$http", "SERVER", "sessionService", 
	function($http, SERVER, sessionService){

	return{
		courses: function(callback){

			$http.get(SERVER + "my/courses")
				.success(function(data){
					console.log("COURSE");
					// console.log(data);
					//sessionService.setCourses(data);
					callback(data);
				})
				.error(function(data, status){
					if(status === 401){
						console.log("Error");
					}
				});

		},

		evaluations: function(callback){
			$http.get(SERVER + "my/evaluations")
				.success(function(data){
					// console.log("EVAL");
					// console.log(data);
					//sessionService.setEvaluations(data);
					callback(data);
				})
				.error(function(data, status){
					if(status === 401){
						console.log("Error");
					}
				});

		},

		getTemplateById: function(id, callback){

			$http.get(SERVER + "evaluationtemplates/" + id)
				.success(function(data){
					// console.log(data);
					callback(data);
				})
				.error(function(data, status){
					if(status === 401){
						console.log("Error");
					}
				});
		},

		getEvaluationById: function(id, callback){

			$http.get(SERVER + "evaluations/" + id)
				.success(function(data){
					// console.log(data);
					callback(data);
				})
				.error(function(data, status){
					if(status === 401){
						console.log("Error");
					}
				});
		},

		getTeachers: function(cID, semester, callback) {
			$http.get(SERVER + "courses/" + cID + "/" + semester + "/teachers")
				.success(function(data){
					// console.log(data);
					callback(data);
				})
				.error(function(data, status){
					if(status === 401){
						console.log("Error");
					}
				});
		}

	}

}]);