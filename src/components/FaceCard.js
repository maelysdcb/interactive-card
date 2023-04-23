import cardLogo from "../assets/images/card-logo.svg";
import bgCard from "../assets/images/bg-card-front.png";
import "../styles/FaceCard.css";

export default function FaceCard({inputValue}) {
  
  return (
    <div className="face-card">
        <img src={bgCard} alt="" />
      <div className="face-card-inner">
        <div className="face-card-header">
          <img src={cardLogo} alt="card logo" />
        </div>
        <div className="face-card-data">
          <span className="face-card-number">{inputValue.cardNumber}</span>
          <div className="face-card-pmy">
            <span className="face-card-p">{inputValue.firstName}</span>
            <span className="face-card-my">{inputValue.month} / {inputValue.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
