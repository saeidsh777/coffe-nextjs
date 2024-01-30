import Card from "@/Components/Modules/Card/Card";
import Header from "@/Components/Modules/Header/Header";
import HeaderShare from "@/Components/Modules/HeaderShare/HeaderShare";
import React from "react";

export default function Search({ searchResult }) {

  const hotItem = searchResult.filter(item => item.type == "hot");
  const colItem = searchResult.filter(item => item.type == "col");

  return (
    <>
      <Header>
        <HeaderShare page="Search" />
      </Header>

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
              {hotItem.length ? (
                searchResult
                  .filter((item) => item.type === "hot")
                  .map((item) => <Card key={item.id} {...item} />)
              ) : (
                <h3>"No Product"</h3>
              )}
            </div>
            <div className="col-lg-6">
              <h1 className="mb-5">Cold Coffee</h1>
              {colItem.length ? (
                searchResult
                  .filter((item) => item.type === "col")
                  .map((item) => <Card key={item.id} {...item} />)
              ) : (
                <h3>"No Product"</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const res = await fetch("http://localhost:4000/menu");
  const data = await res.json();

  const searchResult = data.filter(
    (item) =>
      item.type.toLowerCase().includes(query.q.toLowerCase()) ||
      item.title.toLowerCase().includes(query.q.toLowerCase())
  );

  return {
    props: {
      searchResult,
    },
  };
}
