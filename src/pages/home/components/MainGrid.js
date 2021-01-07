import React from "react";

import Card from "../../../shared/UIElements/Card";

import "./MainGrid.scss";

const MainGrid = () => {
   return (
      <div className="main-grid">
         <Card
            id="main-grid__item-1"
            header="Ancora più offerte con Amazon Outlet"
            footer="Scopri"
         >
            <img
               alt="Ancora più offerte con Amazon Outlet"
               src="https://images-eu.ssl-images-amazon.com/images/G/29/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/IT_Outlet_OD_DSC_379x304_Dec_2020._SY304_CB413250337_.jpg"
            ></img>
         </Card>

         <Card
            id="main-grid__item-2"
            header="Offerta top"
            footer="Scopri tutte le offerte"
         >
            <img
               alt="Offerta top"
               src="https://m.media-amazon.com/images/G/29/IT-hq/2021/img/Personal_Care_Appliances/XCM_CUTTLE_1302461_1542090_IT_3630686_500x500_it_IT._AC_SY240_.jpg"
            ></img>

         </Card>

         <Card
            id="main-grid__item-3"
            header="5€ di sconto con Amazon Music Free"
            footer="Scopri di più"
         >
            <img
               alt="5€ di sconto con Amazon Music Free"
               src="https://images-eu.ssl-images-amazon.com/images/G/29/AmazonMusic/2020/ACQ/Nudge/120820_IT_AMF_Nudge_EVERGREEN_GW_M_DashboardCard_Illustration_379x304._SY304_CB414466969_.jpg"
            ></img>
         </Card>

         <Card
            id="main-grid__item-4"
            header="Offerte Amazon"
            footer="Scopri"
         >
            <img
               alt="Offerte Amazon Outlet"
               src="https://m.media-amazon.com/images/G/29/shazam/IT-IT-100220-3monthsfree-ACQ-ONSITE-600x500-G9-CV66-d0onH._V418056325_.jpg"
            ></img>
         </Card>

         <Card id="main-grid__prime-video">
            <div className="prime-video--filter">
               <h2 className="prime-video__header">Guarda su Prime Video</h2>
               <p className="prime-video__title">The Office</p>
               <p className="prime-video__footer">Scopri più film e serie TV</p>
            </div>
            <img
               alt="Offerte Amazon Outlet"
               src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/278528df7eb08b4e1d09281cf8fddec21f9a58288a232423e4d65c1258a3ca1a._RI_V_TTW_QL40_AC_SL792_.jpg"
            ></img>
         </Card>

         <Card
            id="main-grid__item-5"
            header="Prime Video: film e serie TV in streaming"
            footer="Iscriviti subito"
         >
            <img
               alt="Prime Video: film e serie TV in streaming"
               src="https://images-eu.ssl-images-amazon.com/images/G/29/digital/video/magellan/country/Italy/EvergreenRefresh/DesktopGateway_TOP_CARD_Low_379x304_25K._SY304_CB450544589_.jpg"
            ></img>
         </Card>

         <Card
            id="main-grid__item-6"
            header="3 mesi d'uso gratuito di Amazon Music"
            footer="Scopri"
         >
            <img
               alt="3 mesi d'uso gratuito di Amazon Music"
               src="https://images-eu.ssl-images-amazon.com/images/G/29/AmazonMusic/2020/Marketing/Q4/IT-IT_120420_NY_3monthsfree_ACQ_GW_379x304._SY304_CB413357859_.jpg"
            ></img>
         </Card>
      </div>
   );
}

export default MainGrid;