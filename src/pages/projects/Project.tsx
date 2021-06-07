import React from 'react';
import '../projects/styles/Projects.css';
import cx from 'classnames';

interface Props {
    src: any;
    text: string;
    onClick: () => void;
    selected?: boolean
}

export const Project: React.FC<Props> = ({src, text, onClick, selected}) => {

    return (
        <div className={cx('col-lg-3 col-sm-6 align-center-full project-container', {'project-selected': selected})} onClick={onClick}>
            <img src={src} className='project-img'/>
            <span className='project-text'>
              {text}
          </span>
        </div>
    );
};
