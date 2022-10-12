// import { useState } from "react";
import arrayAboveFooter from "../../constans/data";
import Test from "./Test";
// import scss from "./aboveFooter.module.scss";
// import Map from "./Map";

function AboveFooter() {
  // const [isActive, setIsActive] = useState(false);

  return (
    <>
      <hr />
      {/* <div className={scss.aboveFooter}>
        <div className={scss.block} onClick={() => setIsActive(!isActive)}>
          <div className={scss.name}>Real Estate</div>
          <p>/\</p>
        </div>
        {isActive ? (
          <div>
            {arrayAboveFooter.map((item) => (
              <Map key={item.id} title={item.title} />
            ))}
          </div>
        ) : (
          ""
        )}
        |<br />|
        <div className={scss.block} onClick={() => setIsActive(!isActive)}>
          <div className={scss.name}>Rentals</div>
          <p>/\</p>
        </div>
        {isActive ? (
          <div>
            {arrayAboveFooter.map((item) => (
              <Map key={item.id} title={item.title} />
            ))}
          </div>
        ) : (
          ""
        )}
        |<br />|
        <div className={scss.block} onClick={() => setIsActive(!isActive)}>
          <div className={scss.name}>Mortgage Rates</div>
          <p>/\</p>
        </div>
        {isActive ? (
          <div>
            {arrayAboveFooter.map((item) => (
              <Map key={item.id} title={item.title} />
            ))}
          </div>
        ) : (
          ""
        )}
        |<br />|
        // <div className={scss.block} onClick={() => setIsActive(!isActive)}>
        //   <div className={scss.name}> </div>
        //   <p>/\</p>
        // </div>
        // {isActive ? (
        //   <div>
        //     {arrayAboveFooter.map((item) => (
        //       <Map key={item.id} title={item.title} />
        //     ))}
        //   </div>
        // ) : (
        //   ""
        // )}
      </div> */}
      {arrayAboveFooter.map((el) => (
        <Test title={el.title} arr={el.desc} />
      ))}
    </>
  );
}

export default AboveFooter;
