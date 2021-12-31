import classes from "./Articles.module.scss"
import articleItemImg1 from "../../assets/articlesItemImg1.png"
import articleItemImg2 from "../../assets/articlesItemImg2.png"
import articleItemImg3 from "../../assets/articlesItemImg3.png"
import { useEffect, useState } from "react"
import { ArticleItem } from "../../store/reducers/articlesReducer/types"
import { actionCreators } from "../../store/reducers/articlesReducer/actionCreators"
import { useDispatch } from "react-redux"
import React from "react"

interface Props {
    articleItems: ArticleItem[];
}


interface ItemStatus {
    status: boolean;
    element: React.RefObject<HTMLDivElement> | null;
}

export const Articles: React.FC<Props> = ({ articleItems }) => {
    const [itemsStatus, setItemsStatus] = useState<ItemStatus[]>([])
    const dispatch = useDispatch()

    window.onscroll = e => {
        const scrolledY = window.scrollY

        const updatedItems = itemsStatus.map((value) => {
            const current = value.element?.current
            if (!value.status && current && current.offsetTop < scrolledY + 290) {
                return { element: value.element, status: true }
            }
            return value
        })
        // There we check changed or not updatedItems
        const conditionArray = updatedItems.filter((value, index) => value.status !== itemsStatus[index].status)
        if (conditionArray.length) setItemsStatus(updatedItems)
    }

    useEffect(() => {
        dispatch(actionCreators.setItemList())
    }, [dispatch])

    useEffect(() => {
        setItemsStatus(articleItems.map((v, i) => ({ status: false, element: React.createRef() })))
    }, [articleItems])
    // Value in this variable influence in the className "articleListItem"
    let i = 0
    return (
        <article className={classes.article}>
            <div className="container">
                <div className={classes.articleList}>
                    {
                        articleItems.map((item, index) => {
                            ++i

                            const currentItemStatus = itemsStatus[index]
                            const positionClassName = i % 2 === 0 ?
                                classes.articleListItem + " " + classes.reverse :
                                classes.articleListItem

                            const currentClassName = currentItemStatus?.status ?
                                positionClassName + " " + classes.visible :
                                positionClassName

                            return (
                                <div ref={currentItemStatus?.element} key={item.id}
                                    className={
                                        currentClassName
                                    }

                                >
                                    <div className={classes.articleListItemDescribe}>
                                        {
                                            item.info.map(infoItem => {

                                                const titleElement = (
                                                    <p className={classes.articleListItemDescribeTitle}>
                                                        {infoItem.title}
                                                    </p>
                                                )
                                                const textElement = infoItem.text.map((textItem, index) => (
                                                    <p className={classes.articleListItemDescribeText}>
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