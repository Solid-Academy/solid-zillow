import arrayAboveFooter from "../../constans/data";
import Test from "./Test";

function AboveFooter() {
  return (
    <>
      <hr />
      {arrayAboveFooter.map((el, index) => (
        <Test key={index} title={el.title} AboveFooterList={el.desc} />
      ))}
    </>
  );
}

export default AboveFooter;
