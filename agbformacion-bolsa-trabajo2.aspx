<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<script runat="server">

    Protected Sub ButtonEnviar_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        Try
            Dim oMail As New System.Net.Mail.MailMessage

            oMail.From = New System.Net.Mail.MailAddress(TextBoxemail.Text)
            oMail.To.Add("info@agbformacion.es")
            'oMail.To.Add("rquintela@fulcrum.es")
            oMail.Subject = "Bolsa de trabajo"
            oMail.Body = TextBoxNombre.Text & " " & TextBoxApellidos.Text & " ha enviado su currículum"

            If FileUpload1.HasFile Then
                Dim myFile As String = System.IO.Path.GetFileName(FileUpload1.PostedFile.FileName)

                Dim adjunto As New System.Net.Mail.Attachment(FileUpload1.PostedFile.InputStream, myFile)
                oMail.Attachments.Add(adjunto)
            End If

            Dim clienteCorreo As New System.Net.Mail.SmtpClient("smtp.live.com")
            Dim autentificacion As New System.Net.NetworkCredential("aitorgutibar@hotmail.com", "23552355")

            clienteCorreo.UseDefaultCredentials = True
            clienteCorreo.Credentials = autentificacion
            clienteCorreo.EnableSsl = True
            clienteCorreo.Send(oMail)

            LabelErrores.Visible = True
            LabelErrores.Text = "Email enviado correctamente"

        Catch ex As Exception
            LabelErrores.Visible = True
            LabelErrores.Text = "Error enviando el email" & vbCrLf & ex.Message
        End Try

    End Sub
</script>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es"><!-- #BeginTemplate "Index.dwt" --><!-- DW6 -->
<head> 
<meta http-equiv="content-type" content="text/html;charset=utf-8"/>
<!-- #BeginEditable "doctitle" -->
<title>agb formación: Bolsa de Trabajo</title>
<meta name="keywords" content="red de formadores, red de consultores, envía tu curriculum" />
<meta name="description" content="Envia tu curriculum si quieres formar parte de nuestra red de formadores" />

<!-- #EndEditable -->
<meta name="keywords" content="agb-formación, abg-outdoortraining" /> 
<meta name="description" content="A short description about the Web site" />
<!--Meta: no más de 30 palabras. Descripción: 25 palabras bien escogidas.-->
<style type="text/css" media="screen">
/* <![CDATA[ */
@import url(agb-formacion.css);
/* ]]> */
</style>
<!--<script src="Scripts/swfobject_modified.js" type="text/javascript">-->
<script  src="Scripts/swfobject_modified.js" type="text/javascript">

</script>
</head> 
<body>
<div id="wrapper">
 	<div id="cabecera">
		<!-- #BeginEditable "Cabecera" -->
		<div id="navegacion">
			<ul> 
				<li id="inicio"><a href="index.html" >Quiénes somos</a></li> 
				<li id="ofrecemos"><a href="agbformacion-que-ofrecemos.html">Qué ofrecemos</a></li> 
				<li id="clientes"><a href="agbformacion-clientes.html">Clientes</a></li> 
				<li id="equipo"><a href="agbformacion-equipo.html">Equipo</a></li>
				<li id="trabaja"><a href="agbformacion-bolsa-trabajo.html" class="actual">Bolsa de Trabajo</a></li>
			</ul> 
		</div>
	<!-- #EndEditable -->
	</div>
	<div id="contenido">
		<!-- #BeginEditable "izquierda" -->
		<div id="izda">
			<img src="img/logo-agb-formacion.jpg" alt="logo agb formación" width="400" height="179" id="logo" />
			<p class="cita"></p>
			<p class="cita"><img src="img/comillas_a.gif" alt="comillas" width="12" height="10" class="comillas" />Tu no puedes enseñarle nada a un hombre. Sólo puedes ayudarle a descubrir lo que hay dentro de sí mismo<img src="img/comillas_c.gif" alt="comillas" width="12" height="10" class="comillas" /></p>
			<p class="autor"><img src="img/guion.gif" alt="" width="10" height="9" />Platón</p>
			<!--<img src="img/agb-01.jpg" width="400" height="246" alt="agb-formacion" />-->
			<img src="fotos/bolsa-trabajo.jpg" width="400" height="246" alt="agb-formacion" />
		</div>
		<!-- #EndEditable -->
<!-- #BeginEditable "Centro" -->
		<div id="centro">
			<div id="centroArriba">
	
			</div>
			<div id="centroContenido">
				<p> 
					<!--<img src="img/grupo-02.jpg" alt="" width="340" height="212" class="borde" />-->
				¿Tienes experiencia en formación dirigida a profesionales en activo?</p>
