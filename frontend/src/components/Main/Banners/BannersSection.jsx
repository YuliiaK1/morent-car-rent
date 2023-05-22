import carImageLeft from "../../../assets/banner-left-image.png"
import carImageRight from "../../../assets/banner-right-image.png"
import BannerItem from "./BannerItem";
import style from "./BannerSection.module.css"

function Banners() {
  return (
    <div className={style.banners}>
      <BannerItem 
          title="The Best Platform for Car Rental"
          subtitle="Ease of doing a car rental safely and reliably. Of course at a low price."
          image={carImageLeft}
          bgColor="leftBanner"/>
      <BannerItem
          title="Easy way to rent a car at a low price"
          subtitle="Providing cheap car rental services and safe and comfortable facilities."
          image={carImageRight}
          bgColor="rightBanner"/>
    </div>
  );
}

export default Banners;
