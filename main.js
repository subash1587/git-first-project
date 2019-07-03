var teachers = []
var students = []

/******************************************************************************/

$(document).ready( function() {
	$('#courses').hide()
	$('#events').hide()
	$("#adminOptions").hide()
	$("#teacherOptions").hide()
	$("#studentOptions").hide()
	$('#addTeacherContainer').hide()
	$('#searchTeacherContainer').hide()
	$('#addStudentContainer').hide()
	$('#searchStudentContainer').hide()
	document.getElementById('result').innerHTML = "<h2>Choose your action from the left navigation menu<h2>"
})

/******************************************************************************/

$('#coursesTab').on("mouseenter", function() {
	$('#courses').find('li').css({"background-color":"#980000", "color":"white"})
	$('#courses').show()
})

$('#coursesTab').on("mouseleave", function() {
	$('#courses').hide()
})

/******************************************************************************/

$('#eventsTab').on("mouseenter", function() {
	$('#events').find('li').css({"background-color":"#980000", "color":"white"})
	$('#events').show()
})

$('#eventsTab').on("mouseleave", function() {
	$('#events').hide()
})

/******************************************************************************/

$("li").on("mouseenter", function() {
	$(this).css({"background-color":"black", "color":"white"});
})

$("li").on("mouseleave", function() {
	$(this).css({"background-color":"#B25A5A", "color":"#980000"});
})

/******************************************************************************/

$('#admintab').click(function() {
	initialize()
	$('#admintab').addClass('activeTab')
	$("#adminOptions").show();
})

/******************************************************************************/

$('#teachertab').click(function() {
	initialize()
	$('#teachertab').addClass('activeTab')
	$('#teacherOptions').show()
})

/******************************************************************************/

$('#studenttab').click(function() {
	initialize()
	$('#studenttab').addClass('activeTab')
	$('#studentOptions').show()
})

/******************************************************************************/

$('#addTeacherMenu').click(function() {
	initialize()
	$('#admintab').addClass('activeTab')
	$("#adminOptions").show();
	$('#addTeacherMenu').addClass('activeMenu')
	$('#addTeacherContainer').show()
})

/******************************************************************************/

$('#addTeacher').click(function() {
	var teacher = {}
	teacher.id = $('#Tid').val()
	teacher.name = $('#Tname').val()
	teacher.dept = $('#Tdept').val()
	teacher.sub = $('#Tsub').val()
	teachers.push(teacher)
	$('#addTeacherContainer').hide()
	document.getElementById('result').innerHTML = "<h2>Teacher has been added<h2>"
	$('#result').show()
})

/******************************************************************************/

$('#searchTeacherMenu').click(function() {
	initialize()
	$('#admintab').addClass('activeTab')
	$('#adminOptions').show()
	$('#searchTeacherMenu').addClass('activeMenu')
	$('#searchTeacherContainer').show()
})

/******************************************************************************/

$('#searchTeacher').click(function() {
	var teacherToSearch = $('#TsearchName').val()
	var searchTeacherResultHtml = searchTeacher(teacherToSearch)
	$('#searchTeacherContainer').hide()
	$('#result').html(searchTeacherResultHtml)
	$('#result').show()
})

/******************************************************************************/
$('#viewAllTeachersMenu').click(function() {
	initialize()
	$('#admintab').addClass('activeTab')
	$('#adminOptions').show()
	$('#viewAllTeachersMenu').addClass('activeMenu')
	var allTeachersResultHtml = displayAllTeachers()
	$('#result').html(allTeachersResultHtml)
	$("#result").show()
})

/******************************************************************************/
$('#addStudentMenu').click(function() {
	initialize()
	$('#teachertab').addClass('activeTab')
	$('#teacherOptions').show()
	$('#addStudentMenu').addClass('activeMenu')
	$('#addStudentContainer').show()
})

/******************************************************************************/

$('#addStudent').click(function() {
	var student = {}
	student.id = $('#Sid').val()
	student.name = $('#Sname').val()
	student.dept = $('#Sdept').val()
	student.sem1 = $('#Ssem1').val()
	student.sem2 = $('#Ssem2').val()
	student.sem3 = $('#Ssem3').val()
	student.total = parseInt(student.sem1) + parseInt(student.sem2) + parseInt(student.sem3)
	students.push(student)
	$('#addStudentContainer').hide()
	document.getElementById('result').innerHTML = "<h2>Student has been added</h2>"
	$('#result').show()
})

