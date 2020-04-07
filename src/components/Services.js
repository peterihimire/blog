import React from 'react';


const services = (props) => {
  return(
    <section id='service-section' className='services'>
      <div className='services-center'>
        {props.myServices.map( (item, index) => {
          return(
            <article key={index} className='service'>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.info}</p>
            </article>
          )
        })}
      </div>
    </section>
  );
}


export default services;