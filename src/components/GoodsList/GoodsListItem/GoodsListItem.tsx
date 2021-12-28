import classes from "./GoodsListItem.module.scss"
import { Item } from "../../../store/reducers/goodsListReducer/types"

interface Props {
    item: Item
}

export const GoodsListItem: React.FC<Props> = ({ item }) => {
    
    if (item) {
        return (
            <div className={classes.goodsItem}>
                <div className={classes.goodsItemInfo}>
                    <img className={classes.goodsItemInfoImg} src={item.itemInfo.photoUrl} alt="GoogsPhoto" />
                    <div className={classes.goodsItemInfoText}>
                        {
                            item.itemInfo.facts.map((v, index) => {
                                return (
                                    <div key={index} className={classes.goodsItemInfoTextBlock}>
                                        <p className={classes.goodsItemInfoTextBlockTitle}>{v.title}</p>
                                        <p className={classes.goodsItemInfoTextBlockDesc}>{v.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={classes.goodsItemMainInfo}>
                    <p className={classes.goodsItemMainInfoTitle}>{item.itemMainInfo.title}</p>
                    <p className={classes.goodsItemMainInfoText}>{item.itemMainInfo.text}</p>
                    <button className={classes.goodsItemMainInfoOrderButton}>Order now!</button>
                </div>
            </div>
        )
    }
    return <p>Opss... system didnt find this fish! Try later.</p>

}