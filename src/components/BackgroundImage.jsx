import styles from "./BackgroundImage.module.css";
import DaytimeDesktopBG from "../assets/images/desktop/bg-image-daytime.jpg";
import DaytimeTabletBG from "../assets/images/tablet/bg-image-daytime.jpg";
import DaytimeMobileBG from "../assets/images/mobile/bg-image-daytime.jpg";
import NighttimeDesktopBG from "../assets/images/desktop/bg-image-nighttime.jpg";
import NighttimeTabletBG from "../assets/images/tablet/bg-image-nighttime.jpg";
import NighttimeMobileBG from "../assets/images/mobile/bg-image-nighttime.jpg";

export default function BackgroundImage({ timeHour }) {
  return (
    <>
      <div className={styles.overlay}></div>
      {timeHour < 17 ? (
        <picture>
          <source media="(min-width:1024px)" srcSet={DaytimeDesktopBG} />
          <source media="(min-width:768px)" srcSet={DaytimeTabletBG} />
          <img
            src={DaytimeMobileBG}
            alt=""
            className={styles.backgroundImage}
            aria-hidden="true"
          />
        </picture>
      ) : (
        <picture>
          <source media="(min-width:1024px)" srcSet={NighttimeDesktopBG} />
          <source media="(min-width:768px)" srcSet={NighttimeTabletBG} />
          <img
            src={NighttimeMobileBG}
            alt=""
            className={styles.backgroundImage}
            aria-hidden="true"
          />
        </picture>
      )}
    </>
  );
}
