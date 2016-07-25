Java Authentication and Authorization Test Servlet

This servlet is supposed to examine the incoming headers and servlet security context.
It will print all relevant information.

If this servlet is configured to be protected with the SHHAA security filter, this test servlet
can be used to debug the incoming information.


exposed urls:
http://<server_name>/ds/jaatest/test
