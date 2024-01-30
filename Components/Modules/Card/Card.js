import Link from 'next/link';
import React from 'react'

export default function Card({src,price, title, desc, id}) {
  return (
    <div className="row align-items-center mb-5">
      <div className="col-4 col-sm-3">
        <img className="w-100 rounded-circle mb-3 mb-sm-0" src={src} alt="" />
        <h5 className="menu-price">${price}</h5>
      </div>
      <div className="col-8 col-sm-9">
        <h4>
          <Link href={`/product/${id}`}>{title}</Link>
        </h4>
        <p className="m-0">{desc}</p>
      </div>
    </div>
  );
}
