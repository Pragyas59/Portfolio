import React, { useState } from "react";
import './style.css';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../Components/PageHeaderContent";

import ImageOne from '../../Images/image1.jpg';
import ImageTwo from '../../Images/image2.jpg';
import ImageThree from '../../Images/image3.jpeg';
import ImageFour from '../../Images/image4.jpeg';
import ImageFive from '../../Images/image5.jpeg';

const PortfolioData = [
    {
        id: '1',
        name: "Weather-Forecast App",
        link: '#',
        image: ImageOne
    },
    {
        id: '2',
        name: "Registration Site",
        link: '#',
        image: ImageTwo
    },
    {
        id: '3',
        name: "E-Commerce",
        link: '#',
        image: ImageThree
    },
    {
        id: '4',
        name: "Spotify Clone",
        link: '#',
        image: ImageFour
    },
    {
        id: '5',
        name: "Blog Website",
        link: '#',
        image: ImageFive
    }
];

const FilterData = [
    {
        filterId: '1', // Adjusted to match IDs in PortfolioData
        label: 'All'
    },
    {
        filterId: '2',
        label: 'Development'
    },
    {
        filterId: '3',
        label: 'Design'
    }
];

const Portfolio = () => {
    const [filteredValue, setFilteredValue] = useState('1'); // Adjusted initial value to match 'All' filter
    const [hoveredValue, setHoveredValue] = useState(null);

    const handleFilter = (currentId) => {
        setFilteredValue(currentId);
    };

    const handleHover = (index) => {
        setHoveredValue(index);
    };

    const filteredItems = filteredValue === '1' ? PortfolioData :
        PortfolioData.filter(item => item.id === filteredValue);

    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headertext=" My Portfolio"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio-content">
                <ul className="portfolio-content-filter">
                    {FilterData.map(item => (
                        <li className="li" onClick={() => handleFilter(item.filterId)} key={item.filterId}>
                            {item.label}
                        </li>
                    ))}
                </ul>
                <div className="portfolio-content-cards">
                    {filteredItems.map((item, index) => (
                        <div
                            className={`portfolio-content-cards-item ${index === hoveredValue ? 'clicked' : ''}`}
                            key={`cardItem${item.name.trim()}`}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHover(null)}
                            onClick={() => setHoveredValue(index)}
                        >
                            <div className="portfolio-content-card-item-img-wrapper">
                                <a href={item.link} className="a">
                                    <img className="img" src={item.image} alt={item.name} />
                                </a>
                            </div>
                            <div className="overlay">
                                <div className="overlay-content">
                                    <p>{item.name}</p>
                                    <a href={item.link} className="visit-btn">Visit</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
