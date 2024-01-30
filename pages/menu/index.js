import Card from "@/Components/Modules/Card/Card";
import Header from "@/Components/Modules/Header/Header";
import HeaderShare from "@/Components/Modules/HeaderShare/HeaderShare";
import React from "react";

export default function Menu({ menuData }) {
  return (
    <>
      <Header>
        <HeaderShare page="Menu" />
      </Header>

      <>
        {/* <!-- Menu Start --> */}
        <div className="container-fluid pt-5">
          <div className="container">
            <div className="section-title">
              <h4
                className="text-primary text-uppercase"
                style={{ letterSpacing: "5px" }}
              >
                Menu & Pricing
              </h4>
              <h1 className="display-4">Competitive Pricing</h1>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <h1 className="mb-5">Hot Coffee</h1>
                {menuData
                  .filter((item) => item.type === "hot")
                  .map((item) => (
                    <Card key={item.id} {...item} />
                  ))}
              </div>
              <div className="col-lg-6">
                <h1 className="mb-5">Cold Coffee</h1>
                {menuData
                  .filter((item) => item.type === "col")
                  .map((item) => (
                    <Card key={item.id} {...item} />
                  ))}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Menu End --> */}
      </>
    </>
  );
}

export async function getStaticProps() {
  const menuRes = await fetch("http://localhost:4000/menu");
  const menuData = await menuRes.json();

  return {
    props: {
      menuData,
    },
    revalidate: 60 * 60 * 24,
  };
}
