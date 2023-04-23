import backCard from "../assets/images/bg-card-back.png"
import "../styles/BackCard.css"

export default function BackCard({inputValue}) {

    return (
        <div className="back-card">
            <img src={backCard} alt="back card" />
            <span className="back-card-cvc">{inputValue.cvc}</span>
        </div>
    )
}