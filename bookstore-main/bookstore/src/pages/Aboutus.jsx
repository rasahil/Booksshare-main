
import Navbar from "../components/Navbar";
import Middle from "../components/Aboutus";
import Footer from "../components/Fotter";

const Aboutus = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-20 lg:mt-24">
        <div>
          <Middle />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
