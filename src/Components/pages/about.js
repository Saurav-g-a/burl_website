import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function About() {
  const Services = [
    {
      title: "Sampling Program",
      desc: "If you want to get your products, samples, coupons, and relevant information into the hands of new and expecting parents, this program is a perfect fit for you. We’ve built a network of over 1700 healthcare centres which includes Hospitals, Doctors, Doulas, OBGYN, Nurses that assists us in distributing sample bags to new and expecting moms. We distribute over 225,000 sample bags every year all across Canada.",
      images: "../about/about3.jpg",
    },
    {
      title: "Lookbook for Brands",
      mainTitle: "Buyer's Guide",
      desc: "Buyer’s guide helps brand which cannot be accommodated in the gift bags due to several reasons such as size, production cost and transportation reach and engage with parents all across Canada.Our reliable distribution network guarantees extensive brand and product awareness, while our content keeps parents highly engaged and informed. Seize this unmissable chance to connect with your target audience and leave a lasting impression.",
      images: "../client/client4.png",
    },
    {
      title: "Trade Show",
      desc: "Baby Brands has built its name and trust since 1988 presenting and distributing samples of brands like yours to new and expecting moms at trade shows. When parents receive your product samples in the Gift bags at the trade shows, it creates trust and excitement to try it. If you are uncertain about Exhibiting at the next consumer baby show, we can help you achieve this goal by placing your product into the show bag which will be handed out to new and expecting moms.",
      images: "../about/about4.jpg",
    },
    {
      title: "Social Media",
      desc: "We also support you through our social media channels which are 100% targeted to new and expecting moms when your product is inserted into the gift bag, helping you drive traffic to your website and your social media pages. We’ve social media pages across Instagram, Facebook, Twitter & LinkedIn to help you promote your products, promo codes, discount coupons and much more.",
      images: "../about/about5.jpg",
    },
  ];
  return (
    <>
      <Header />
      <section className="bg-about-us h-[400px] bg-no-repeat bg-cover	">
        <div className="h-full w-full bg-[#ffffff9c] flex">
          <h3 className="text-center text-[#699dea] w-full text-5xl font-bold self-center">
            About Us
          </h3>
        </div>
      </section>
      <section className="my-10 md:px-16 px-5">
        <div className="grid grid-cols-12 md:gap-8">
          <div className="md:col-span-6 col-span-12">
            <div>
              <h3 className="font-semibold text-[#699dea] text-3xl py-5">
                What we do
              </h3>
              <p>
                Baby Brands Gift Club has a host of helpful parenting ideas,
                tips, and gifts for connecting new and expecting parents to
                brand names. Since 1998, Baby Brands Gift Club has become
                Canada’s #1 distributor of the Gift Bags to new and expecting
                parents across Canada, distributing over 225,000 in 2021 through
                a national network of healthcare and medical professionals and
                related organizations.
              </p>
            </div>
          </div>
          <div className="md:col-span-6 col-span-12">
            <img src="../about/about.jpg" alt="About us" />
          </div>
        </div>
        <div className="grid grid-cols-12 md:gap-8 my-12">
          <div className="md:col-span-6 col-span-12">
            <img src="../about/about1.jpg" alt="About us" />
          </div>
          <div className="md:col-span-6 col-span-12">
            <div>
              <h3 className="font-semibold text-[#699dea] text-3xl py-5">
                What We Offer
              </h3>
              <p className="mb-3">
                Our FREE Sample Bags gives parents the opportunity to try
                products, so they can Try it! Like it! And Buy it! We want
                Canadian parents to be able to make this new parenting time the
                best it can be. That is why we focus on providing you with
                valuable savings, special offers, and expert advice.
              </p>
              <p className="mb-3">
                We make sure that we offer you products from trusted and
                reliable brands that will suit you and your baby’s needs. We
                have a network of over 1700 Hospitals, Doctors Offices,
                Doulas/Midwives, OBGYNs, Nursing Stations, Clinics and other
                medical-related Centers that assists us to distribute,
                demonstrate and answer any question regarding the items in the
                gift bag to new and expecting parents across Canada.{" "}
              </p>
              <p className="mb-3">
                {" "}
                Scan the QR code found in the gift bag or register online and
                get valuable savings, special offers, and expert advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-16 px-5">
        <div className="bg-[#fff4f8] md:p-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="md:col-span-7 col-span-12 self-center">
              <img src="../about/about2.webp" className="pr-4" alt="About us" />
            </div>
            <div className="md:col-span-5 col-span-12">
              <div>
                <img
                  src="../section/Mission.png"
                  className="h-[40px] mb-3"
                  alt="mission image"
                />
                <h3 className="font-semibold text-[#699dea] text-3xl">
                  Mission
                </h3>
                <p className="my-3 text-base">
                  At Baby Brands Gift Club, we reach mom’s first. Therefore, we
                  have a responsibility to provide what we believe to be the
                  best products, offers and information in the market. We take
                  our responsibility seriously, so that we make your life
                  easier.
                </p>
                <img
                  src="../section/Vision.png"
                  className="h-[40px]"
                  alt="Vision image"
                />
                <h3 className="my-3 font-semibold text-[#699dea] text-3xl">
                  Vision
                </h3>
                <p className="text-base">
                  As parents, we understand the confusion parents may feel when
                  trying to navigate through the mountain of information. Our
                  Vision is to have a positive impact on parents by giving them
                  unique experience through our sample bags that cater to their
                  needs and makes their life easier.
                </p>
                <p className="my-3 text-base">
                  Our employees have raised their hands to make a difference to
                  new parents, and their efforts have resulted in these free
                  sample gift bags. None of the freebies, information, or
                  coupons would be possible without the support of valued
                  employees and product partners.{" "}
                </p>
                <p className="text-base">
                  If you are a brand wanting your products to get into the hands
                  of these new young parents, this program is great for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-16 px-5 my-10">
        <div>
          <h3 className="font-semibold text-[#699dea] text-3xl py-5 text-center">
            Our Services
          </h3>
        </div>
        {Object.values(Services).map((data, index) => (
          <div className="grid grid-cols-12 md:gap-8 my-4">
            <div className="md:col-span-6 col-span-12">
              <div>
                <h1 className="font-semibold text-[#699dea] text-3xl py-5">
                  {data.mainTitle}
                </h1>
                <h3 className="font-semibold text-[#699dea] text-3xl py-5">
                  {data.title}
                </h3>
                <h3>{data.desc}</h3>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div>
                <img
                  src={data.images}
                  className="h-[350px] w-[100%]"
                  alt="Services Images"
                />
              </div>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}

export default About;
