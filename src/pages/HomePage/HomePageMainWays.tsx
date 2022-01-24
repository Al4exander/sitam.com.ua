import React from 'react';
import '../HomePage/styles/WorkWIth.css';
import {homePageMainWaysData} from "../../constdata/HomePageMainWaysData";
import {Link} from "react-router-dom";
import ReactDOM from "react-dom";

export function HomePageMainWays() {
    const scrollToTop = () => {
        const contactsRef = ReactDOM.findDOMNode(document.getElementById('text-start'));
        (contactsRef as Element)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
      <div>
          <p className='container justify-content-center how-do-we-work-text'>Наши основные направления</p>
          <div className='container row mx-auto box-shadow'>
              <div className='col-12 row d-flex justify-content-center'>
                  {homePageMainWaysData.map((data, index) => {
                      return <div className='d-flex justify-content-center' key={index}>
                                  <Link to={data.link}
                                        className={'col-lg-2 col-sm-6 p-3 ml-4 ml-lg-0 ml-md-0 align-center-full project-container'}
                                        title={data.title}
                                        onClick={scrollToTop}
                                  >
                                      <img src={data.image}
                                           className='project-img'
                                           alt={data.title}
                                           loading='lazy'/>
                                      <span className='project-text'>
                                        {data.title}
                                      </span>
                                  </Link>
                          </div>
                  })}
              </div>
          </div>
      </div>
  );
}
