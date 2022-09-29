import React from 'react';

const Blogs = () => {
    return (
        <div>
            {/* Freequently asked questions start */}
            <section class="my-5">
                <div class="py-5 bg-white">
                    <div class="d-flex justify-content-between align-items-center flex-column">
                        <h2 class="pb-2">Frequently Asked Questions</h2>
                        <div class="w-75 ">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne" aria-expanded="false"
                                            aria-controls="flush-collapseOne">
                                            What is the difference between state and props in ReactJS?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <ul>
                                                <li>
                                                    The <strong>Props</strong> Data is passed from one component to another. But the <strong>State</strong> Data is passed within the component only.
                                                </li>
                                                <li>
                                                    <strong>Props</strong> is Immutable (cannot be modified). But <strong>State</strong> is Mutable ( can be modified).
                                                </li>
                                                <li>
                                                    <strong>Props</strong> can be used with state and functional components. But <strong>State</strong> can be used only with the state components/class component (Before 16.0).
                                                </li>
                                                <li>
                                                    <strong>Props</strong> are read-only. <strong>State</strong> is both read and write.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFive">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                            How does ReactJS work?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                                        data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <ul>
                                                <li>
                                                    One of the most widely used JavaScript libraries for creating mobile and online applications is <strong>ReactJS</strong>. React, developed by Facebook, consists of components, which are reusable JavaScript code snippets used to design user interfaces (UI).
                                                </li>
                                                <li>
                                                    The distinction between <strong>ReactJS</strong> and JavaScript frameworks must be made. This is due to the fact that it is limited to rendering the view layer's constituent parts of an application. Frameworks like Angular and Vue all allow you to build sophisticated functions but React is an option.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            What else is used to load data with the UseEffect API?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                                        data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            <ul>
                                                <li>
                                                    useEffect is used for many other purposes, apart from loading the api's data. The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. <br />
                                                    <code>useEffect(function, dependency)</code>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Freequently asked questions End  */}
        </div>
    );
};

export default Blogs;