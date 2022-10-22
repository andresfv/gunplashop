import './FooterPage.css';
function FooterPage() {
    return (
        <footer>
            <div id="helpSectionContainer">
                <h2 className="footerTitle">¿NECESITAS AYUDA?</h2>
                <p className='footerP'>
                    Contáctanos de Lunes a Viernes de 7am a 7pm. Sábado de 7am a 3pm.
                </p>
            </div>

            <div id="contactContainer">
                <span>WhatsApp</span>
                <span className="underline">8382-1515</span>
                <span className="separatorSpace">|</span>
                <span className="underline">Chat</span>
                <span className="separatorSpace">|</span>
                <span>Teléfono</span>
                <span className="underline">4100-7616</span>
                <span className="separatorSpace">|</span>
                <span>Correo</span>
                <span className="underline">hola@gunplashop.com</span>
            </div>
        </footer>
    );
}

export default FooterPage;