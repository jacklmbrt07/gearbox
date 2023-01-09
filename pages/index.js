import React, { useState } from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";
import Pagination from "../components/Pagination";

const Home = ({ products, bannerData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = products.slice(firstPostIndex, lastPostIndex);
  const bestSellers = products.filter((product) => {
    if (product.reviewRating == 5) {
      return product;
    }
  });

  console.log("products", products);
  console.log("bestsellers: ", bestSellers);

  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>All Games</h2>
        <p>Use Search bar below or scroll through page numbers.  </p>
        <br/>
        <input
          type="text"
          placeholder="Search Game Catalog"
          className="game-search"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      {!searchTerm ? (
        <>
          {" "}
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
        </>
      ) : (
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
              .map((product) => (
                <Product key={product._id} product={product} />
              ))}
        </div>
      )}

      <div className="products-heading">
        <h2>Best Sellers</h2>
        <br/>
        <p>Games Rated 5/5</p>
      </div>
      <div className="products-container">
        {bestSellers.map((product) => (
          <Product key={product._id} product={product} />
        ))}
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
