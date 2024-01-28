import Header from "@/Components/Modules/Header/Header";

import About from "@/Components/Templates/Index/About";
import OurService from "@/Components/Templates/Index/OurService";
import Offer from "@/Components/Templates/Index/Offer";
import Menu from "@/Components/Templates/Index/Menu";
import Reservation from "@/Components/Templates/Index/Reservation";
import Testimonial from "@/Components/Templates/Index/Testimonial";
import SliderHeader from "@/Components/Templates/Index/SliderHeader";

export default function Home() {
  return (
    <>
      <Header>
        <SliderHeader />
      </Header>
      <About />
      <OurService />
      <Offer />
      <Menu />
      <Reservation />
      <Testimonial />
    </>
  );
}
