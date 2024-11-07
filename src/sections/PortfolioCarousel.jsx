import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import getImageUrl from "../helpers";

const carouselOptions = {
  className: styles.carousel,
  showArrows: false,
  showStatus: false,
  showThumbs: true,
  infiniteLoop: true,
  showIndicators: false,
  swipeable: true,
  dynamicHeight: false,
  emulateTouch: false,
  thumbWidth: "auto",
  useKeyboardArrows: true,
  autoFocus: true,
  selectedItem: 0,
  transitionTime: 300, // slide speed
};

const PortfolioCarouselItem = ({ data, setLightboxImage }) => {
  return (
    <div className="portfolio-item">
      <div className="pfw-image-container" onClick={() => setLightboxImage(getImageUrl(data.image))}>
        <img className="pfw-image" src={getImageUrl(data.image)} alt={data.title} loading="lazy" />
        <div className="pfw-text-container">
          <div className="pfw-text">
            <h2 className="title title-2 fade-in-children">{data.title}</h2>
            <p className="paragraph">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * https://www.npmjs.com/package/react-responsive-carousel
 */
export const PortfolioCarousel = ({ data, setLightboxImage }) => {
  /* we have custom markup in the slide so we need to create our own thumbnail list */
  const createThumbs = (thumbs) => {
    let res = [];
    thumbs.forEach((item, idx) => {
      res.push(<img key={idx} src={getImageUrl("thumbs/" + data.content[idx].image)} alt={item.alt} />);
    });
    return res;
  };

  return (
    <Carousel {...carouselOptions} renderThumbs={createThumbs}>
      {data.content &&
        data.content.length > 0 &&
        data.content.map((slide, idx) => (
          <PortfolioCarouselItem key={idx} data={slide} setLightboxImage={setLightboxImage} />
        ))}
    </Carousel>
  );
};
