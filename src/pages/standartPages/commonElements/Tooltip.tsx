import React from 'react';
import './styles/Tooltip.css';

export const TooltipCover: React.FC<ITooltip> = ({ children, className}) => {
    return (
      <div className={`tooltip ${className}`}>
          {children}
      </div>
  );
};

interface ITooltip {
    className?: string;
}