/******************************************************************************/

$('#searchStudentMenu').click(function() {
	initialize()
	$('#teachertab').addClass('activeTab')
	$('#teacherOptions').show()
	$('#searchStudentMenu').addClass('activeMenu')
	$('#searchStudentContainer').show()
})

/******************************************************************************/

$('#searchStudent').click(function() {
	var studentToSearch = $('#SsearchName').val();
	var searchStudentResultHtml = searchStudent(studentToSearch)
	$('#searchStudentContainer').hide()
	$('#result').html(searchStudentResultHtml)
	$('#result').show()
})

/******************************************************************************/

$('#viewAllStudentsMenu').click(function() {
	initialize()
	$('#teachertab').addClass('activeTab')
	$('#teacherOptions').show()
	$('#viewAllStudentsMenu').addClass('activeMenu')
	var allStudentsResultHtml = displayAllStudents()
	$('#result').html(allStudentsResultHtml)
	$("#result").show()
})

/******************************************************************************/

$('#viewTop10StudentsMenu').click(function() {
	initialize()
	$('#teachertab').addClass('activeTab')
	$('#teacherOptions').show()
	$('#viewTop10StudentsMenu').addClass('activeMenu')
	var top10StudentsResultHtml = displayTop10Students()
	$('#result').html(top10StudentsResultHtml)
	$("#result").show()
})

/******************************************************************************/

$('#viewStudentMenu').click(function() {
	initialize()
	$('#studenttab').addClass('activeTab')
	$('#studentOptions').show()
	$('#viewStudentMenu').addClass('activeMenu')
	$('#searchStudentContainer').show()
})

/******************************************************************************/

function initialize() {
	$('#courses').hide()
	$('#events').hide()
	$('#admintab').removeClass('activeTab')
	$('#teachertab').removeClass('activeTab')
	$('#studenttab').removeClass('activeTab')
	$("#adminOptions").hide();
	$("#teacherOptions").hide();
	$("#studentOptions").hide();
	$("#result").hide()
	$('#addTeacherContainer').hide()
	$('#searchTeacherContainer').hide()
	$('#addStudentContainer').hide()
	$('#searchStudentContainer').hide()
	$('#addTeacherMenu').removeClass('activeMenu')
	$('#searchTeacherMenu').removeClass('activeMenu')
	$('#viewAllTeachersMenu').removeClass('activeMenu')	
	$('#addStudentMenu').removeClass('activeMenu')
	$('#searchStudentMenu').removeClass('activeMenu')
	$('#viewAllStudentsMenu').removeClass('activeMenu')
	$('#viewTop10StudentsMenu').removeClass('activeMenu')
	$('#viewStudentMenu').removeClass('activeMenu')
	$('#Tid').val('')
	$('#Tname').val('')
	$('#Tdept').val('')
	$('#Tsub').val('')
	$('#TsearchName').val('')
	$('#Sid').val('')
	$('#Sname').val('')
	$('#Sdept').val('')
	$('#Ssub').val('')
	$('#Ssem1').val('')
	$('#Ssem2').val('')
	$('#Ssem3').val('')
	$('#SsearchName').val('')
}


/******************************************************************************/

function searchTeacher(teacherSearchName) {
	var foundTeacher = 'N'
	var	searchTeacherResult = '<h2><center>Search Results</center></h2>'
		searchTeacherResult += '<br>'
		searchTeacherResult += '<table id="table">'
		searchTeacherResult += '<tr>'
		searchTeacherResult += '<th id="column">Teacher ID</th>'
		searchTeacherResult += '<th id="column">Name</th>'
		searchTeacherResult += '<th id="column">Department</th>'
		searchTeacherResult += '<th id="column">Subject Handled</th>'
		searchTeacherResult += '</tr>'
	for (var i = 0; i < teachers.length; i++) {
		if (teacherSearchName === teachers[i].name) {
			foundTeacher = 'Y'
			searchTeacherResult += '<tr>'
			searchTeacherResult += '<td id="column">'
			searchTeacherResult += teachers[i].id
			searchTeacherResult += '</td>'
			searchTeacherResult += '<td id="column">'
			searchTeacherResult += teachers[i].name
			searchTeacherResult += '</td>'
			searchTeacherResult += '<td id="column">'
			searchTeacherResult += teachers[i].dept
			searchTeacherResult += '</td>'
			searchTeacherResult += '<td id="column">'
			searchTeacherResult += teachers[i].sub
			searchTeacherResult += '</td>'
			searchTeacherResult += '</tr>'
		}
	}
	searchTeacherResult += '</table>'
	if (foundTeacher === 'N') {
		var notFoundNote = '<h2>Teacher is not found</h2>'
		return notFoundNote
	} else {
		return searchTeacherResult
	}
}

