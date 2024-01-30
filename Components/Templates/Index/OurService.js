import ServeceItem from "@/Components/Modules/ServeceItem/ServeceItem";
import React from "react";

export default function OurService({ servicesData }) {
  return (
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
              <ServeceItem key={item.id}
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
  );
}

// http://localhost:4000/services
