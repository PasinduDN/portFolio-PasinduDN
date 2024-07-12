import * as React from 'react';
import { useEffect } from 'react';
import imgZ from '../../../assets/react.svg';
import agrixLogo from '../../Images/Logo/Media.jpg'
import idCard from '../../Images/Logo/id-card.png';
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './howIWorkCSS.css'; // Ensure this CSS file contains the necessary styles for scroll handling
import WeeklTarget from './Intern/WeeklyTarget'

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

        // Initial scroll check
        handleScroll();

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (title) => {
        alert(`Button clicked for ${title}`);
        // Handle button click logic here
    };

    return (
        <div className="timeline-container">
            <VerticalTimeline>
                {/* Example of a VerticalTimelineElement */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<img src={agrixLogo} alt="Timeline Icon" style={{ width: '100%', height: '100%' }} />}
                    iconStyle={{ background: 'transparent', boxShadow: 'none' }}
                >
                    <div className="content">
                        <img src={idCard} alt="Element Icon" />
                        <div className="info">
                            <h5 className="timeline-element-title">Intern</h5>
                            <small> Software Engineer Intern at Agrithmics </small>
                            <hr></hr>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, iure corporis. Ab, cum facere? Assumenda minus dolores, iusto suscipit nesciunt odio, in magnam vero ullam atque ab ipsam tempore doloribus.</p> */}
                        </div>

                    </div>
                    <div className="content">
                        <div className="info">
                            {/*Main */}
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                {/* content - 1 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <h6>Weekly Target</h6>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <WeeklTarget></WeeklTarget>
                                        
                                    </div>
                                </div>
                                {/* content - 2 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Placeholder content for Accordion Item #2.
                                        </div>
                                    </div>
                                </div>
                                {/* content - 3 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Placeholder content for Accordion Item #3.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="timeline-footer">
                        <p>&copy; Software Engineer Intern at Agrithmics</p>
                    </div> */}
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<img src={imgZ} alt="Timeline Icon" style={{ width: '100%', height: '100%' }} />}
                    iconStyle={{ background: 'transparent', boxShadow: 'none' }}
                >
                    <div className="content">
                        <img src="path/to/image1.jpg" alt="Element Icon" />
                        <div className="info">
                            <h3 className="timeline-element-title">First Step</h3>
                            <p>This is the first step of my process.</p>
                        </div>
                        <div className="buttons">
                            <button onClick={() => handleClick("First Step")}>Click me</button>
                            {/* Add more buttons as needed */}
                        </div>
                    </div>
                    <div className="timeline-footer">
                        <p>&copy; 2024 My Timeline Project</p>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<img src={imgZ} alt="Timeline Icon" style={{ width: '100%', height: '100%' }} />}
                    iconStyle={{ background: 'transparent', boxShadow: 'none' }}
                >
                    <div className="content">
                        <img src="path/to/image1.jpg" alt="Element Icon" />
                        <div className="info">
                            <h3 className="timeline-element-title">First Step</h3>
                            <p>This is the first step of my process.</p>
                        </div>
                        <div className="buttons">
                            <button onClick={() => handleClick("First Step")}>Click me</button>
                            {/* Add more buttons as needed */}
                        </div>
                    </div>
                    <div className="timeline-footer">
                        <p>&copy; 2024 My Timeline Project</p>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<img src={imgZ} alt="Timeline Icon" style={{ width: '100%', height: '100%' }} />}
                    iconStyle={{ background: 'transparent', boxShadow: 'none' }}
                >
                    <div className="content">
                        <img src="path/to/image1.jpg" alt="Element Icon" />
                        <div className="info">
                            <h3 className="timeline-element-title">First Step</h3>
                            <p>This is the first step of my process.</p>
                        </div>
                        <div className="buttons">
                            <button onClick={() => handleClick("First Step")}>Click me</button>
                            {/* Add more buttons as needed */}
                        </div>
                    </div>
                    <div className="timeline-footer">
                        <p>&copy; 2024 My Timeline Project</p>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<img src={imgZ} alt="Timeline Icon" style={{ width: '100%', height: '100%' }} />}
                    iconStyle={{ background: 'transparent', boxShadow: 'none' }}
                >
                    <div className="content">
                        <img src="path/to/image1.jpg" alt="Element Icon" />
                        <div className="info">
                            <h3 className="timeline-element-title">First Step</h3>
                            <p>This is the first step of my process.</p>
                        </div>
                        <div className="buttons">
                            <button onClick={() => handleClick("First Step")}>Click me</button>
                            {/* Add more buttons as needed */}
                        </div>
                    </div>
                    <div className="timeline-footer">
                        <p>&copy; 2024 My Timeline Project</p>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<img src={imgZ} alt="Timeline Icon" style={{ width: '100%', height: '100%' }} />}
                    iconStyle={{ background: 'transparent', boxShadow: 'none' }}
                >
                    <div className="content">
                        <img src="path/to/image1.jpg" alt="Element Icon" />
                        <div className="info">
                            <h3 className="timeline-element-title">First Step</h3>
                            <p>This is the first step of my process.</p>
                        </div>
                        <div className="buttons">
                            <button onClick={() => handleClick("First Step")}>Click me</button>
                            {/* Add more buttons as needed */}
                        </div>
                    </div>
                    <div className="timeline-footer">
                        <p>&copy; 2024 My Timeline Project</p>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<img src={imgZ} alt="Timeline Icon" style={{ width: '100%', height: '100%' }} />}
                    iconStyle={{ background: 'transparent', boxShadow: 'none' }}
                >
                    <div className="content">
                        <img src="path/to/image1.jpg" alt="Element Icon" />
                        <div className="info">
                            <h3 className="timeline-element-title">First Step</h3>
                            <p>This is the first step of my process.</p>
                        </div>
                        <div className="buttons">
                            <button onClick={() => handleClick("First Step")}>Click me</button>
                            {/* Add more buttons as needed */}
                        </div>
                    </div>
                    <div className="timeline-footer">
                        <p>&copy; 2024 My Timeline Project</p>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<img src={imgZ} alt="Timeline Icon" style={{ width: '100%', height: '100%' }} />}
                    iconStyle={{ background: 'transparent', boxShadow: 'none' }}
                >
                    <div className="content">
                        <img src="path/to/image1.jpg" alt="Element Icon" />
                        <div className="info">
                            <h3 className="timeline-element-title">First Step</h3>
                            <p>This is the first step of my process.</p>
                        </div>
                        <div className="buttons">
                            <button onClick={() => handleClick("First Step")}>Click me</button>
                            {/* Add more buttons as needed */}
                        </div>
                    </div>
                    <div className="timeline-footer">
                        <p>&copy; 2024 My Timeline Project</p>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<img src={imgZ} alt="Timeline Icon" style={{ width: '100%', height: '100%' }} />}
                    iconStyle={{ background: 'transparent', boxShadow: 'none' }}
                >
                    <div className="content">
                        <img src="path/to/image1.jpg" alt="Element Icon" />
                        <div className="info">
                            <h3 className="timeline-element-title">First Step</h3>
                            <p>This is the first step of my process.</p>
                        </div>
                        <div className="buttons">
                            <button onClick={() => handleClick("First Step")}>Click me</button>
                            {/* Add more buttons as needed */}
                        </div>
                    </div>
                    <div className="timeline-footer">
                        <p>&copy; 2024 My Timeline Project</p>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<img src={imgZ} alt="Timeline Icon" style={{ width: '100%', height: '100%' }} />}
                    iconStyle={{ background: 'transparent', boxShadow: 'none' }}
                >
                    <div className="content">
                        <img src="path/to/image1.jpg" alt="Element Icon" />
                        <div className="info">
                            <h3 className="timeline-element-title">First Step</h3>
                            <p>This is the first step of my process.</p>
                        </div>
                        <div className="buttons">
                            <button onClick={() => handleClick("First Step")}>Click me</button>
                            {/* Add more buttons as needed */}
                        </div>
                    </div>
                    <div className="timeline-footer">
                        <p>&copy; 2024 My Timeline Project</p>
                    </div>
                </VerticalTimelineElement>

                {/* Add more VerticalTimelineElement components as needed */}
            </VerticalTimeline>
        </div>
    );
}

export default HowIWork;
