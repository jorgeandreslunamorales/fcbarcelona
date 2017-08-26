$(document).ready (function () {
	$('#name').keyup(function (e) {
		var nameValue = $('#name').val();
		setStudentName(nameValue);
	});


	var setStudentName = function(name){
		$("#student-name").html(name);
	};


	setStudentName('Debe definir el nombre');
	});

//edad
$(document).ready (function () {
	$('#year').keyup(function (e) {
		var yearValue = $ ('#year').val();
		setStudentYear(yearValue);
	});

	var setStudentYear = function(year){
		$("#student-year"). html(year);
	};

	setStudentYear('debe definir la edad');
});


//curso
$(document).ready (function() {
	$('#course').keyup(function (e) {
		var courseValue = $ ('#course').val();
		setStudentcourse(courseValue);
	});

	var setStudentcourse = function(course){
		$('#student-course').html(course);
	};
	setStudentcourse('debe definir el curso');
});

//institucion
$(document).ready (function() {
	$('#school').keyup(function (e) {
		var schoolValue = $ ('#school').val();
		setStudentschool(schoolValue);
	});

	var setStudentschool = function(school){
		$('#student-school').html(school);
	};
	setStudentschool('debe definir su institucion');
	 $(".subject").click (function(){
		$('#favorite-subjects').append($(this));
	});	
});




