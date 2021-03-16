import React from 'react';
import './styles/TextBoxWithShadow.css';
import ReactMarkdown from 'react-markdown';

export function TextBoxWithShadow(props: any) {
  return (
      <div
          className={`text-box-shadowed ${props.className}`}
      >
          <div className='two-images-text-box-text row'>
              <ReactMarkdown className='col-12' children={props.text}/>
          </div>
      </div>
  );
}

