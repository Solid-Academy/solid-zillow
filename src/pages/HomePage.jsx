import AboveFooter from "../components/AboveFooter/AboveFooter";
import Card from "../components/card/Card";
import HomeSlider from "../components/carousel/HomeSlider";
import Footer from "../components/footer/Footer";
import HeaderHelpPage from "./helpPage/headerHelpPage/HeaderHelpPage";
import Header from "../components/header/Header";

function HomePage() {
  return (
    <div>
      <HeaderHelpPage />
      <Header />
      <HomeSlider />
      <Card />
      <AboveFooter />
      <Footer />
    </div>
  );
}
export default HomePage;
