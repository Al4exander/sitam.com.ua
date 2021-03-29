import React from 'react';

export const AskQuestionsInput: React.FC<IAskQuestionsInput> = ({value, onChange, placeholder, className}) => {
    return (
      <div className={className}>
          <input value={value}
                 className='input-field'
                 placeholder={placeholder}
                 onChange={onChange}
          />
      </div>
  );
};

interface IAskQuestionsInput {
    className?: string;
    placeholder: string;
    onChange: (e: any) => void;
    value: string;
}