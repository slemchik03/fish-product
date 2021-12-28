import classes from "./Quote.module.scss"
import quoteBg from "../../assets/quoteBg.png"

export const Quote: React.FC = () => {
    return (
        <div className={classes.quote}>
            <img className={classes.quoteImg} src={quoteBg} alt="" />
            <p className={classes.quoteText}>
                Вы получаете самые лучшие морепродукты
                Неважно, что это за морепродукты, потому что они норвежские,
                а значит - самого лучшего качества.
            </p>
        </div>
    )
}