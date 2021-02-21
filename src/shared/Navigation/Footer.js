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

         <article className="footer__services">
            <table className="services__table">
               <tr>
                  <td>
                     <Button to="amazon-service" className="link-btn--footer">
                        <p className="service-title">Amazon Advertising</p>
                        <p className="service-desc">Trova, attira e coinvolgi i clienti</p>
                     </Button>
                  </td>
                  <td>
                     <Button to="amazon-service" className="link-btn--footer">
                        <p className="service-title">Amazon Music</p>
                        <p className="service-desc">Streaming di milioni di canzoni</p>
                     </Button>
                  </td>
                  <td>
                     <Button to="amazon-service" className="link-btn--footer">
                        <p className="service-title">AbeBooks</p>
                        <p className="service-desc">Libri, arte & articoli da collezione</p>
                     </Button>
                  </td>
                  <td>
                     <Button to="amazon-service" className="link-btn--footer">
                        <p className="service-title">Audible</p>
                        <p className="service-desc">Download audiolibri</p>
                     </Button>
                  </td>
                  <td>
                     <Button to="amazon-service" className="link-btn--footer">
                        <p className="service-title">Amazon Web Services</p>
                        <p className="service-desc">Servizi Cloud Scalabili</p>
                     </Button>
                  </td>
                  <td>
                     <Button to="amazon-service" className="link-btn--footer">
                        <p className="service-title">Amazon Warehouse</p>
                        <p className="service-desc">I nostri prodotti usati e ricondizionati</p>
                     </Button>
                  </td>           
               </tr>
               <tr>
                  <td>
                     <Button to="amazon-service" className="link-btn--footer">
                        <p className="service-title">Book Depository</p>
                        <p className="service-desc">Libri con spedizione gratuita in tutto il mondo</p>
                     </Button>
                  </td>
                  <td>
                     <Button to="amazon-service" className="link-btn--footer">
                        <p className="service-title">Kindle Direct Publishing</p>
                        <p className="service-desc">Pubblica i tuoi libri in formato elettronico</p>
                     </Button>
                  </td>
                  <td>
                     <Button to="amazon-service" className="link-btn--footer">
                        <p className="service-title">Prime Now</p>
                        <p className="service-desc">Consegna in finestre di 2 ore</p>
                     </Button>
                  </td>
                  <td>
                     <Button to="amazon-service" className="link-btn--footer">
                        <p className="service-title">Shopbop</p>
                        <p className="service-desc">Designer, Marche, Fashion e stile</p>
                     </Button>
                  </td>
                  <td>
                     <Button to="amazon-service" className="link-btn--footer">
                        <p className="service-title">Amazon Buisness</p>
                        <p className="service-desc">Servizio per clienti buisness</p>
                     </Button>
                  </td>
                  <td>
                     <Button to="amazon-service" className="link-btn--footer">
                        <p className="service-title">Amazon Second Chance</p>
                        <p className="service-desc">Regala, scambia, dai una seconda vita</p>
                     </Button>
                  </td>
               </tr>
            </table>

            <section className="footer__copyright">
               <Button className="link-btn--footer" to="copyright">Condizioni generali di uso e vendita</Button>
               <Button className="link-btn--footer" to="copyright">Informativa sulla privacy</Button>
               <Button className="link-btn--footer" to="copyright">Area Legale</Button>
               <Button className="link-btn--footer" to="copyright">Cookie</Button>
               <Button className="link-btn--footer" to="copyright">Pubblicità definita in base agli interessi</Button>
               <p>© 2010-2021, Amazon.com, Inc. o società affiliate.</p>
            </section>
         </article>
      </footer>
   )
}

export default Footer;