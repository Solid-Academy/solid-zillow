import scss from "./map.module.scss";

function Map({ id, title }) {
  return (
    <>
      <div className={scss.block} key={id}>
        {title}
      </div>
    </>
  );
}

export default Map;
