import Week1 from "./Weeks/Week1";
import Week2 from "./Weeks/Week2";
import Week3 from "./Weeks/Week3";

function WeeklyTarget() {
    return (
        <div>
            <div className="accordion-body " style={{ margin: '10px 0 10px' }}>
                {/* Main content of Accordion Item #1 - <code>.accordion-flush</code>*/}
                <div> Welcome to my weekly work recap!  </div>
                <br />
                {/* Nested accordions for Weeks */}
                <div className="accordion" id="nestedAccordion">

                    {/* content - 1.3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne14" aria-expanded="false" aria-controls="flush-collapseOne14">
                                Week 03
                            </button>
                        </h2>
                        <div id="flush-collapseOne14" className="accordion-collapse collapse" aria-labelledby="flush-headingOne14" data-bs-parent="#nestedAccordion">
                            <div className="accordion-body">
                                {/* Content for Week 03 */}
                                Placeholder content for Week 03. <br />
                                <button className="btn" data-bs-toggle="modal" data-bs-target="#idOfWeek01"><code> See More</code> </button>
                            </div>
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
                            <div className="accordion-body">
                                {/* Content for Week 02 */}
                                Placeholder content for Week 02. <br />
                                <button className="btn" data-bs-toggle="modal" data-bs-target="#idOfWeek01"><code> See More</code> </button>
                            </div>
                        </div>
                    </div>

                    {/* content - 1.1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne12" aria-expanded="false" aria-controls="flush-collapseOne12">
                                <h6>Week 01</h6>
                            </button>
                        </h2>
                        <div id="flush-collapseOne12" className="accordion-collapse collapse" aria-labelledby="flush-headingOne12" data-bs-parent="#nestedAccordion">
                            <div className="accordion-body ">
                                {/* Content for Week 01 */}
                                This week marked my first experience in the office. 
                                <button className="btn" data-bs-toggle="modal" data-bs-target="#idOfWeek01"><code> See More</code> </button>
                            </div>
                            {/* <div className="btn btn-outline-info custom-button">See More</div> */}
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* Week 01 */}
            <div class="modal " id="idOfWeek01" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <Week1></Week1>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>

            
        </div>



    );
}

export default WeeklyTarget;