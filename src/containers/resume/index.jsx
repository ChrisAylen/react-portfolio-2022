import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { FaBlackTie } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils";
import { MdWork } from 'react-icons/md';
import './styles.scss';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent headerText="My CV" icon={<FaBlackTie size={40} />} />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
          layout="1-column"
          lineColor="var(--selected-theme-main-color)"
          >
            {data.experience.map((item) => (
              <VerticalTimelineElement
                key={item.title}
                className="timeline__experience__vertical-timeline-component"
                contentStyle={
                    {
                        background: 'none',
                        color: "var(--selected-theme-main-color)",
                        border: '1.5px solid var(--selected-theme-main-color)',
                    }   
                }
                date={item.date}
                iconStyle={{ 
                        background: 'var(--yellow-theme-nav-background-color)', 
                        color: 'var(--selected-theme-main-color)' 
                    }}
                icon={<MdWork  />}
                // size={20} color="var(--selected-theme-main-color)"
                dateClassName="vertical-timeline-element-custom-date">

                <div className="vertical-timeline-element-title-wrapper">
                    <h3 className="vertical-timeline-element-title">{item.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
                </div>
                {/* <p className="vertical-timeline-element-description-wrapper">{item.description}</p> */}
                <p className="vertical-timeline-element-location">{item.location}</p>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
