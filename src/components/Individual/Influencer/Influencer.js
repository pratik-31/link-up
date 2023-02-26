import React from "react";
import "./Influencer.css";
import SocialLinks from "../Socials/Socials";
import "../Services/Services";
import MyButton from "../MyButton/MyButton";
import { motion, useScroll } from "framer-motion";
import Cart from "../Cart/Cart";
function Influencer() {
  const baseURL = "/heroic-crepe-128b5f.netlify.app";
  const handleClick = () => {
    window.location = `${baseURL}/cart`;
    console.log("Button clicked!");
  };
  return (
    <div>
      <>
        <div className="influencer__header">
          <h1>Influencer</h1>
          <p>Welcome to my profile !!!</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="influencer__image-container"
        >
          <div className="influencer__row">
            <div className="influencer__column">
              <img
                className="influencer__i"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNyqmPsZSWT7gSlMT2S3MAIKeIv6BNi8RVfUyJrt9Hz-j7cBA5w"
                style={{ width: "100%" }}
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5DQzfrlUV4brRt5XZfLwy8AX4hVoYARbTDmYLiiZQ63gnoeHZQ"
                style={{ width: "100%" }}
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQ_I1QtL0NHp5nWVyXCnLznVFE4rGS_FOOYAAu0_Yczslp4vQ"
                style={{ width: "100%" }}
              />
            </div>

            <div className="influencer__column">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNyqmPsZSWT7gSlMT2S3MAIKeIv6BNi8RVfUyJrt9Hz-j7cBA5w"
                //src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwaW5mbHVlbmNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                style={{ width: "100%" }}
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5DQzfrlUV4brRt5XZfLwy8AX4hVoYARbTDmYLiiZQ63gnoeHZQ"
                // src="https://images.unsplash.com/photo-1583686500566-351592f8ea58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                style={{ width: "100%" }}
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQ_I1QtL0NHp5nWVyXCnLznVFE4rGS_FOOYAAu0_Yczslp4vQ"
                // src="https://images.unsplash.com/photo-1583686500566-351592f8ea58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                style={{ width: "100%" }}
              />
            </div>

            <div className="influencer__column">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNyqmPsZSWT7gSlMT2S3MAIKeIv6BNi8RVfUyJrt9Hz-j7cBA5w"
                // src="https://images.unsplash.com/photo-1543935637-469e1ed2f8e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXRpZnVsJTIwd29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                style={{ width: "100%" }}
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5DQzfrlUV4brRt5XZfLwy8AX4hVoYARbTDmYLiiZQ63gnoeHZQ"
                //src="https://images.unsplash.com/photo-1583686500566-351592f8ea58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                style={{ width: "100%" }}
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQ_I1QtL0NHp5nWVyXCnLznVFE4rGS_FOOYAAu0_Yczslp4vQ"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </motion.div>
      </>
      <div id="influencer__about">
        <h1 className="influencer__title-size"> ABOUT ME </h1>
        <br />
        <p className="influencer__text-size">
          {" "}
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est."
        </p>
      </div>
      <SocialLinks />
      <div className="influencer__header">
        <h1>Services</h1>
      </div>
      <div className="influencer__fcont">
        {/* <Cart /> */}
        <>
          <article className="influencer__card">
            <h2 class="influencer__head">Package 1</h2>
            <h3>$250</h3>
            <p>
              This package includes 1 instagram reel video showcasing your
              products. I will also tag you and talk about the products in the
              caption. You will have access to this video to repost to your own
              pages if desired.
            </p>
          </article>
          <article className="influencer__card">
            <h2 class="influencer__head">Package 1</h2>
            <h3>$500</h3>
            <p>
              This package includes 1 post in my feed specifically created to
              showcase your products. I will speak about the products in the
              caption, and tag your brand
            </p>
          </article>
          <article className="influencer__card">
            <h2 class="influencer__head">Package 3</h2>
            <h3>$100</h3>
            <p>
              This package includes 1 tik tok video showcasing your products. I
              will also tag you and talk about the products in the caption. You
              will have access to this video to repost to your own pages if
              desired.
            </p>
          </article>
        </>
      </div>
      <div className="new_btn">
        <button type="submit" onClick={handleClick}>
          Book a package
        </button>
      </div>
    </div>
  );
}

export default Influencer;
