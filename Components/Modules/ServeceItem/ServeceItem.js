import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
export default function ServeceItem({src, icon, title, desc}) {
  return (
    <div className="col-lg-6 mb-5">
      <div className="row align-items-center">
        <div className="col-sm-5">
          <img
            className="img-fluid mb-3 mb-sm-0"
            src={src}
            alt=""
          />
        </div>
        <div className="col-sm-7">
          <h4>
            <span className="service-icon">
              <FontAwesomeIcon icon={Icons[icon]} />
            </span>
            {title}
          </h4>
          <p className="m-0">
           {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
