import Footer from "../footer/Footer";
import Header from "../header/Header";

const ComingSoon = () => {
  return (
    <>
      <Header />
      <div className="h-[60vh] flex ">
        <h1 className="text-center self-center text-[#fd92b4] w-full text-6xl font-semibold py-5">
          Coming Soon...
        </h1>
      </div>
      <Footer />
    </>
  );
};
export default ComingSoon;
