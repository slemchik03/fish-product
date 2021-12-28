import { FC } from "react";
import { useSelector } from "../../../store/store";
import classes from "./HeaderBottom.module.scss"
import { HeaderSlider } from "./HeaderSlider/HeaderSlider";

export const HeaderBottom: FC = () => {
    const state = useSelector(state => state.headerTop)
    return (
        <div className={classes.headerBottom}>
            <div className="container">
                <h3 className={classes.headerBottomTitle}>
                    Морепродукты
                    из Норвегии
                </h3>
                <HeaderSlider currentSliderItemId={state.currentSliderItemId} sliderItems={state.sliderItems} />
            </div>
        </div>
    )
}