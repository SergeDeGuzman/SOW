import "./Footer.css";

export default function Footer({language, text}) {

    return (
        <footer class="footer-div" >
            <div className="footer-header">
                <div className="address">123 Fakturera</div>
                <div className="footer-menu">
                    <ul>
                        <li><a href></a>{text[language].home}</li>
                        <li><a href></a>{text[language].order}</li>
                        <li><a href></a>{text[language].contact}</li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">© Lättfaktura, CRO no. 638537, 2025. All rights reserved. </div>
          </footer>
    )
}