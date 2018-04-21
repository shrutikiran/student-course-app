<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ page import="intuit.util.Constants"%>

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
<title>Home</title>
</head>
<body>
	<h1><%=studentId%></h1>

	<form action="logout" method="post">
		<input type="submit" value="Logout" />
	</form>
</body>
</html>
