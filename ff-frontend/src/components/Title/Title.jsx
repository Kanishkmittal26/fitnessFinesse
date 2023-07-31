import React from "react";
import '../Title/Title.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"


function Title() {
    return (
        <div>
            <section id="title">
                <div class="title">
                    <div class="container">
                        <div class="col-4">
                            <h1 class="quote display-3 fw-bold text-body-emphasis lh-2">When you feel like quitting, think about why you started.</h1>
                        </div>
                    </div>
                </div>
            </section>
            <a href="/">
                <FontAwesomeIcon className="hello" icon={faAngleDown} />
            </a>
        </div>
    )
}

export default Title;