/******************************************************************************/

function displayAllTeachers() {
	var	allTeachersResult = '<h2><center>List of All Teachers</center></h2>'
		allTeachersResult += '<br>'
		allTeachersResult += '<table id="table">'
		allTeachersResult += '<tr>'
		allTeachersResult += '<th id="column">Teacher ID</th>'
		allTeachersResult += '<th id="column">Name</th>'
		allTeachersResult += '<th id="column">Department</th>'
		allTeachersResult += '<th id="column">Subject Handled</th>'
		allTeachersResult += '</tr>'
	for (var i = 0; i < teachers.length; i++) {
		allTeachersResult += '<tr>'
		allTeachersResult += '<td id="column">'
		allTeachersResult += teachers[i].id
		allTeachersResult += '</td>'
		allTeachersResult += '<td id="column">'
		allTeachersResult += teachers[i].name
		allTeachersResult += '</td>'
		allTeachersResult += '<td id="column">'
		allTeachersResult += teachers[i].dept
		allTeachersResult += '</td>'
		allTeachersResult += '<td id="column">'
		allTeachersResult += teachers[i].sub
		allTeachersResult += '</td>'
		allTeachersResult += '</tr>'
	}
	allTeachersResult += '</table>'
	return allTeachersResult
}

/******************************************************************************/

function searchStudent(studentSearchName) {
	var foundStudent = 'N'
	var	searchStudentResult = '<h2><center>Search Results</center></h2>'
		searchStudentResult += '<br>'
		searchStudentResult += '<table id="table">'
		searchStudentResult += '<tr>'
		searchStudentResult += '<th id="column">Student ID</th>'
		searchStudentResult += '<th id="column">Name</th>'
		searchStudentResult += '<th id="column">Department</th>'
		searchStudentResult += '<th id="column">Semester 1</th>'
		searchStudentResult += '<th id="column">Semester 2</th>'
		searchStudentResult += '<th id="column">Semester 3</th>'
		searchStudentResult += '<th id="column">Total Score</th>'
		searchStudentResult += '</tr>'
	for (var i = 0; i < students.length; i++) {
		if (studentSearchName === students[i].name) {
			foundStudent = 'Y'
			searchStudentResult += '<tr>'
			searchStudentResult += '<td id="column">'
			searchStudentResult += students[i].id
			searchStudentResult += '</td>'
			searchStudentResult += '<td id="column">'
			searchStudentResult += students[i].name
			searchStudentResult += '</td>'
			searchStudentResult += '<td id="column">'
			searchStudentResult += students[i].dept
			searchStudentResult += '</td>'
			searchStudentResult += '<td id="column">'
			searchStudentResult += students[i].sem1
			searchStudentResult += '</td>'
			searchStudentResult += '<td id="column">'
			searchStudentResult += students[i].sem2
			searchStudentResult += '</td>'
			searchStudentResult += '<td id="column">'
			searchStudentResult += students[i].sem3
			searchStudentResult += '</td>'
			searchStudentResult += '<td id="column">'
			searchStudentResult += students[i].total
			searchStudentResult += '</td>'
			searchStudentResult += '</tr>'
		}
	}
	searchStudentResult += '</table>'
	if (foundStudent === 'N') {
		var notFoundStudentNote = '<h2>Student is not found</h2>'
		return notFoundStudentNote
	} else {
		return searchStudentResult
	}
}

/******************************************************************************/

