import classes from "./HeaderSlider.module.scss"
import headerBottomArrowTopImg from "../../../../assets/headerBottomArrowTop.png"
import headerBottomArrowBottomImg from "../../../../assets/headerBottomArrowDown.png"
import { useDispatch } from "react-redux"
import { actionCreators } from "../../../../store/reducers/headerReducer/actionCreators"
import { useEffect } from "react"


interface Props {
    currentSliderItemId: number;
    sliderItems: { id: number, text: string }[];
}

export const HeaderSlider: React.FC<Props> = ({ currentSliderItemId, sliderItems }) => {
    const currentItem = sliderItems.filter(v => v.id === currentSliderItemId)[0]
    const dispatch = useDispatch()

    const clickToUpHandler = () => {

        if (currentItem) {
            currentItem.id < sliderItems.length ?
                dispatch(actionCreators.setCurrentSliderItemId(currentItem.id + 1)) :
                dispatch(actionCreators.setCurrentSliderItemId(1))
        }
    }
    const clickToDownHandler = () => {

        if (currentItem) {
            currentItem.id > 1 ?
                dispatch(actionCreators.setCurrentSliderItemId(currentItem.id - 1)) :
                dispatch(actionCreators.setCurrentSliderItemId(sliderItems.length))

        }
    }

    const clickToSliderItemHandler = (id: number) => () => {
        return id !== currentSliderItemId ?
            dispatch(actionCreators.setCurrentSliderItemId(id)
            ) : ""
    }

    useEffect(() => {
        dispatch(actionCreators.setSliderItemContent())
    }, [])

    if (currentItem) {
        return (
            <div className={classes.headerBottomSlider}>
                <div className={classes.headerBottomSliderNav}>
                    <img className={classes.headerBottomSliderNavArrow} onClick={clickToUpHandler} src={headerBottomArrowTopImg} alt="" />
                    <div className={classes.headerBottomSliderNavContent}>
                        {sliderItems.map(v => (
                            v.id === currentItem.id ?
                                <div className={classes.active} onClick={clickToSliderItemHandler(v.id)} key={v.id}>{v.id}</div> :
                                <div onClick={clickToSliderItemHandler(v.id)} key={v.id}>{v.id}</div>
                        )
                        ).reverse()}
                    </div>
                    <img className={classes.headerBottomSliderNavArrow} onClick={clickToDownHandler} src={headerBottomArrowBottomImg} alt="" />
                </div>
                <div className={classes.headerBottomSliderContent}>
                    {<p>{currentItem.text}</p>}
                    <button>Select!</button>
                </div>
            </div>
        )
    }
    return <></>

}