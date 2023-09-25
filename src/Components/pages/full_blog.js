import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from 'react-router-dom';

function Full_blog() {
  const { id } = useParams();
  console.log('fullblog', id )
  return (
    <>
      <Header />
      <div>
        <h3 className="font-semibold text-center text-[#707070] text-3xl my-20">
          Neque porro quisquam est qui dolorem ipsum quia <br /> dolor sit amet,
          consectetur, adipisci velit...
        </h3>
        <div className="">
          <p className="text-[#707070] text-xl leading-[40px] max-w-5xl mx-auto">
            <span className="text-3xl font-bold">L</span>orem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries,
          </p>
        </div>
        <div className="max-w-3xl mx-auto my-20">
          <p className="text-[#707070] text-xl font-bold leading-[30px] ">
            The Buyer's Guide Magazine reaches a significant portion of
            first-time parents, who are often seeking guidance and
            recommendations to navigate the unfamiliar territory of parenthood
            successfully. This magazine is aimed at helping parents embark on
            their parenting journey with confidence by having the right
            products.
          </p>
        </div>
        <img
          src="../Blog/blog1.jpg"
          className="w-full h-[320px] object-top object-cover"
          alt="Blog Image"
        />
        <div className="max-w-5xl mx-auto my-20">
          <p className="text-[#707070] text-xl leading-[40px] ">
            The Buyer's Guide Magazine reaches a significant portion of
            first-time parents, who are often seeking guidance and
            recommendations to navigate the unfamiliar territory of parenthood
            successfully. This magazine is aimed at helping parents embark on
            their parenting journey with confidence by having the right
            products.
          </p>
          <p className="text-[#707070] text-xl leading-[40px] mt-10">
            The Buyer's Guide Magazine reaches a significant portion of
            first-time parents, who are often seeking guidance and
            recommendations to navigate the unfamiliar territory of parenthood
            successfully. This magazine is aimed at helping parents embark on
            their parenting journey with confidence by having the right
            products.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Full_blog;
