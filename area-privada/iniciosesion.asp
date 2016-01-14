<html>
<head>
<title>Formulario de inicio de sesión</title>
<%
Username="administrador"
Password="admin"
Validated = "OK"
if Strcomp(Request.Form("User"),Username,1)=0 AND Request.Form("password") = Password then
'Establezca la cookie de validación y redirija al usuario a la página original.
    Response.Cookies("ValidUser") = Validated
    'Compruebe de qué parte de la aplicación vienen los usuarios.
    If (Request.QueryString("from")<>"") then
	Response.Redirect Request.QueryString("from")
    Else
	'Si la primera página a la que tiene acceso el usuario es la página de inicio de sesión,
        'rediríjale a la página predeterminada.
          Response.Redirect "mipagina.asp"
    End if    
Else
' Muestre el mensaje de error únicamente si el usuario escribió algo.
    If Request.Form("User") <> "" then
        Response.Write "<h3>Error de autorización.</h3>" & "<br>" & _
        "Vuelva a intentarlo.<br>&#xa0;<br>"
    End if
End if
%>
</head>
<body bgcolor="#FFFFFF">
<FORM ACTION=<%Response.Write "iniciosesion.asp?"&Request.QueryString%> method="post">
<h3>Pagina de inicio de sesión para MiPágina.asp</h3>
<p>	
Nombre de usuario: 
<INPUT TYPE="text" NAME="User" VALUE='' size="20"></INPUT>
Contraseña: 
<INPUT TYPE="password" NAME="password" VALUE='' size="20"></INPUT>
<INPUT TYPE="submit" VALUE="Inicio de sesión"></INPUT>
</FORM>
</body>
</html>