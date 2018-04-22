package app.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import app.util.Constants;

/**
 * Servlet implementation class LoginServlet
 */
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String studentId = request.getParameter(Constants.STUDENT_ID);
		int sId = 0;

		HttpSession thisSession = request.getSession();

		try {
			sId = Integer.parseInt(studentId);
		} catch (Exception e) {
			System.out.println("Student ID not a number");
		}
				
		if (studentId == null || sId <= 0) {
			response.sendRedirect(request.getContextPath() + Constants.FORWARD_SLASH + Constants.LOGIN_PAGE + "?errorMsg=Invalid_ID");
			thisSession.setMaxInactiveInterval(0);
			thisSession.invalidate();
			return;
		}

		// TODO: Check if the studentId exists

		thisSession.setAttribute(Constants.STUDENT_ID, studentId);
		thisSession.setMaxInactiveInterval(30 * 60);
		response.sendRedirect(request.getContextPath() + Constants.FORWARD_SLASH + Constants.HOME_PAGE);
	}
}
