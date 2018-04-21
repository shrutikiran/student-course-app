package intuit.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import intuit.util.Constants;

/**
 * Servlet implementation class LoginServlet
 */
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String studentId = request.getParameter("studentId");

		if (studentId == null) {
			response.sendError(HttpServletResponse.SC_BAD_REQUEST);
			return;
		}
		
		// TODO: Check if the studentId exists
		
		
		
		HttpSession thisSession = request.getSession();
		thisSession.setAttribute("studentId", studentId);
		thisSession.setMaxInactiveInterval(30 * 60);
		response.sendRedirect(request.getContextPath() + Constants.FORWARD_SLASH + Constants.HOME_PAGE);
	}
}
