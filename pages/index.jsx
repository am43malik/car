import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
const inter = Inter({ subsets: ["latin"] });
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const contentful = require("contentful");
import Products from "./Products";
export const getStaticProps = async () => {
  const client = contentful.createClient({
    space: "exkv6i296cyi",

    accessToken: "L9YNTjHxmREE1-exmi2i_K19jQoKwA5YOEnWhbGMUIA",
  });

  const res = await client.getEntries({
    content_type: "product",
  });
  return {
    props: {
      products: res.items,
    },
  };
};

export default function Home({ products }) {
  // console.log(products,'props')

  return (
    <>
      <Head>
        <title>Car App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 style={{ textAlign: "center" }}> Buy car on Rent</h1>

      <div>
        <div className="container">
          <div className="row">
            {products.map((item) => (
              <div key={item.sys.id} id="cardItem" className="col-md-4">
                <Products product={item} />
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}