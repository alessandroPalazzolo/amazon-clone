import React from "react";

import MainGrid from "./components/MainGrid";
import Carousel from "../../shared/UIElements/Carousel";

import "./home.scss";

const carouselAd = [
   "https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/NjczMzc2MmQt/NjczMzc2MmQt-NDk2NWFiNzEt-w1500._CB413745996_.jpg",

   "https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/ZmI2ZDQyNTkt/ZmI2ZDQyNTkt-MTMyOWE2NTkt-w1500._CB413694611_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/NGU2YjIxODUt/NGU2YjIxODUt-NWIxOGE2OWQt-w1500._CB402742107_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/29/digital/video/gateway/placement/launch/IamGreta/GRETA_2021_GWBleedingHero_HO_COVIDUPDATE_XSite_1500X600_PV_it-IT._CB412674362_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/ODlhMmE4ODct/ODlhMmE4ODct-Y2FkY2QwZTkt-w1500._CB419275006_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/ZmRiOTNjOTMt/ZmRiOTNjOTMt-M2UyYmY4OTkt-w1500._CB413884334_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/29/primestudent/2020/IT_Onsite-Hero-Desktop-Boxes-1500x600px1x._CB415335922_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/NjczMzc2MmQt/NjczMzc2MmQt-NDk2NWFiNzEt-w1500._CB413745996_.jpg",
   
   "https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/ZmI2ZDQyNTkt/ZmI2ZDQyNTkt-MTMyOWE2NTkt-w1500._CB413694611_.jpg",
]

const carouselProducts = [
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

const Home = () => {
   return (
      <>
         <Carousel className="carousel--ad" auto infinite>
            {carouselAd.map((el, idx) => {
               return <img src={el} alt="carouselItem" key={idx}></img>;
            })}
         </Carousel>

         <MainGrid></MainGrid>

         <Carousel className="carousel--products" title="Consigliati in base alla tua Lista dei Desideri">
            {carouselProducts.map((elem, idx) => {
               return <img src={elem} alt="carouselProduct" key={idx}></img>;
            })}
         </Carousel>
      </>
   );

}

export default Home;