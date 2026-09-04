import React from 'react';

export default function ShinyText({ children, className = '' }) {
  return (
    <span className={`font-serif italic font-normal text-saturn-green shiny-text-green ${className}`}>
      {children}
    </span>
  );
}
