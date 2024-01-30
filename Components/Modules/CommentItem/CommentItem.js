import React from 'react'

export default function CommentItem({ username, body, desc, src }) {
  return (
    <>
      <div className="testimonial-item">
        <div className="d-flex align-items-center mb-3">
          <img className="img-fluid" src={src} alt="" />
          <div className="ml-3">
            <h4>{username}</h4>
            <i>{body}</i>
          </div>
        </div>
        <p className="m-0">{desc}</p>
      </div>
      <hr />
    </>
  );
}
