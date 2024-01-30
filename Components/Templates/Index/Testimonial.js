import CommentItem from "@/Components/Modules/CommentItem/CommentItem";
import React, { useState } from "react";

export default function Testimonial({ commentData }) {
  return (
    <>
      {/* <!-- Testimonial Start --> */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Testimonial
            </h4>
            <h1 className="display-4">Our Clients Say</h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            {commentData.slice(0,4).map((item) => (
              <CommentItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}
    </>
  );
}
