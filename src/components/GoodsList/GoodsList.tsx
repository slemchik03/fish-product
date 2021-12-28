import { GoodsListItem } from "./GoodsListItem/GoodsListItem"
import classes from "./GoodsList.module.scss"
import goodsListArrowDown from "../../assets/goodsListArrowDown.png"
import goodsListArrowTop from "../../assets/goodsListArrowTop.png"
import { useDispatch } from "react-redux"
import { useSelector } from "../../store/store"
import { useEffect } from "react"
import { actionCreators } from "../../store/reducers/goodsListReducer/actionCreators"

export const GoodsList: React.FC = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.goodsList)
    const currentItem = state.itemList.filter(v => v.id === state.currentItemId)[0]

    useEffect(() => {
        dispatch(actionCreators.setItemList())
    }, [])

    const clickToNavItemHandler = (id: number) => () => dispatch(actionCreators.setCurrentItemId(id))
    const clickToArrowTopHandler = () => {
        const currentItemId = state.currentItemId
        if (currentItemId < state.itemList.length) {
            return dispatch(actionCreators.setCurrentItemId(currentItemId + 1))
        }
        return dispatch(actionCreators.setCurrentItemId(1))
    }
    const clickToArrowBottomHandler = () => {
        const currentItemId = state.currentItemId
        if (currentItemId > 1) {
            return dispatch(actionCreators.setCurrentItemId(currentItemId - 1))
        }
        return dispatch(actionCreators.setCurrentItemId(state.itemList.length))
    }
    return (
        <section>
            <div className="container">
                <div className={classes.goodList}>
                    <div className={classes.goodListNav}>
                        <img onClick={clickToArrowTopHandler} className={classes.goodListNavArrow} src={goodsListArrowTop} alt="" />

                        {
                            state.itemList.map(v => (
                                v.id === state.currentItemId ?
                                    <p
                                        onClick={clickToNavItemHandler(v.id)}
                                        key={v.id}
                                        className={classes.goodListNavItem + " " + classes.active}>
                                        {v.itemTitle}
                                    </p> :
                                    <p
                                        onClick={clickToNavItemHandler(v.id)}
                                        key={v.id}
                                        className={classes.goodListNavItem}>
                                        {v.itemTitle}
                                    </p>
                            )).reverse()
                        }
                        <img onClick={clickToArrowBottomHandler} className={classes.goodListNavArrow} src={goodsListArrowDown} alt="" />
                    </div>
                    <GoodsListItem item={currentItem} />
                </div>

            </div>
        </section>
    )
}