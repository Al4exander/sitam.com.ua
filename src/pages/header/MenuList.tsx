import React from 'react';
import { Link } from "react-router-dom";
import {Children, HeaderLinks} from "./Interfaces";

export function MenuList(props: {links: HeaderLinks[], onClick: any}) {
  return (
      <div className="site-card-wrapper row">
              {props.links.map((link: HeaderLinks, index, array) => {
                  return <>
                      <div className="card col-lg-3 col-md-6 col-sm-12 card-style" key={index}>
                          <div className="card-body">
                              <h6 className="card-title card-header-text-style">{link.Type}</h6>
                              <div className="card-text row">
                                  {link.children.map((child: Children, childIndex: number) => {
                                      return <Link onClick={props.onClick} className='col-12 card-text-style' to={child.link} key={childIndex}>{child.title}</Link>
                                  })}
                              </div>
                          </div>
                      </div>
                  </>
              })}
      </div>
  );
}
