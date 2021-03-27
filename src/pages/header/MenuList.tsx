import React from 'react';
import { Link } from "react-router-dom";
import {Children, HeaderLinks} from "./Interfaces";

export const MenuList: React.FC<IMenuList> = ({links, onClick}) => {
  return (
      <div className="site-card-wrapper row">
              {links.map((link: HeaderLinks, index) => {
                  return <div className="card col-lg-3 col-md-6 col-sm-12 card-style" key={index}>
                          <div className="card-body">
                              <h6 className="card-title card-header-text-style">{link.Type}</h6>
                              <div className="card-text row">
                                  {link.children.map((child: Children, childIndex: number) => {
                                      return <Link onClick={onClick} className='col-12 card-text-style' to={child.link} key={childIndex}>{child.title}</Link>
                                  })}
                              </div>
                          </div>
                      </div>
              })}
      </div>
  );
};

interface IMenuList {
    links: HeaderLinks[];
    onClick: () => void;
}
