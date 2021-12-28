import { useRef, useState } from "react"
import classes from "./Advantages.module.scss"

export const Advantages: React.FC = () => {
    const [isVisible, setVisibleStatus] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    window.addEventListener("scroll", () => {
        const current = ref.current
        if (current && current.getBoundingClientRect().top < 65 && !isVisible) {
            console.log("true!");
            return setVisibleStatus(true)
        }
    })
    return (
        <section className={classes.advantages}>
            <div className={classes.advantagesWrapper}>
                <div className="container">
                    <div ref={ref} className={isVisible ?
                        classes.advantagesList + " " + classes.visible :
                        classes.advantagesList
                    }>
                        <div className={classes.advantagesListItem}>
                            <p className={classes.advantagesListItemDesc}>Some opportunity for u!</p>
                        </div>
                        <div className={classes.advantagesListItem}>
                            <p className={classes.advantagesListItemDesc}>Some opportunity for u!</p>
                        </div>
                        <div className={classes.advantagesListItem}>
                            <p className={classes.advantagesListItemDesc}>Some opportunity for u!</p>
                        </div>
                        <div className={classes.advantagesListItem}>
                            <p className={classes.advantagesListItemDesc}>Some opportunity for u!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}