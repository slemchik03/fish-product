import classes from "./Articles.module.scss"
import articleItemImg1 from "../../assets/articlesItemImg1.png"
import articleItemImg2 from "../../assets/articlesItemImg2.png"
import articleItemImg3 from "../../assets/articlesItemImg3.png"
import { useEffect, useState } from "react"
import { ArticleItem } from "../../store/reducers/articlesReducer/types"
import { actionCreators } from "../../store/reducers/articlesReducer/actionCreators"
import { useDispatch } from "react-redux"





interface Props {
    articleItems: ArticleItem[];
}

export const Articles: React.FC<Props> = ({ articleItems }) => {
    const [scrollTop, setScrollTopValue] = useState(0)
    const dispatch = useDispatch()

    const scrollHandler = () => {
        const scrollY = window.scrollY
        setScrollTopValue(scrollY)
    }

    window.onscroll = scrollHandler

    useEffect(() => {
        dispatch(actionCreators.setItemList())
    }, [])

    let i = 0
    return (
        <article className={classes.article}>
            <div className="container">
                <div className={classes.articleList}>
                    {
                        articleItems.map(item => {
                            ++i
                            return (
                                <div key={item.id} className={i % 2 === 0 ?
                                    classes.articleListItem + " " + classes.reverse :
                                    classes.articleListItem
                                }>
                                    <div className={classes.articleListItemDescribe}>
                                        {
                                            item.info.map(infoItem => {
                                                const titleElement = (
                                                    <p className={classes.articleListItemDescribeTitle}>
                                                        {infoItem.title}
                                                    </p>
                                                )
                                                const textElement = infoItem.text.map((textItem, index) => (
                                                    <p key={index} className={classes.articleListItemDescribeText}>
                                                        {textItem}
                                                    </p>
                                                ))
                                                return [titleElement, ...textElement]
                                            })
                                        }
                                    </div>
                                    <img className={classes.articleListItemImg} src={articleItemImg1} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </article >
    )
}