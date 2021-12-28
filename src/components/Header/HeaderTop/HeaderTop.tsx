import headerTopLogo from "../../../assets/header-top-logo.png"
import headerTopIcon from "../../../assets/header-top-icon.png"
import classes from "./HeaderTop.module.scss"
import { useDispatch } from "react-redux"
import { actionCreators } from "../../../store/reducers/headerReducer/actionCreators"

interface Props {
    isOpen: boolean
}

export const HeaderTop: React.FC<Props> = ({ isOpen }) => {
    const dispatch = useDispatch()

    const mobileMenuClickHandler = () => {
        dispatch(actionCreators.setMobileMenuStatus(!isOpen))
    }
    // Set visible or unvisible class name
    const headerMobileIsOpenedClass = isOpen ?
        classes.headerTopMobile + " " + classes.active :
        classes.headerTopMobile

    return (
        <div className={classes.headerTop}>
            <div className="container">
                <div className={classes.headerTopWrapper}>
                    <div className={classes.headerTopWrapperLogo}>
                        <img src={headerTopLogo} alt="" />
                    </div>

                    <div className={classes.headerTopWrapperNav}>
                        <a href="#">Home</a>
                        <a href="#">About us</a>
                        <a href="#">Why we?</a>
                        <a href="#">Something</a>
                        <a href="#">Why we?</a>
                        <a href="#">Something</a>
                    </div>
                    <img src={headerTopIcon} alt="" className={classes.headerTopWrapperIcon} />
                </div>
                <div className={headerMobileIsOpenedClass}>
                    <div className={classes.headerTopWrapperLogo}>
                        <img src={headerTopLogo} alt="" />
                    </div>
                    <div className={classes.headerTopMobileNav} onClick={mobileMenuClickHandler}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={classes.headerTopMobileContent}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Some</a></li>
                        <li><a href="#">Other</a></li>
                    </div>
                </div>
            </div>
        </div>
    )
}