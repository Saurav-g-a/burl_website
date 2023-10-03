import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from 'react-router-dom';
import { full_blog } from "../api/all_api";
function Full_blog() {
  
  const { id } = useParams();
  const [blog_data, setBlog_data] = useState('');
  console.log('fullblog', blog_data )
  useEffect(() => {
    full_blog(id)
      .then((result) => {
        if (result) {
          setBlog_data(result);
          console.log(result)
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <div>
       
        <h3 className="font-semibold text-center text-[#707070] text-3xl my-20">
         {blog_data?.blog_post_title}
        </h3>
        <div className="">
          <p className="text-[#707070] text-xl leading-[40px] max-w-5xl mx-auto">
             {blog_data?.blog_post_text}
          </p>
        </div>
        <img
          src={blog_data?.blog_post_image}
          className="w-full h-[320px] object-top object-cover"
          alt="Blog Image"
        />
        <div className="max-w-5xl mx-auto my-20">
          <p className="text-[#707070] text-xl leading-[40px] ">
          {blog_data?.blog_post_text}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Full_blog;
