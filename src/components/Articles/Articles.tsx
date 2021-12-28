import classes from "./Articles.module.scss"
import articleItemImg1 from "../../assets/articlesItemImg1.png"
import articleItemImg2 from "../../assets/articlesItemImg2.png"
import articleItemImg3 from "../../assets/articlesItemImg3.png"

export const Articles: React.FC = () => {
    /*
        Using for change position photo and describe in "articleListItem"
    */
    let i = 1
    return (
        <article className={classes.article}>
            <div className="container">
                <div className={classes.articleList}>
                    <div className={classes.articleListItem}>
                        <div className={classes.articleListItemDescribe}>
                            <p className={classes.articleListItemDescribeTitle}>
                                Экстремальные условия для человека. Идеальные условия для рыб.
                            </p>
                            <p className={classes.articleListItemDescribeText}>
                                Гольфстрим, несущий теплую воду из Мексиканского залива через
                                Атлантический океан, течет на север вдоль норвежского побережья в
                                прозрачную, чистую ледяную воду Арктики. Это создает идеальные условия для
                                невероятно богатой морской экосистемы
                            </p>
                            <p className={classes.articleListItemDescribeText}>
                                Мелкая рыба, большая рыба, моллюски и другие формы жизни. Некоторые из них - местное население,
                                другие - мигрируют или проеплывают через земной шар. Некоторые предпочитают холодное открытое море, другие
                                живут в тихих глубоких фьордах, защищенных стеной островов
                                и шхер. Каждый из них играет свою роль в сложном и увлекательном морском жизненном цикле.
                            </p>
                            <p className={classes.articleListItemDescribeText}>
                                Разнообразие морепродуктов из этой среды уникально. Это одна из основных причин,
                                почему Норвегия является вторым по величине экспортером морепродуктов в мире.
                                И есть также причина, по которой повара и знатоки всего мира выбирают морепродукты из Норвегии:
                                вам будет сложно найти такой же выбор и качество где-либо еще.
                            </p>
                        </div>
                        <img className={classes.articleListItemImg} src={articleItemImg1} alt="" />
                    </div>
                    <div className={classes.articleListItem}>
                        <img className={classes.articleListItemImg} src={articleItemImg2} alt="" />
                        <div className={classes.articleListItemDescribe}>
                            <p className={classes.articleListItemDescribeTitle}>
                                Экстремальные условия для человека. Идеальные условия для рыб.
                            </p>
                            <p className={classes.articleListItemDescribeText}>
                                Гольфстрим, несущий теплую воду из Мексиканского залива через
                                Атлантический океан, течет на север вдоль норвежского побережья в
                                прозрачную, чистую ледяную воду Арктики. Это создает идеальные условия для
                                невероятно богатой морской экосистемы
                            </p>
                        </div>
                    </div>
                    <div className={classes.articleListItem}>
                        <div className={classes.articleListItemDescribe}>
                            <p className={classes.articleListItemDescribeTitle}>
                                Экстремальные условия для человека. Идеальные условия для рыб.
                            </p>
                            <p className={classes.articleListItemDescribeText}>
                                Гольфстрим, несущий теплую воду из Мексиканского залива через
                                Атлантический океан, течет на север вдоль норвежского побережья в
                                прозрачную, чистую ледяную воду Арктики. Это создает идеальные условия для
                                невероятно богатой морской экосистемы
                            </p>
                            <p className={classes.articleListItemDescribeTitle}>
                                Экстремальные условия для человека. Идеальные условия для рыб.
                            </p>
                            <p className={classes.articleListItemDescribeText}>
                                Мелкая рыба, большая рыба, моллюски и другие формы жизни. Некоторые из них - местное население,
                                другие - мигрируют или проеплывают через земной шар. Некоторые предпочитают холодное открытое море, другие
                                живут в тихих глубоких фьордах, защищенных стеной островов
                                и шхер. Каждый из них играет свою роль в сложном и увлекательном морском жизненном цикле.
                            </p>
                            <p className={classes.articleListItemDescribeText}>
                                Разнообразие морепродуктов из этой среды уникально. Это одна из основных причин,
                                почему Норвегия является вторым по величине экспортером морепродуктов в мире.
                                И есть также причина, по которой повара и знатоки всего мира выбирают морепродукты из Норвегии:
                                вам будет сложно найти такой же выбор и качество где-либо еще.
                            </p>
                        </div>
                        <img className={classes.articleListItemImg} src={articleItemImg3} alt="" />
                    </div>
                </div>
            </div>
        </article>
    )
}