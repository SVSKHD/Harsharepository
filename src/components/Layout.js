import Navbar from "./Nav";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <br />
      {props.children}
      <br />
      <Footer />
    </>
  );
};
export default Layout;
