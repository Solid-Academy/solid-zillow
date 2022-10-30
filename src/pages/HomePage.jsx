import AboveFooter from "../components/AboveFooter/AboveFooter";
import Card from "../components/card/Card";
import HomeSlider from "../components/carousel/HomeSlider";
import Footer from "../components/footer/Footer";
import HeaderHelpPage from "../components/headerHelpPage/HeaderHelpPage";

function HomePage() {
  return (
    // я добавил этот headerHelpPage временно
    // пока Азим не доделает сам header
    //  так как ешл некуда положить для демонстрации
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
