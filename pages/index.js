import Header from "@/Components/Modules/Header/Header";

import About from "@/Components/Templates/About/About";
import OurService from "@/Components/Templates/OurService/OurService";
import Offer from "@/Components/Templates/Offer/Offer";
import Menu from "@/Components/Templates/Menu/Menu";
import Reservation from "@/Components/Templates/Reservation/Reservation";
import Testimonial from "@/Components/Templates/Testimonial/Testimonial";
import SliderHeader from "@/Components/Templates/Index/SliderHeader";

export default function Home() {
  return (
    <>
      <Header>
        <SliderHeader/>
      </Header>
      <About/>
      <OurService/>
      <Offer/>
      <Menu/>
      <Reservation/>
      <Testimonial/>
    </>
  );
}
