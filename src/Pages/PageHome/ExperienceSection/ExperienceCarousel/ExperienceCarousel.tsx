import { CaretLeft, CaretRight } from "phosphor-react";
import { createContext, useContext, useRef, useState } from "react";
import { classNameModule } from "../../../../utils/classNameModule/classNameModule";
import styles from "./ExperienceCarousel.module.scss";
const className = classNameModule(styles);

const steps = [
  {
    color: "#5d6bbb",
    width: "60%",
    mobileImage: "/images/screenshots/1-mobile.png",
    desktopImage: "/images/screenshots/1-desktop.png",
    description:
      "Page d'accueil de destination, entièrement personnalisable via un dashboard",
  },
  {
    color: "#d35731",
    width: "40%",
    mobileImage: "/images/screenshots/2-mobile.png",
    desktopImage: "/images/screenshots/2-desktop.png",
    description:
      "Système de Story, créés par la destination et ses influenceurs",
  },
  {
    color: "#8ed899",
    width: "60%",
    mobileImage: "/images/screenshots/3-mobile.png",
    desktopImage: "/images/screenshots/3-desktop.png",
    description:
      "Moteur de recherche par catégories, sous catégories et filtres",
  },
  {
    color: "#e1963a",
    width: "50%",
    mobileImage: "/images/screenshots/4-mobile.png",
    desktopImage: "/images/screenshots/4-desktop.png",
    description: "Recherche par carte d'activités",
  },
];

type TFullscreenImageContext = {
  open: (image: HTMLImageElement) => void;
  close: () => void;
};
const fullscreenImageContext = createContext<TFullscreenImageContext>({
  open: () => {
    //
  },
  close: () => {
    //
  },
});

const ExperienceCarousel = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [fullscreenImageElement, setFullscreenImageElement] =
    useState<HTMLImageElement | null>(null);

  const currentStep = steps[currentColorIndex];

  return (
    <fullscreenImageContext.Provider
      value={{
        open: (imageElement) => {
          setFullscreenImageElement(imageElement);
        },
        close: () => {
          setFullscreenImageElement(null);
        },
      }}
    >
      {fullscreenImageElement && (
        <FullscreenImage imageElement={fullscreenImageElement} />
      )}
      <div {...className("ExperienceCarousel")}>
        {" "}
        <button
          {...className("previous-button")}
          onClick={() => {
            setCurrentColorIndex(
              (currentColorIndex) => (currentColorIndex + 1) % steps.length
            );
          }}
        >
          <CaretLeft />
        </button>
        <button
          {...className("next-button")}
          onClick={() => {
            setCurrentColorIndex(
              (currentColorIndex) => (currentColorIndex + 1) % steps.length
            );
          }}
        >
          <CaretRight />
        </button>
        <div {...className("devices")}>
          <Mobile image={currentStep.mobileImage} />
          <Desktop image={currentStep.desktopImage} />
        </div>
        <div {...className("description")}>
          <div>{currentStep.description}</div>
        </div>
        <div
          {...className("background-block")}
          style={{
            background: currentStep.color,
            width: currentStep.width,
          }}
        ></div>
      </div>
    </fullscreenImageContext.Provider>
  );
};

export default ExperienceCarousel;

const Desktop: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div {...className("Desktop")}>
      <div {...className("screen")}>
        <CarouselImage image={image} />
      </div>
    </div>
  );
};

const Mobile: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div {...className("Mobile")}>
      <div {...className("camera")} />
      <div {...className("screen")}>
        <CarouselImage image={image} />
      </div>
    </div>
  );
};

const CarouselImage: React.FC<{ image: string }> = ({ image }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const fullscreenImage = useContext(fullscreenImageContext);

  return (
    <div
      {...className("CarouselImage")}
      role="button"
      onClick={() => {
        if (!imageRef.current) return;

        fullscreenImage.open(imageRef.current);
      }}
    >
      <img src={image} ref={imageRef} />
    </div>
  );
};

const FullscreenImage: React.FC<{ imageElement: HTMLImageElement }> = ({
  imageElement,
}) => {
  const fullscreenImage = useContext(fullscreenImageContext);
  const [position, setPosition] = useState({
    w: 0,
    h: 0,
    x: 0,
    y: 0,
    src: "",
  });

  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <div
      {...className("FullscreenImage")}
      role="button"
      onClick={() => {
        fullscreenImage.close();
      }}
    >
      <img
        src={imageElement.src}
        alt=""
        ref={imageRef}
        style={{
          opacity: 0,
        }}
      />
    </div>
  );
};

// Mobile : 440x856
// Desktop : 1320x780
