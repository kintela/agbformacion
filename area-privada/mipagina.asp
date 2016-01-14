<%
Validated = "OK"
if Request.Cookies("ValidUser") <> Validated then
'Cree la dirección URL para la página actual.
    dim s
    s = "http://" s = s & Request.ServerVariables("HTTP_HOST")
    s = s & Request.ServerVariables("URL")
    if Request.QueryString.Count > 0 THEN
	s = s & "?" & Request.QueryString
    end if
    'Redirija a los usuarios no autorizados a la página de inicio de sesión.
    Response.Redirect "InicioSesión.asp?from=" &Server.URLEncode(s)
End if
%>
<html>
<head>
<title>Mi página protegida</title>
</head>
<body>
<p align="center">Esta información es confidencial<br>
No puede consultarla a menos que<br>
inicie sesión correctamente</p>
</body>
</html>