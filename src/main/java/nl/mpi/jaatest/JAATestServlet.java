package nl.mpi.jaatest;

import java.io.IOException;
import java.io.PrintWriter;
import java.security.Principal;
import java.util.Enumeration;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author wilelb
 */
@WebServlet(name="JAATestServlet", urlPatterns={"/JAATestServlet"})
public class JAATestServlet extends HttpServlet {
   
    /** 
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code> methods.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        
        String servername = request.getServerName();
        String contextPath = request.getContextPath();
        StringBuilder loginURL = new StringBuilder();
        loginURL.append("http://");
        loginURL.append(servername);
        loginURL.append(contextPath);
        //loginURL.append("/login");
        loginURL.append("/?shhaaDo=lI");
        //request.
        
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            
            out.println("<html>");
                out.println("<head>");
                    out.println("<title> Java Authentication and Authorization Test Servlet</title>");
                out.println("</head>");
                out.println("<body>");
                
                    out.println("<h1>Login information</h1>");
                    String remoteUser = request.getRemoteUser();
                    if(remoteUser == null || remoteUser.equalsIgnoreCase("anonymous")) {
                        out.println("Not logged in.<br/>");
                        out.println("Anonymous username: <i>" + remoteUser + "</i><br />");
                        out.println("<a href=\""+loginURL.toString()+"\">log in</a>");
                    } else {
                        out.println("Logged in as: <i>" + remoteUser +"</i>");
                    }
                    
                    out.println("<h1>Authentication context</h1>");
                    out.println(printAuthenticationContext(request));
                    
                    out.println("<h1>Http Headers</h1>");
                    out.println(printHttpRequestHeaders(request));
                out.println("</body>");
            out.println("</html>");
            
        } finally { 
            out.close();
        }
    }

    private String printAuthenticationContext(HttpServletRequest request) {
        StringBuilder authenticationContextTable = new StringBuilder();
        authenticationContextTable.append("<table>");

            //auth-type
            authenticationContextTable.append("<tr>");
                authenticationContextTable.append("<td>");
                    authenticationContextTable.append("Authentication type:");
                authenticationContextTable.append("</td>");
                authenticationContextTable.append("<td>");
                    authenticationContextTable.append(request.getAuthType());
                authenticationContextTable.append("</td>");
            authenticationContextTable.append("</tr>");

            //remote user
            authenticationContextTable.append("<tr>");
                authenticationContextTable.append("<td>");
                    authenticationContextTable.append("Remote user:");
                authenticationContextTable.append("</td>");
                authenticationContextTable.append("<td>");
                    authenticationContextTable.append(request.getRemoteUser());
                authenticationContextTable.append("</td>");
            authenticationContextTable.append("</tr>");

            //user principal
            Principal principal = request.getUserPrincipal();
            if(principal != null) {
                authenticationContextTable.append("<tr>");
                    authenticationContextTable.append("<td>");
                        authenticationContextTable.append("User Principal Name:");
                    authenticationContextTable.append("</td>");
                    authenticationContextTable.append("<td>");
                        authenticationContextTable.append(principal.getName());
                    authenticationContextTable.append("</td>");
                authenticationContextTable.append("</tr>");
                authenticationContextTable.append("<tr>");
                    authenticationContextTable.append("<td>");
                        authenticationContextTable.append("User Principal Class:");
                    authenticationContextTable.append("</td>");
                    authenticationContextTable.append("<td>");
                        authenticationContextTable.append(principal.getClass());
                    authenticationContextTable.append("</td>");
                authenticationContextTable.append("</tr>");
            } else {
                authenticationContextTable.append("<tr>");
                    authenticationContextTable.append("<td>");
                        authenticationContextTable.append("User Principal:");
                    authenticationContextTable.append("</td>");
                    authenticationContextTable.append("<td>");
                        authenticationContextTable.append("Not available, User not authenticated.");
                    authenticationContextTable.append("</td>");
                authenticationContextTable.append("</tr>");
            }

        authenticationContextTable.append("</table>");
        return authenticationContextTable.toString();
    }
    
    private String printHttpRequestHeaders(HttpServletRequest request) {
        StringBuilder headerTable = new StringBuilder();
        headerTable.append("<table>");

        Enumeration<String> headerEnum = request.getHeaderNames();
        for(;headerEnum.hasMoreElements();) {
            String headerName = headerEnum.nextElement();
            Enumeration<String> headerValues = request.getHeaders(headerName);
            for(; headerValues.hasMoreElements();) {
                headerTable.append("<tr>");
                    headerTable.append("<td>");
                        headerTable.append(headerName);
                        headerTable.append(":");
                    headerTable.append("</td>");
                    headerTable.append("<td>");
                        headerTable.append(headerValues.nextElement());
                    headerTable.append("</td>");
                headerTable.append("</tr>");
            }
        }

        headerTable.append("</table>");
        return headerTable.toString();
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /** 
     * Handles the HTTP <code>GET</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        processRequest(request, response);
    } 

    /** 
     * Handles the HTTP <code>POST</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        processRequest(request, response);
    }

    /** 
     * Returns a short description of the servlet.
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
