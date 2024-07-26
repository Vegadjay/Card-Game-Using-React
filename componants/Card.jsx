import "../src/index.css";
import mineSound from "../sound/mine-sound.mp3";
import bombSound from "../sound/bomb-sound.mp3";
import Swal from "sweetalert2";
function Card({ imgs, click, id }) {
  function flipCard(event) {
    const mineAudio = new Audio(mineSound);
    const bombAudio = new Audio(bombSound);
    const button = event.currentTarget;
    const img = event.currentTarget.querySelector("img");
    button.style.backgroundColor = "rgb(30,30,30)";
    button.style.border = "0px";
    img.style.transform =
      img.style.transform === "rotateY(0deg)"
        ? button.disable == true
        : "rotateY(0deg)";
    mineAudio.play();
    if (id === 0) {
      mineAudio.pause();
      bombAudio.play();
      Swal.fire({
        icon: "error",
        title: "Better Luck Next Time",
        text: "You Loose the game",
        footer: '<a href="#">Play again</a>',
      });
      const allButtons = document.querySelectorAll(".card-info");
      allButtons.forEach((btn) => {
        btn.disabled = true;
      });
      setTimeout(reloadFn, 3000);
      setTimeout(resetCard, 2000);
      revealAllCards();
    }
    function reloadFn() {
      window.location.reload();
    }
    function revealAllCards() {
      const allButtons = document.querySelectorAll(".card-info");
      allButtons.forEach((btn) => {
        const img = btn.querySelector("img");
        // TODO: change color when flip all the cards light dim all the cards
        btn.style.backgroundColor = "rgb(30,30,30)";
        btn.style.border = "0px";
        img.style.transform = "rotateY(0deg)";
      });
    }
    function resetCard() {
      const img = event.currentTarget.querySelectorAll("img");
      console.log(img);
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
