import "../src/index.css";

function Card({ imgs, click, id }) {
  
  function flipCard(event) {
    const button = event.currentTarget;
    const img = event.currentTarget.querySelector("img");
    button.style.backgroundColor = "rgb(30,30,30)";
    button.style.border = "0px";
    img.style.transform =
      img.style.transform === "rotateY(0deg)"
        ? button.disable == true
        : "rotateY(0deg)";
    if (id === 0) {
      alert("Bomb is done");
      const allButtons = document.querySelectorAll(".card-info");
      allButtons.forEach((btn) => {
        btn.disabled = true;
      });
      setTimeout(reloadFn, 3000);
    }
    function reloadFn() {
      window.location.reload();
    }
  }

  return (
    <button
      className="card-info"
      onClick={(event) => {
        click(id);
        flipCard(event);
      }}
    >
      <img src={imgs.img} alt="" id="img" />
    </button>
  );
}

export default Card;
