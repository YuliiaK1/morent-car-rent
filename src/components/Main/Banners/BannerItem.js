import style from "./BannerItem.module.css"

export default function BannerItem({title, subtitle, image, bgColor}){
    return (
        <div className={`${style.bannerItem} ${style[bgColor]}`}>
            <div className={style.content}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
            <img src={image} alt="Example of car for rent" />
        </div>
    )
}