<p>¿Quieres formar parte de la Bolsa de expertos formadores de <strong>agb formación</strong>?</p>
				<br/>
				<p>Si estás interesado en entrar en nuestra red de formadores-consultores y tu currículum y perfil personal están dentro de nuestra línea de trabajo, puedes 
				<strong><a href="Formulario.aspx">  enviarnoslo</a></strong> a nuestra dirección de contacto y lo estudiaremos atentamente. </p>
				<p></p>
    <form id="form1" runat="server">
    <div id="Formulario">
    <table>
        <tr>
            <td><asp:Label ID="Label5" runat="server" Text="Nombre"></asp:Label></td>
            <td><asp:TextBox ID="TextBoxNombre" runat="server" Width="225px"></asp:TextBox></td>
            <td><asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
            ErrorMessage="Obligatorio" ControlToValidate="TextBoxNombre" 
            SetFocusOnError="True"></asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td><asp:Label ID="Label6" runat="server" Text="Apellidos"></asp:Label></td>
            <td><asp:TextBox ID="TextBoxApellidos" runat="server" Width="225px"></asp:TextBox></td>
            <td>        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
            ErrorMessage="Oligatorio" ControlToValidate="TextBoxApellidos" 
            SetFocusOnError="True"></asp:RequiredFieldValidator>
            </td>

        </tr>
        <tr>
            <td><asp:Label ID="Label1" runat="server" Text="Teléfono"></asp:Label></td>
            <td><asp:TextBox ID="TextBoxTelefono" runat="server" Width="225px"></asp:TextBox></td>
            <td><asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" 
            ErrorMessage="Obligatorio" ControlToValidate="TextBoxTelefono" 
            SetFocusOnError="True"></asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td><asp:Label ID="Label2" runat="server" Text="email"></asp:Label></td>
            <td><asp:TextBox ID="TextBoxemail" runat="server" Width="225px"></asp:TextBox></td>
            <td>
                <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" 
                    ErrorMessage="No válido" 
                    ControlToValidate="TextBoxemail" SetFocusOnError="True" 
                    ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*">
                </asp:RegularExpressionValidator>
                <br />
                <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" 
                    ErrorMessage="Obligatorio" ControlToValidate="TextBoxemail" 
                    SetFocusOnError="True">
            </asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td><asp:Label ID="Labelcurri" runat="server" Text="Curriculum/Carta"></asp:Label></td>
            <td ><asp:FileUpload ID="FileUpload1" runat="server" /></td>
            <td><asp:RequiredFieldValidator ID="RequiredFieldValidatorCurri" runat="server" 
            ErrorMessage="Obligatorio" ControlToValidate="FileUpload1" 
            SetFocusOnError="True"></asp:RequiredFieldValidator>
            </td>
            
        </tr>
        <tr>
            <td colspan="3"><asp:Button ID="ButtonEnviar" runat="server" Text="Enviar Datos" 
                    onclick="ButtonEnviar_Click" /></td>
        </tr>
        <tr>
            <td colspan="3">
                <asp:Label ID="LabelErrores" runat="server" Text="Label" Visible="False" 
                    ForeColor="#FF3300"></asp:Label></td>
         </tr>
    </table>
    
    </div>
    
    </form>
			</div>
		</div>
		<!-- #EndEditable -->
		<div id="dcha">
			<h1>agb formación</h1>
			<div id="MenuRisoterapia">
				 <!--<strong><label id="Label1"  onclick="cambiaRisoterapia('SubMenuRisoterapia')" style="cursor: pointer">agb Risoterapia</label></strong> -->
				<!--	 <strong><a href="risoterapia.html" onclick="cambiaRisoterapia('SubMenuRisoterapia')">agb Risoterapia</a></strong> -->
				 <strong><a href="risoterapia.html">agb Risoterapia</a></strong>
			</div>
			
			<div id="MenuOutdoor">
				 <strong><a href="outdoor-training.html">agb Outdoor Training</a></strong>
			
			</div>
		
			<div id="MenuCrecimiento">
				 <strong><a href="crecimiento-personal.html">agb Crecimiento Personal</a></strong>
			 
			</div>
			<h1>CLIENTES</h1>
				<p>
				
				<object data="multimedia/flash/clientes.swf" type="application/x-shockwave-flash" width="150" height="120" id="FlashID" title="clientes">
					<param name="movie" value ="multimedia/flash/clientes.swf" />
					<param name="wmode" value="opaque" />
					<param name="swfversion" value="8.0.35.0" />
					<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->
					<param name="expressinstall" value="Scripts/expressInstall.swf" />
					<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->					
				</object>
				
				</p>
			<h1>ZONA RELAX</h1>
			<p>	<a href="multimedia/PPTs/Paisajes extraordinarios.pps">Paisajes extraordinarios</a><br />
				<a href="multimedia/PPTs/Fotos desde el cielo.pps">Fotos desde el cielo</a><br />
				<a href="multimedia/PPTs/Naturaleza.pps">Naturaleza</a><br />
				<a href="multimedia/PPTs/Agua.pps">Agua</a><br />
				<a href="multimedia/PPTs/Puestas de sol.pps">Puestas de sol</a><br />
				<a href="multimedia/PPTs/Musica de pajaros.pps">Música de pájaros</a><br />
				<a href="multimedia/PPTs/Nieve-hielo.pps">Nieve-hielo</a><br />
				<a href="multimedia/PPTs/Paisajes Fantasticos.pps">Paisajes Fantásticos</a><br />
				<a href="multimedia/PPTs/Filosofia2011.pps">Filosofía 2011 </a></p>
		</div>		
	</div>
	<div id="pie">
			<p>© agb formación c/ Isabel Orbe nº 7 - 4º Derecha<br />
		VITORIA-GASTEIZ 01002 - 656 416 325 - <a href="mailto:info@agbformacion.es" class="enlace">info@agbformacion.es</a>
</p>
</div>
  </div>
<script type="text/javascript">
<!--
swfobject.registerObject("FlashID");
//-->
</script>
</body>
<!-- #EndTemplate --></html> 
