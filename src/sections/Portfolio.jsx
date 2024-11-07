import React, { useEffect, useState } from "react";
import data from "../portfolioData";
import { PortfolioCarousel } from "./PortfolioCarousel";

import LatestImage from "../assets/portfolio/latest/latest.jpg";
import WorksImage from "../assets/portfolio/works/works.jpg";
import PhotosImage from "../assets/portfolio/photos/photos.jpg";

export default function Portfolio({ activestate }) {
  // json file data
  const portfolioData = data.data;
  // subsection title
  const [subtitle, setSubtitle] = useState("");
  // is frontpage active?
  const [isOnFrontPage, setIsOnFrontPage] = useState(true);
  // index of active subsection
  const [activeSubSection, setActiveSubSection] = useState(0);
  // content of subsection
  const [slideData, setSlideData] = useState([]);
  // image url for lightbox
  const [lightboxImage, setLightboxImage] = useState("");

  // setting up the active subsection on click
  const handleActiveSlide = (index) => {
    //console.log("selected index", index);
    setActiveSubSection(index);
    setSlideData(portfolioData[index]);
    setSubtitle(portfolioData[index].title);
    setIsOnFrontPage(false);
  };

  // reset all and go back to the index page
  const getBackTofrontPage = () => {
    //console.log('back');
    setIsOnFrontPage(true);
    setActiveSubSection(0);
    setSubtitle("");
  };

  // if portfolio page gets active we reset all and go to index
  useEffect(() => {
    activestate === "active" ? getBackTofrontPage() : null;
  }, [activestate]);

  return (
    <div className="page page-portfolio container">
      {isOnFrontPage && <h2 className="page-title pl-2 md:pl-16">portfolio</h2>}

      {!isOnFrontPage && (
        <h2 className="page-title pl-2 md:pl-16 lg:pl-16">
          <span className="cursor-pointer link-back" onClick={() => getBackTofrontPage()}>
            portfolio
          </span>{" "}
          / {subtitle}
        </h2>
      )}

      <div className={`page-content${!isOnFrontPage ? " page-aside" : ""}`}>
        <div className="portfolio-main-section pl-2 pr-2 md:pl-12 md:pr-16 lg:pl-24 lg:pr-0">
          <div className="portfolio-links gap-8 lg:gap-0">
            <a href="#latest" className="pf-item" onClick={() => handleActiveSlide(0)}>
              <img className="" src={LatestImage} alt="" />
              <span className="blur-in">{portfolioData[0].title}</span>
              <p className="hidden lg:block">{portfolioData[0].description}</p>
            </a>

            <a href="#works" className="pf-item" onClick={() => handleActiveSlide(1)}>
              <p className="hidden lg:block">{portfolioData[1].description}</p>
              <span className="blur-in">{portfolioData[1].title}</span>
              <img className="" src={WorksImage} alt="" />
            </a>

            <a href="#photos" className="pf-item" onClick={() => handleActiveSlide(2)}>
              <img className="" src={PhotosImage} alt="" />
              <span className="blur-in">{portfolioData[2].title}</span>
              <p className="hidden lg:block">{portfolioData[2].description}</p>
            </a>
          </div>
        </div>

        <div
          className={`portfolio-sub-section relative pl-0 pr-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-0 lg:pb-16 section-${slideData.title}`}>
          {/* key: nifty trick to remount the component when props change */}
          <PortfolioCarousel data={slideData} key={slideData.title} setLightboxImage={setLightboxImage} />
        </div>
      </div>

      <div
        onClick={() => setLightboxImage("")}
        className={`portfolio-lightbox ${lightboxImage !== "" ? "visible" : ""}`}>
        <img src={lightboxImage} alt="lightbox" className="portfolio-lightbox-image" />
      </div>
    </div>
  );
}
