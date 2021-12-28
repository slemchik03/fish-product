import { useSelector } from "../../store/store"
import { HeaderBottom } from "./HeaderBottom/HeaderBottom"
import { HeaderTop } from "./HeaderTop/HeaderTop"


export const Header: React.FC = () => {
    const state = useSelector(state => state)


    return (
        <header>
            <HeaderTop isOpen={state.headerTop.mobileMenuIsOpened} />
            <HeaderBottom />
        </header>
    )
}