import "../src/index.css";

function Card({ imgs, click, id }) {
  function flipCard(event) {
    const img = event.currentTarget.querySelector("img");
    img.style.transform =
      img.style.transform === "rotateY(0deg)"
        ? "rotateY(180deg)"
        : "rotateY(0deg)";
  }

  return (
    <div
      className="card-info"
      onClick={(event) => {
        click(id);
        flipCard(event);
      }}
    >
      <img src={imgs.img} alt="" id="img" />
    </div>
  );
}

export default Card;
