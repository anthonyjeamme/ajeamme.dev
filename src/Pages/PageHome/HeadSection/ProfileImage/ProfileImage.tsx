import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "./ProfileImage.module.scss";

const ProfileImage = () => {
  const [size, setSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => {
      setSize(getSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getSize() {
    return window.innerWidth < 500
      ? 140
      : window.innerWidth < 768
      ? 180
      : window.innerWidth < 1000
      ? 240
      : 300;
  }

  return (
    <div className={styles["ProfileImage"]}>
      <Image
        src="/images/profile-picture.jpg"
        alt="Anthony Jeamme"
        height={size}
        width={size}
      />
    </div>
  );
};

export default ProfileImage;
