import React from "react";

import Button from "../FormElements/Button";

import "./Footer.scss";

const Footer = props => {
   return(
      <footer className="footer">
         <a className="footer__redirect" href=".header--main">
            <p>Torna su</p>
         </a>

         <article className="footer__contacts">
            <section className="footer__contacts__section">
               <h3>Per conoscerci meglio</h3>
               <ul>
                  <li><Button to="footer-link" className="link-btn--footer">Opportunità di lavoro</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Informazioni su Amazon</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">AGCM - Impegni Amazon Procedimento PS 11716</Button></li>
               </ul>
            </section>
            <section className="footer__contacts__section">
               <h3>Guadagna con Amazon</h3>
               <ul>
                  <li><Button to="footer-link" className="link-btn--footer">Vendi su Amazon</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Vendi sotto Amazon Accelerator</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Vendi su Amazon Buisness</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Vendi su Amazon Handmade</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Diventa affiliato</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Logistica di Amazon</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Pubblica con noi da indipendente</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Promuovi i tuoi prodotti</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Ospita un hub Amazon</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Tutti i servizi</Button></li>
               </ul>
            </section>
            <section className="footer__contacts__section">
               <h3>Metodi di pagamento Amazon</h3>
               <ul>
                  <li><Button to="footer-link" className="link-btn--footer">Metodi di pagamento</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Convertitore di Valuta Amazon</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Buoni Regalo</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Ricarica online</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Ricarica in casa</Button></li>
               </ul>
            </section>
            <section className="footer__contacts__section">
               <h3>Bisogno di aiuto?</h3>
               <ul>
                  <li><Button to="footer-link" className="link-btn--footer">Visualizza o traccia un ordine</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Costi e modalità di spedizione</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Amazon Prime</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Restituisci o sostituisci articoli</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Riciclo</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">I miei contenuti e dispositivi</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">App Amazon Mobile</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Amazon Assistant</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Servizio Clienti</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">IVA e fatturazione</Button></li>
                  <li><Button to="footer-link" className="link-btn--footer">Garanzia legale</Button></li>
               </ul>
            </section>
            <section className="footer__contacts__lang">
               <Button exact to="/" className="footer__logo"></Button>
               <div className="contacts__lang__items">
                  <Button to="lang-link" className="link-btn--footer">Australia</Button>
                  <Button to="lang-link" className="link-btn--footer">Brasile</Button>
                  <Button to="lang-link" className="link-btn--footer">Canada</Button>
                  <Button to="lang-link" className="link-btn--footer">Cina</Button>
                  <Button to="lang-link" className="link-btn--footer">Francia</Button>
                  <Button to="lang-link" className="link-btn--footer">Germania</Button>
                  <Button to="lang-link" className="link-btn--footer">Giappone</Button>
                  <Button to="lang-link" className="link-btn--footer">India</Button>
                  <Button to="lang-link" className="link-btn--footer">Messico</Button>
                  <Button to="lang-link" className="link-btn--footer">Paesi/Regioni Bassi</Button>
                  <Button to="lang-link" className="link-btn--footer">Emirati Arabi Uniti</Button>
                  <Button to="lang-link" className="link-btn--footer">Regno Unito</Button>
                  <Button to="lang-link" className="link-btn--footer">Spagna</Button>
                  <Button to="lang-link" className="link-btn--footer">Singapore</Button>
                  <Button to="lang-link" className="link-btn--footer">Stati Uniti</Button>
                  <Button to="lang-link" className="link-btn--footer">Turchia</Button>
               </div>
            </section>
         </article>

         <section className="footer__services"></section>
      </footer>
   )
}

export default Footer;