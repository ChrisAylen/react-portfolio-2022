import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import './styles.scss'

import { filterOptions, portfolioData } from "./utils";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfilio">
      <PageHeaderContent
        headerText="Portfolio of Work"
        icon={<AiFillProject size={40} />}
      />

      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
            {
                filterOptions.map((option)=>
                <li key={option.id}>
                        {option.label}
                </li>
                )
            }


        </ul>
        <div className="portfolio__content__cards">
            {
                portfolioData.map((item)=>(
                    <div key={item.sectionId} className="portfolio__content__cards__item">
                        <div className="portfolio__content__cards__item__image-wrapper">
                            <a>
                                <img src={item.image} alt="project image"/>
                            </a>
                        </div>

                    </div>

                ))
            }
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
