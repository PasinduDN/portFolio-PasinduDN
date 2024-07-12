function WeeklyTarget() {
    return (
        <div>
            <div className="accordion-body " style={{ margin: '10px 0 10px' }}>
                {/* Main content of Accordion Item #1 */}
                <div> Intro <code>.accordion-flush</code>  </div>
                <br />
                {/* Nested accordions for Weeks */}
                <div className="accordion" id="nestedAccordion">
                    {/* content - 1.1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne12" aria-expanded="false" aria-controls="flush-collapseOne12">
                                Week 01
                            </button>
                        </h2>
                        <div id="flush-collapseOne12" className="accordion-collapse collapse" aria-labelledby="flush-headingOne12" data-bs-parent="#nestedAccordion">
                            <div className="accordion-body btn">
                                {/* Content for Week 01 */}
                                Placeholder content for Week 01. <br /> <code> See More</code>
                            </div>
                            {/* <div className="btn btn-outline-info custom-button">See More</div> */}
                        </div>
                    </div>
                    {/* content - 1.2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne13" aria-expanded="false" aria-controls="flush-collapseOne13">
                                Week 02
                            </button>
                        </h2>
                        <div id="flush-collapseOne13" className="accordion-collapse collapse" aria-labelledby="flush-headingOne13" data-bs-parent="#nestedAccordion">
                            <div className="accordion-body btn">
                                {/* Content for Week 02 */}
                                Placeholder content for Week 02. <br /> <code> See More</code>
                            </div>
                        </div>
                    </div>
                    {/* content - 1.3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne14" aria-expanded="false" aria-controls="flush-collapseOne14">
                                Week 03
                            </button>
                        </h2>
                        <div id="flush-collapseOne14" className="accordion-collapse collapse" aria-labelledby="flush-headingOne14" data-bs-parent="#nestedAccordion">
                            <div className="accordion-body btn">
                                {/* Content for Week 03 */}
                                Placeholder content for Week 03. <br /> <code> See More</code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeeklyTarget;