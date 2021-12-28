import { Provider } from "react-redux"
import { Advantages } from "./components/Advantages/Advantages"
import { Articles } from "./components/Articles/Articles"
import { Footer } from "./components/Footer/Footer"
import { GoodsList } from "./components/GoodsList/GoodsList"
import { Header } from "./components/Header/Header"
import { Quote } from "./components/Quote/Quote"
import { useSelector } from "./store/store"
import "./styles/app.scss"

export const App: React.FC = () => {
    const { articleList } = useSelector(state => state)
    return (
        <>
            <Header />
            <GoodsList />
            <Advantages />
            <Articles articleItems={articleList.articleList} />
            <Quote />
            <Footer />
        </>
    )
}