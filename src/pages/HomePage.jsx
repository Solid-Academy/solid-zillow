import AboveFooter from "../components/AboveFooter/AboveFooter";
import Card from "../components/card/Card";
import HomeSlider from "../components/carousel/HomeSlider";
import Footer from "../components/footer/Footer";
import HeaderHelpPage from "../components/headerHelpPage/HeaderHelpPage";

function HomePage() {
  return (
    <div>
      <HeaderHelpPage />
      <HomeSlider />
      <Card />
      <AboveFooter />
      <Footer />
    </div>
  );
}
export default HomePage;
