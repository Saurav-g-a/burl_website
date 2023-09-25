import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Banner from "../common/banner";
import Footer from "../footer/Footer";
import { blogs } from "../api/all_api";
import { Link } from "react-router-dom";
function Blog() {
  const [blog_data, setBlog_data] = useState([]);

  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll);
  };

  const displayedData = showAll ? blog_data : blog_data.slice(0, 6);

  useEffect(() => {
    blogs()
      .then((result) => {
        if (result) {
          setBlog_data(result.reverse());
          console.log(result.reverse())
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <Header />
      <Banner />

      <section className=" px-5 md:px-20">
        <div className="border-b border-[#fd92b4] w-full my-10">
          <h3 className="border-b-4 border-[#fd92b4] pb-4 md:w-[16%] text-2xl font-semibold text-[#747474]">
            Latest Posts
          </h3>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="md:col-span-6 col-span-12">
            <img
              src={blog_data[0]?.blog_post_image}
              className="w-full mb-5"
              alt="Post image"
            />
            <Link
              to={`/full-blog/${blog_data[0]?.id}`}
              className="my-4 text-lg font-bold text-[#747474]"
            >
              {blog_data[0]?.blog_post_title}
            </Link>
            <p className="text-[#747474] mt-5">
              {blog_data[0]?.blog_post_text}
            </p>
          </div>
          <div className="md:col-span-6 col-span-12">
            <div className="md:flex">
              <img
                src={blog_data[1]?.blog_post_image}
                className="h-[200px] md:w-[250px] md:mb-0 mb-3"
                alt="Post image"
              />
              <div className="ml-4">
               <Link
               to="/Full_blog"
                  className="mb-4 text-lg font-bold text-[#747474]"
                >
                  {blog_data[1]?.blog_post_title}
                </Link>
                <p className="text-[#747474] mt-5">
                  {blog_data[1]?.blog_post_text}
                </p>
              </div>
            </div>
            <div className="md:flex mt-5">
              <img
                src={blog_data[2]?.blog_post_image}
                className="h-[200px] md:w-[250px] md:mb-0 mb-3"
                alt="Post image"
              />
              <div className="ml-4">
              <Link      to="/Full_blog"
                  className="mb-4 text-lg font-bold text-[#747474]"
                >
                  {blog_data[2]?.blog_post_title}
                </Link>
                <p className="text-[#747474] mt-5">
                  {blog_data[2]?.blog_post_text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-20 px-5 my-12">
        <div className="border-b border-[#fd92b4] w-full my-10 ">
          <h3 className="border-b-4 border-[#fd92b4] pb-4 md:w-[16%] text-2xl font-semibold text-[#747474]">
            Popular Posts
          </h3>
        </div>
        <div className="grid grid-cols-12 md:gap-10 gap-2">
          {displayedData.map((data, index) => (
            <div className="md:col-span-4 col-span-12" key={index}>
              <img
                src={data.blog_post_image}
                className="w-full h-[250px] mb-5"
                alt="Post image"
              />
              <Link to="/Full_blog" className="text-lg font-bold text-[#747474]">
                {data.blog_post_title}
              </Link>
              <p className="text-[#747474] mt-5">{data.blog_post_text}</p>
            </div>
          ))}
        </div>
        {blog_data.length > 6 && (
          <div className="text-center my-12">
            <button
              onClick={handleClick}
              className="btn btn-primary border-2 px-5 py-3 text-lg border-black font-semibold"
            >
              {showAll ? "Show Less" : "Load More"}
            </button>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

export default Blog;
