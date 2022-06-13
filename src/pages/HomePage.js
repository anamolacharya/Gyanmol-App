import React from "react";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import GyanmolBanner from "../images/GyanmolBanner.png";
import SearchBar from "../components/SearchBar";

const HomePage = () => (
  <>
    <Banner image={GyanmolBanner} />
    <SearchBar />
    <h3>Content section 1</h3>
    <h3>Content section 2</h3>
  </>
);

export default HomePage;
