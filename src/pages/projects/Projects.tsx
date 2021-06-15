import React, {useContext, useState} from 'react';
import '../HomePage/styles/WorkWIth.css';
import {SizeContext} from "../../lib/sizeContext";
import ImageGallery from 'react-image-gallery';
import {Project} from "./Project";
import {rotor} from "../../images/gallery/rotor";
import {steeplejack} from "../../images/gallery/steeplejack";
import "react-image-gallery/styles/css/image-gallery.css";
import cx from 'classnames';

export function Projects() {
  const projects = [rotor, steeplejack];
  let [selectedProject, setSelectedProject] = useState<number | undefined>();
  let [smallSize] = useContext(SizeContext);

  const mapImages = () => {
      if(selectedProject !== undefined) {
          return projects[selectedProject].images.map((image: any) => {
              return {
                  original: image,
                  thumbnail: image
              }
          })
      } else return [];
  };

  return (
      <div>
          <div>
              <p className='container justify-content-center how-do-we-work-text'>Наши недавние проекты</p>
              <div className='row mx-auto d-flex justify-content-center'>
                  {projects.map((project, index) => {
                      return <Project src={project.thumb}
                                      text={project.text}
                                      onClick={() => setSelectedProject(index)}
                                      selected={selectedProject === index}
                                      key={index}
                      />
                  })}
              </div>
              {selectedProject !== undefined && <ImageGallery items={mapImages()}
                                                              additionalClass={cx('container mt-3 gallery', {'p-5': !smallSize, 'p-2': smallSize})}
                                                              thumbnailPosition={smallSize ? 'bottom' : 'left'}
              />}
          </div>
      </div>
  );
}
