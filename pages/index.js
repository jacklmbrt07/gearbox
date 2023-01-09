import React, { useState } from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";
import Pagination from "../components/Pagination";

const Home = ({ products, bannerData }) => {
  console.log("products", products);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = products.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {currentPost.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <Pagination
        totalPosts={products.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      {/* <div className="products-container">
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div> */}

      <div className="products-heading">
        <h2>Search our Catalog</h2>
        <input
          type="text"
          placeholder="...Search"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <div className="products-container">
        {searchTerm &&
          products
            .filter((product) => {
              if (
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return product;
              }
            })
            .map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
