import { useState } from "react";

function Test({ title, arr }) {
  const [hidden, setHidden] = useState(false);
  return (
    <>
      <div onClick={() => setHidden(!hidden)}>{title}</div>
      {hidden && (
        <ul>
          {arr.map((el) => (
            <li>{el.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Test;
