export default function ServerIcon(props){
    const {imageSrc, href } = props
    return(
        <div className="server-icon">
                    <a href={href}>
                        <img src={imageSrc} alt="logo" width="50px" />
                    </a>
                </div>
    )
}