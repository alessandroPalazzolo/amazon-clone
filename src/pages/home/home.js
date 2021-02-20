import React from "react";

import MainGrid from "./components/MainGrid";
import Carousel from "../../shared/UIElements/Carousel";
import CardsRow from "./components/CardsRow";
import Button from "../../shared/FormElements/Button";

import "./home.scss";

const carouselAd = [
   "https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/NjczMzc2MmQt/NjczMzc2MmQt-NDk2NWFiNzEt-w1500._CB413745996_.jpg",

   "https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/MmE0NzgyZWMt/MmE0NzgyZWMt-OWEwODk1YmQt-w1500._CB660990915_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/NGU2YjIxODUt/NGU2YjIxODUt-NWIxOGE2OWQt-w1500._CB402742107_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/29/digital/video/gateway/placement/launch/IamGreta/GRETA_2021_GWBleedingHero_HO_COVIDUPDATE_XSite_1500X600_PV_it-IT._CB412674362_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/ODlhMmE4ODct/ODlhMmE4ODct-Y2FkY2QwZTkt-w1500._CB419275006_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/ZmRiOTNjOTMt/ZmRiOTNjOTMt-M2UyYmY4OTkt-w1500._CB413884334_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/29/primestudent/2020/IT_Onsite-Hero-Desktop-Boxes-1500x600px1x._CB415335922_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/NjczMzc2MmQt/NjczMzc2MmQt-NDk2NWFiNzEt-w1500._CB413745996_.jpg",
   
   "https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/MmE0NzgyZWMt/MmE0NzgyZWMt-OWEwODk1YmQt-w1500._CB660990915_.jpg",
]

const firstCarouselProducts = [
   "https://m.media-amazon.com/images/I/61y1GdLDC+L._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/414W43nzOUL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41hoy4FhGJL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/51Ye5W+M2CL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/512V+zNxQ9L._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41XF54PQeIL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/51SKhR+r4+L._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/51R58AqMXYL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41L+SqxAHcL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41tzcmt86YL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41QLyTXPhLL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41oKiltofGL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/51-mo91cYnL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/51BkPvYzZZL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41ADr2-PxPL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41MTiz-I5HL._AC_SY200_.jpg"
]

const secondCarouselProducts = [
   "https://m.media-amazon.com/images/I/31T7IWX4vmL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/31RUW5I0n9L._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/31MknWVEPRL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/317pOTOY8EL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41v4P0BNlEL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/31WiLkXhI9L._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/31ZwqTCqGwL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/31fYhL0NGyL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41VXIurU+yL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/31u39xAc0iL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/31bIZXzTeQL._AC_SY200_.jpg"
]

const thirdCarouselProducts = [
   "https://m.media-amazon.com/images/I/31HoMmvrbgL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/31QoBqnuajL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/31YOYs5AAsL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/31eoPYxETeL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/410zZ8ytLnL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/31EHq2Tz5fL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/31eAAt9ljPL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/21Ubi9LkTdL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/31ZPEdEgJBL._AC_SY200_.jpg"
]

const fourthCarouselProducts = [
   "https://m.media-amazon.com/images/I/51FPe-5D+QL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/51S-GMIU1BL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41krMJ9U1gL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41cELYphGYL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/31nagsaqsKL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41Eghqemf3L._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41EeZFg8R7L._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41pVN+ZKOeL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/51t89Vmn3vL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/410Wp6y1qLL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41VmFrbrV+L._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/51-kVcFnZhL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41L79R5hD1L._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41OXKN+XdCL._AC_SY200_.jpg"
]

const fifthCarouselProducts = [
   "https://m.media-amazon.com/images/I/41C0-ZMRXNL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/31HQ-Vq1OZL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41bc0n7nDKL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41Q+q4N0xML._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/51fLCrO1pwL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/51ePa+K-f9L._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41PMd7bmPPL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/51Rzu9ZkWeL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/51lfty5UyQL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41AtaIt1rOL._AC_SY200_.jpg",
   "https://m.media-amazon.com/images/I/41vLJgbEGbL._AC_SY200_.jpg"
]

const Home = () => {
   return (
      <>
         <Carousel className="carousel--ad" auto infinite>
            {carouselAd.map((el, idx) => {
               return <img src={el} alt="carouselItem" key={idx}></img>;
            })}
         </Carousel>

         <MainGrid></MainGrid>

         <Carousel
            className="carousel--products"
            title="Consigliati in base alla tua Lista dei Desideri"
         >
            {firstCarouselProducts.map((elem, idx) => {
               return <img src={elem} alt="carouselProduct" key={idx}></img>;
            })}
         </Carousel>

         <Carousel
            className="carousel--products"
            title="Correlati agli articoli visualizzati"
         >
            {secondCarouselProducts.map((el, idx) => {
               return <img key={idx} src={el} alt={el}></img>;
            })}
         </Carousel>

         <CardsRow
            data={[
               {
                  header: "Offerta Lampo",
                  img:
                     "https://images-na.ssl-images-amazon.com/images/I/51tWgDnfkAL._AC_SY240_.jpg",
                  details: {
                     euro: [254, 501],
                     cents: [99, 49],
                     currency: "€",
                     product: "9E+9TZ+ARM7+7E+9.BK phone",
                     type: "range",
                  },
                  review: false,
                  footer: "Scopri di più",
               },
               {
                  header: "Le migliori novità in CD e Vinili",
                  img:
                     "https://images-eu.ssl-images-amazon.com/images/G/29/Music/NYP/Music_NYP_379x304._SY304_CB422614963_.jpg",
                  details: false,
                  review: false,
                  footer: "Scopri",
               },
               {
                  header: "Valuta il tuo acquisto",
                  img:
                     "https://images-eu.ssl-images-amazon.com/images/I/413-cMFDzyL._SR215,215_.jpg",
                  details: false,
                  review: true,
                  footer: "Scopri altri prodotti da recensire",
               },
               {
                  header: "Tutte le nostre offerte",
                  img:
                     "https://images-eu.ssl-images-amazon.com/images/G/29/Events/XCM_Manual_1300553_1532081_ES_es_category_card_es_es_3615802_379x304_1X_IT._SY304_CB412344895_.jpg",
                  details: false,
                  review: false,
                  footer: "Scopri di più",
               },
            ]}
         ></CardsRow>

         <Carousel
            className="carousel--products"
            title="Stampanti con certificazioni di sostenibilità"
         >
            {thirdCarouselProducts.map((el, idx) => {
               return <img key={idx} src={el} alt="carousel product"></img>;
            })}
         </Carousel>

         <Carousel
            className="carousel--products"
            title="Prodotti alimentari con certificazioni di sostenibilità"
         >
            {fourthCarouselProducts.map((el, idx) => {
               return <img key={idx} src={el} alt="carousel product"></img>;
            })}
         </Carousel>

         <article className="hor-banner-ad">
            <img src="https://m.media-amazon.com/images/G/29/shazam/970x250-ghXzE._V413236657_.jpg" alt="ad-image"></img>
            <section className="sponsor-info">
               <Button to="/sponsor-info" className="link-btn--sponsor-info">Sponsorizzato</Button>
               <i className="sponsor-info__icon"></i>
            </section>
         </article>

         <Carousel
            className="carousel--products"
            title="Prodotti di elettronica con certificazioni di sostenibilità"
         >
            {fifthCarouselProducts.map((el, idx) => {
               return <img key={idx} src={el} alt="carousel product"></img>;
            })}
         </Carousel>
      </>
   );

}

export default Home;