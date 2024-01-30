import Header from '@/Components/Modules/Header/Header'
import HeaderShare from '@/Components/Modules/HeaderShare/HeaderShare'
import ServeceItem from '@/Components/Modules/ServeceItem/ServeceItem';
import React from 'react'

export default function Services({ servicesData }) {
  return (
    <>
      <Header>
        <HeaderShare page="Services" />
      </Header>

      <>
        {/* <!-- Service Start --> */}
        <div className="container-fluid pt-5">
          <div className="container">
            <div className="section-title">
              <h4
                className="text-primary text-uppercase"
                style={{ letterSpacing: "5px" }}
              >
                Our Services
              </h4>
              <h1 className="display-4">Fresh & Organic Beans</h1>
            </div>
            <div className="row">
              {servicesData.map((item) => (
                <ServeceItem
                  key={item.id}
                  src={item.src}
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </div>
        {/* <!-- Service End --> */}
      </>
    </>
  );
}

export async function getStaticProps (){
  const servicesRes = await fetch("http://localhost:4000/services");
  const servicesData = await servicesRes.json()

  return {
    props: {
      servicesData,
    },
  };
}
