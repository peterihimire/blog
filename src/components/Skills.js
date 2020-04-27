import React from "react";
import Title from "./Title";
import Zoom from "react-reveal/Zoom";

const skill = props => {
  return (
    <section id="skill-section" className="skills">
      <div className="skills-center">
        <Title
          title1="my"
          title2="skills"
          subtitle="Here are the skills I possess..."
        />
        <div className="skillz">
          {props.skills.map((item, index) => {
            return (
              // console.log(item)
              <Zoom>
                <article className="skill" key={index}>
                  <div className={item.iconColor}>{item.icon}</div>
                  <h4>{item.title}</h4>
                  <div className={item.lineColor} />
                </article>
              </Zoom>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default skill;
