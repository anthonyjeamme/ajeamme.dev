import Image from "next/image";
import styles from "./Gallery.module.scss";

export const Gallery = () => {
  return (
    <div className={styles["Gallery"]}>
      <Image
        quality={100}
        src="/images/coq-trotteur/Story.jpg"
        alt=""
        width={1100}
        height={825}
      />
    </div>
  );
};
