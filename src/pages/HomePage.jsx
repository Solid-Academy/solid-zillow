import AboveFooter from "../components/AboveFooter/AboveFooter";
import Card from "../components/card/Card";
import HomeSlider from "../components/carousel/HomeSlider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function HomePage() {
  return (
    <div>
      <Header />
      <HomeSlider />
      <Card />
      <AboveFooter />
      <Footer />
    </div>
  );
}
export default HomePage;