function displayAllStudents() {
	var	allStudentsResult = '<h2><center>List of All Students</center></h2>'
		allStudentsResult += '<br>'
		allStudentsResult += '<table id="table">'
		allStudentsResult += '<tr>'
		allStudentsResult += '<th id="column">Student ID</th>'
		allStudentsResult += '<th id="column">Name</th>'
		allStudentsResult += '<th id="column">Department</th>'
		allStudentsResult += '<th id="column">Semester 1</th>'
		allStudentsResult += '<th id="column">Semester 2</th>'
		allStudentsResult += '<th id="column">Semester 3</th>'
		allStudentsResult += '<th id="column">Total Score</th>'
		allStudentsResult += '</tr>'
		students.sort(sortId)
	for (var i = 0; i < students.length; i++) {
		allStudentsResult += '<tr>'
		allStudentsResult += '<td id="column">'
		allStudentsResult += students[i].id
		allStudentsResult += '</td>'
		allStudentsResult += '<td id="column">'
		allStudentsResult += students[i].name
		allStudentsResult += '</td>'
		allStudentsResult += '<td id="column">'
		allStudentsResult += students[i].dept
		allStudentsResult += '</td>'
		allStudentsResult += '<td id="column">'
		allStudentsResult += students[i].sem1
		allStudentsResult += '</td>'
		allStudentsResult += '<td id="column">'
		allStudentsResult += students[i].sem2
		allStudentsResult += '</td>'
		allStudentsResult += '<td id="column">'
		allStudentsResult += students[i].sem3
		allStudentsResult += '</td>'
		allStudentsResult += '<td id="column">'
		allStudentsResult += students[i].total
		allStudentsResult += '</td>'
		allStudentsResult += '</tr>'
	}
	allStudentsResult += '</table>'
	return allStudentsResult
}

/******************************************************************************/

function displayTop10Students() {
	var	top10StudentsResult = '<h2><center>List of Top 10 Students</center></h2>'
		top10StudentsResult += '<br>'
		top10StudentsResult += '<table id="table">'
		top10StudentsResult += '<tr>'
		top10StudentsResult += '<th id="column">Student ID</th>'
		top10StudentsResult += '<th id="column">Name</th>'
		top10StudentsResult += '<th id="column">Department</th>'
		top10StudentsResult += '<th id="column">Semester 1</th>'
		top10StudentsResult += '<th id="column">Semester 2</th>'
		top10StudentsResult += '<th id="column">Semester 3</th>'
		top10StudentsResult += '<th id="column">Total Score</th>'
		top10StudentsResult += '<th id="column">Rank</th>'
		top10StudentsResult += '</tr>'
		students.sort(sortScore)
	for (var i = 0; i < students.length; i++) {
		if (i <= 10) {
			top10StudentsResult += '<tr>'
			top10StudentsResult += '<td id="column">'
			top10StudentsResult += students[i].id
			top10StudentsResult += '</td>'
			top10StudentsResult += '<td id="column">'
			top10StudentsResult += students[i].name
			top10StudentsResult += '</td>'
			top10StudentsResult += '<td id="column">'
			top10StudentsResult += students[i].dept
			top10StudentsResult += '</td>'
			top10StudentsResult += '<td id="column">'
			top10StudentsResult += students[i].sem1
			top10StudentsResult += '</td>'
			top10StudentsResult += '<td id="column">'
			top10StudentsResult += students[i].sem2
			top10StudentsResult += '</td>'
			top10StudentsResult += '<td id="column">'
			top10StudentsResult += students[i].sem3
			top10StudentsResult += '</td>'
			top10StudentsResult += '<td id="column">'
			top10StudentsResult += students[i].total
			top10StudentsResult += '</td>'
			top10StudentsResult += '<td id="column">'
			top10StudentsResult += i + 1
			top10StudentsResult += '</td>'
			top10StudentsResult += '</tr>'
		}
	}
	top10StudentsResult += '</table>'
	return top10StudentsResult
}

/******************************************************************************/

function sortScore (totalOne, totalTwo) {
	return parseInt(totalTwo.total) - parseInt(totalOne.total)
}

/******************************************************************************/

function sortId (idOne, idTwo) {
	return parseInt(idOne.id) - parseInt(idTwo.id)
}

/******************************************************************************/