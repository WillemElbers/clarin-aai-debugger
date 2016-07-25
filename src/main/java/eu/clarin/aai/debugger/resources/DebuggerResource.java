package eu.clarin.aai.debugger.resources;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.codehaus.jackson.map.ObjectMapper;

/**
 *
 * @author wilelb
 */
@Path("debug")
@Produces({MediaType.APPLICATION_JSON})
public class DebuggerResource {
    
    private final ObjectMapper mapper = new ObjectMapper();
    
    @Context private HttpServletRequest request;
    
    @GET
    public Response get() throws IOException {
        Headers headers = enumerateHeaders();
        String json = mapper.writeValueAsString(headers);
        return Response.ok(json).build();
    }
    
    private Headers enumerateHeaders() {
        Headers headers = new Headers();
        Enumeration<String> headerEnum = request.getHeaderNames();
        for(;headerEnum.hasMoreElements();) {
            String headerName = headerEnum.nextElement();
            headers.addHeader(
                new Header(headerName, request.getHeaders(headerName)));
        }
        return headers;
    }
    
    public static class Headers {
        private final List<Header> headers = new ArrayList<>();

        public void addHeader(Header h) {
            headers.add(h);
        }
        
        public List<Header> getHeaders() {
            return headers;
        }
    }
    
    public static class Header {
        private String name;
        private final List<String> values = new ArrayList<>();

        public Header() {}
        
        public Header(String name) {
            this.name = name;
        }
        
        public Header(String name, Enumeration<String> valuesEnum) {
            this.name = name;
            for(;valuesEnum.hasMoreElements();) {
                values.add(valuesEnum.nextElement());
            }
        }
        public String getName() {
            return name;
        }

        public List<String> getValues() {
            return values;
        }
    }
}
