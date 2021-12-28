import classes from "./Footer.module.scss"
import footerTopImg from "../../assets/footerTopImg.png"
import instagramImg from "../../assets/instagram.svg"
import whatsAppImg from "../../assets/whatsapp.svg"
import telegramImg from "../../assets/telegram.svg"
import facebookImg from "../../assets/facebook.svg"
import footerLogo from "../../assets/header-top-logo.png"

export const Footer: React.FC = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerTop}>
                <img className={classes.footerTopImg} src={footerTopImg} alt="" />
                <div className={classes.footerTopDescribe}>
                    <p className={classes.footerTopDescribeTitle}>
                        В Норвегии холодно.
                        Очень холодно.
                    </p>
                    <p className={classes.footerTopDescribeText}>
                        Связаться с нами
                        mail@seafood.no
                    </p>
                    <p className={classes.footerTopDescribeText}>
                        Телефон: +47 77 60 33 33
                    </p>
                    <p className={classes.footerTopDescribeText}>
                        Норвежский совет по морепродуктам
                        Stortorget 1
                        PO Box 6176
                        N-9291 Tromsø
                    </p>
                </div>
            </div>
            <div className="container">
                <div className={classes.footerBottom}>
                    <div className={classes.footerBottomSocialMedia}>
                        <a className={classes.footerBottomSocialMediaLink} href="/">
                            <img src={instagramImg} alt="" />
                        </a>
                        <a className={classes.footerBottomSocialMediaLink} href="/">
                            <img src={whatsAppImg} alt="" />
                        </a>
                        <a className={classes.footerBottomSocialMediaLink} href="/">
                            <img src={telegramImg} alt="" />
                        </a>
                        <a className={classes.footerBottomSocialMediaLink} href="/">
                            <img src={facebookImg} alt="" />
                        </a>
                    </div>
                    <div className={classes.footerBottomNav}>
                        <a className={classes.footerBottomNavLink} href="/">Home!</a>
                        <a className={classes.footerBottomNavLink} href="/">My basket!</a>
                        <a className={classes.footerBottomNavLink} href="/">Anything !</a>
                        <a className={classes.footerBottomNavLink} href="/">Login text!</a>
                    </div>
                    <img className={classes.footerBottomImg} src={footerLogo} alt="" />
                </div>
            </div>

        </footer>
    )
}