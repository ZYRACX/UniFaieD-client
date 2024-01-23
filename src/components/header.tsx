import FcordLogo from "../images/logo/Fcod.png"

export default function Header() {
    return(
        <div className="header">
        <div className="logo-icon">
            <a href="/">
                <img src={FcordLogo} alt="logo" width="50px" />
            </a>
        </div>
    </div>
    )
}