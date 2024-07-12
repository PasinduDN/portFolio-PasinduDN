import * as React from 'react';
import { useEffect } from 'react';
import imgZ from '../../../assets/react.svg';
import './howIWorkCSS.css';
import timelineElements from "./timelineElements";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

function HowIWork() {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.vertical-timeline-element--work');
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    element.classList.remove('scrolled-up');
                } else {
                    element.classList.add('scrolled-up');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (title) => {
        alert(`Button clicked for ${title}`);
        // Handle button click logic here
    };

    return (
        <div className="timeline-container">
            <VerticalTimeline>
                {timelineElements.map((element, index) => (
                    <VerticalTimelineElement 
                        key={index} 
                        className="vertical-timeline-element--work"
                        icon={<img src={element.icon} alt="Timeline Icon" style={{ width: '100%', height: '100%' }} />}
                        iconStyle={{ background: 'transparent', boxShadow: 'none' }}
                    >
                        <div className="timeline-element-content">
                            <img src={element.img || imgZ} alt="Element Icon" />
                            <div>
                                <h3 className="timeline-element-title">{element.title}</h3>
                                <p>{element.description}</p>
                                {/* <button onClick={() => handleClick(element.title)}>Click me</button> */}
                            </div>
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            <div className="timeline-footer">
                <p>&copy; 2024 My Timeline Project</p>
            </div>
        </div>
    );
}

export default HowIWork;
