import React  from 'react';

import Title from './Title';



const skill = (props) => {
  return(
    <section className='skills'>
        <div className='skills-center'>
          <Title title1='my' title2='skills' subtitle='Here are the skills I possess...'/>
          <div className='skillz'>
            {props.skills.map((item, index) => {
              return(
                // console.log(item)
                <article className='skill' key={index}>
                  <div className='inner-box'>
                    {item.icon}
                  </div>
                  <h4>{item.title}</h4>
                  <div className='skill-hor-line' />
                </article>
              )
            })}
          </div>
            
        </div>
    </section>
  );
}


export default skill;