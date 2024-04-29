import React, {useContext, useRef, useState} from 'react';
import '../HomePage/styles/WorkWIth.css';
import {SizeContext} from "../../lib/sizeContext";
import ImageGallery, {ReactImageGalleryItem} from 'react-image-gallery';
import {Project} from "./Project";
import {rotor} from "../../images/gallery/rotor";
import {steeplejack} from "../../images/gallery/steeplejack";
import {steeplejack as steeplejackUA} from "../../images/gallery/steeplejack/indexUA";
import "react-image-gallery/styles/css/image-gallery.css";
import cx from 'classnames';
import {LanguageContext} from "../../lib/languageContext";

export function Projects() {
  let [selectedProject, setSelectedProject] = useState<number | undefined>();
  let [smallSize] = useContext(SizeContext);
  let carouselRef = useRef<any>();
  const [language] = useContext(LanguageContext);

  const title = language === 'ua' ? 'Наші нещодавні проекти' : 'Наши недавние проекты';
  const projects = language === 'ua' ? [rotor, steeplejackUA] : [rotor, steeplejack];

  const mapImages = (): ReactImageGalleryItem[] => {
      if(selectedProject !== undefined) {
          return projects[selectedProject].images.map((image: any) => {
              return {
                  original: image,
                  thumbnail: image,
              }
          })
      } else return [];
  };

  const onProjectSelect = (index: number) => {
      setTimeout(() => {
          if(carouselRef && carouselRef.current) {
              carouselRef.current.fullScreen();
          }
      }, 10);
      setSelectedProject(index);
  }

  const onScreenClose = (state: boolean) => {
      setSelectedProject((prev) => !state ? undefined : prev);
  }

  return (
      <div>
          <div>
              <p className='container justify-content-center how-do-we-work-text'>{title}</p>
              <div className='row mx-auto d-flex justify-content-center'>
                  {projects.map((project, index) => {
                      return <Project src={project.thumb}
                                      text={project.text}
                                      onClick={() => onProjectSelect(index)}
                                      selected={selectedProject === index}
                                      key={index}
                      />
                  })}
              </div>
              {selectedProject !== undefined && <ImageGallery items={mapImages()}
                                                              ref={carouselRef}
                                                              additionalClass={cx('container  mt-3 gallery', {'p-5': !smallSize, 'p-2': smallSize})}
                                                              thumbnailPosition={smallSize ? 'bottom' : 'left'}
                                                              useBrowserFullscreen={true}
                                                              onScreenChange={onScreenClose}
                                                              lazyLoad={true}
              />}
          </div>
      </div>
  );
}
