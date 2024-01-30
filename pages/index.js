import Header from "@/Components/Modules/Header/Header";

import About from "@/Components/Templates/Index/About";
import OurService from "@/Components/Templates/Index/OurService";
import Offer from "@/Components/Templates/Index/Offer";
import Menu from "@/Components/Templates/Index/Menu";
import Reservation from "@/Components/Templates/Index/Reservation";
import Testimonial from "@/Components/Templates/Index/Testimonial";
import SliderHeader from "@/Components/Templates/Index/SliderHeader";

export default function Home({ data }) {
  return (
    <>
      <Header>
        <SliderHeader />
      </Header>
      <About />
      <OurService servicesData={data.servicesData} />
      <Offer />
      <Menu menuData={data.menuData} />
      <Reservation />
      <Testimonial commentData={data.commentData} />
    </>
  );
}

export async function getStaticProps() {
  const servicesRes = await fetch("http://localhost:4000/services");
  const servicesData = await servicesRes.json();
  
  const menuRes = await fetch("http://localhost:4000/menu");
  const menuData = await menuRes.json();
  
  const commentRes = await fetch("http://localhost:4000/comment");
  const commentData = await commentRes.json();

  return {
    props: {
      data: {
        servicesData,
        menuData,
        commentData
      },
    },
    revalidate: 60 * 60 * 24,
  };
}
