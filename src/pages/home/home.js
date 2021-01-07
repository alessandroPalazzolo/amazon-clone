import React from "react";

import MainGrid from "./components/MainGrid";
import Carousel from "../../shared/UIElements/Carousel";

import "./home.scss";

const mainCarouselItems = [
   "https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/ZmI2ZDQyNTkt/ZmI2ZDQyNTkt-MTMyOWE2NTkt-w1500._CB413694611_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/NGU2YjIxODUt/NGU2YjIxODUt-NWIxOGE2OWQt-w1500._CB402742107_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/29/digital/video/gateway/placement/launch/IamGreta/GRETA_2021_GWBleedingHero_HO_COVIDUPDATE_XSite_1500X600_PV_it-IT._CB412674362_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/ODlhMmE4ODct/ODlhMmE4ODct-Y2FkY2QwZTkt-w1500._CB419275006_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/ZmRiOTNjOTMt/ZmRiOTNjOTMt-M2UyYmY4OTkt-w1500._CB413884334_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/29/primestudent/2020/IT_Onsite-Hero-Desktop-Boxes-1500x600px1x._CB415335922_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/29/kindle/journeys/NjczMzc2MmQt/NjczMzc2MmQt-NDk2NWFiNzEt-w1500._CB413745996_.jpg"
]

const Home = () => {
   return (
      <>
         <Carousel className="carousel--main" items={mainCarouselItems} />
         <MainGrid></MainGrid>
      </>
   );

}

export default Home;