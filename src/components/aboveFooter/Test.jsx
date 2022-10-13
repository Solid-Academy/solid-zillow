import { useState } from "react";

function Test({ title, AboveFooterList }) {
  const [hidden, setHidden] = useState(false);
  return (
    <>
      <div onClick={() => setHidden(!hidden)}>{title}</div>
      {hidden && (
        <ul>
          {AboveFooterList.map((el) => (
            <li>{el.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Test;
