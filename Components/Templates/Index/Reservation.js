import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "@/hooks/useForm";

export default function Reservation() {
  const [formSatet, onValueChange] = useForm({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  let { name, email, date, time } = formSatet;

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formSatet.inputs);
    const postinformations = fetch("http://localhost:4000/reservation",{
      method: "POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify(formSatet.inputs)
    });
  };

  return (
    <>
      {/* <!-- Reservation Start --> */}
      <div className="container-fluid my-5">
        <div className="container">
          <div className="reservation position-relative overlay-top overlay-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6 my-5 my-lg-0">
                <div className="p-5">
                  <div className="mb-4">
                    <h1 className="display-3 text-primary">30% OFF</h1>
                    <h1 className="text-white">For Online Reservation</h1>
                  </div>
                  <p className="text-white">
                    Lorem justo clita erat lorem labore ea, justo dolor lorem
                    ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
                    justo sed sed diam. Ea et erat ut sed diam sea
                  </p>
                  <ul className="list-inline text-white m-0">
                    <li className="py-2">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-primary mr-3"
                      />
                      Lorem ipsum dolor sit amet
                    </li>
                    <li className="py-2">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-primary mr-3"
                      />
                      Lorem ipsum dolor sit amet
                    </li>
                    <li className="py-2">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-primary mr-3"
                      />
                      Lorem ipsum dolor sit amet
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="text-center p-5"
                  style={{ background: "rgba(51, 33, 29, .8)" }}
                >
                  <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
                  <form className="mb-5" onSubmit={submitForm}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-transparent border-primary p-4"
                        placeholder="Name"
                        required="required"
                        value={name}
                        onChange={(e) => onValueChange(e.target.value, "name")}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control bg-transparent border-primary p-4"
                        placeholder="Email"
                        required="required"
                        value={email}
                        onChange={(e) => onValueChange(e.target.value, "email")}
                      />
                    </div>
                    <div className="form-group">
                      <div
                        className="date"
                        id="date"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                          placeholder="Date"
                          data-target="#date"
                          data-toggle="datetimepicker"
                          value={date}
                          onChange={(e) =>
                            onValueChange(e.target.value, "date")
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div
                        className="time"
                        id="time"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                          placeholder="Time"
                          data-target="#time"
                          data-toggle="datetimepicker"
                          value={time}
                          onChange={(e) =>
                            onValueChange(e.target.value, "time")
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <select
                        className="custom-select bg-transparent border-primary px-4"
                        style={{ height: "49px" }}
                        defaultValue="-1"
                      >
                        <option value="-1">Person</option>
                        <option value="1">Person 1</option>
                        <option value="2">Person 2</option>
                        <option value="3">Person 3</option>
                        <option value="3">Person 4</option>
                      </select>
                    </div>

                    <div>
                      <button
                        className="btn btn-primary btn-block font-weight-bold py-3"
                        type="submit"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Reservation End --> */}
    </>
  );
}
