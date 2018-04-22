<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ page import="app.util.Constants"%>

<%
String contextPath = request.getContextPath();
HttpSession thisSession = request.getSession();
Object studentIdAttribute = thisSession.getAttribute("studentId");
if (studentIdAttribute == null) {
	System.out.println("No student id");
	response.sendRedirect(contextPath + Constants.FORWARD_SLASH + Constants.LOGIN_PAGE);
	return;
}

String studentId = studentIdAttribute.toString();
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    	<link rel="stylesheet" href="./assets/styles/common.css">
    	<link rel="stylesheet" href="./assets/styles/home.css">

	<script type="text/javascript" src="./js/jquery.js"></script>
	<script type="text/javascript" src="./js/react.js"></script>
	<script type="text/javascript" src="./js/react-dom.js"></script>
	<script type="text/javascript" src="./assets/js/components-common.js"></script>

	<title>Home</title>
</head>

<body id="body" class="flex-column">

	<div id="header" class="flex-row content-center">
		<h1>Welcome <%=studentId%>!</h1>

		<div class="flex-row" style="flex-grow: 1;"></div>

		<form class="flex-column content-center align-center" action="logout" method="post">
			<button id="logout-button" type="submit">Logout</button>
		</form>
	</div>

	<div id="content" class="flex-column content-center">
		<h2>Welcome <%=studentId%>!</h2>

		<div id="courses-container" class="flex-row content-center align-center">
		</div>
	</div>
</body>
</html>
