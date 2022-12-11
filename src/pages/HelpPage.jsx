import Navigate from "../components/navigate/Navigate";
import Search_Help from "../components/searchHelp/Search_Help";
import HelpFooter from "./helpPage/helpFooter/HelpFooter";

function HelpPage() {
  return (
    <div>
      <Search_Help />
      <Navigate />
      <HelpFooter />
    </div>
  );
}
export default HelpPage;
