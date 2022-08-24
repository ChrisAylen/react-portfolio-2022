import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import "./styles.scss";
import { filterOptions, portfolioData } from "./utils";

const Portfolio = () => {
  const [filterValue, setFilterValue] = useState(1);
  const handleFilter = (id) => {
    setFilterValue(id);
  };
  console.log(filterValue);
  const filteredPortfolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue);

  return (
    <section className="portfolio" id="portfilio">
      <PageHeaderContent
        headerText="Portfolio of Work"
        icon={<AiFillProject size={40} />}
      />

      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterOptions.map((option) => (
            <li
              onClick={() => handleFilter(option.id)}
              key={`filter${option.id}`}
            >
              {option.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredPortfolioData.map(
            (item, key) => (
              console.log(item, key),
              (
                <div key={key} className="portfolio__content__cards__item">
                  <div className="portfolio__content__cards__item__image-wrapper">
                    <a>
                      <img src={item.image} alt="project image" />
                    </a>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
