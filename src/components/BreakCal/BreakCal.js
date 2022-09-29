import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './BreakCal.css'

const BreakCal = (props) => {
    let time = 0;
    const { second } = props;
    
    for (const category of second) {
        time = time + category.time;
    }
    console.log(second);
    return (
        <div>
            <div className='profile'>
                <img src='profile.jpg' alt="" />
                <div className='profile_details'>
                    <p><strong>Shourov Hasan</strong> <br /> <span><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Dhaka, Bangladesh</span></p>

                </div>
            </div>
            <div className='my_fitness'>
                <div>
                    <span><strong>95</strong>kg</span><br />
                    <span>Weight</span>
                </div>
                <div>
                    <span><strong>6.1</strong></span><br />
                    <span>Height</span>
                </div>
                <div>
                    <span><strong>26</strong>yrs</span><br />
                    <span>Age</span>
                </div>
            </div>
            <h2>Add A Break</h2>
            <div className='break_time'>
                <div>
                    <p><span>10</span>s</p>
                </div>
                <div>
                    <p><span>20</span>s</p>
                </div>
                <div>
                    <p><span>30</span>s</p>
                </div>
                <div>
                    <p><span>40</span>s</p>
                </div>
                <div>
                    <p><span>50</span>s</p>
                </div>
            </div>
            <h2>Exercise Details</h2>
            <div className='exercise_time'>
                <p>Exercise time</p>
                <p><strong>{time}</strong> seconds</p>
            </div>
            <div className='break_times'>
                <p>Break time</p>
                <p><strong>0</strong> seconds</p>
            </div>
            <div className='completed_btn'>
                <button>Activity Completed</button>
            </div>
        </div>
    );
};

export default BreakCal;