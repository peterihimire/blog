import React from 'react';


const title = ( props ) => {
  return(
    <div className='section-title'>
      <h1 className='lg-header'>
        <span className='color-primary'>{props.title1}</span>
        <span className='color-secondary'> {props.title2}</span>
      </h1>
      <div />
      <h2>
        {props.subtitle}
      </h2>
    </div>
  );
}

export default title;