import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect, useState } from 'react';
import './BreakCal.css';

const BreakCal = (props) => {
    const { second } = props;
    const [breakTime, setBreakTime] = useState(0);
    // data loaded from localStorage
    useEffect(() => {
        const storedSeconds = localStorage.getItem('time_Seconds');
        if (storedSeconds) {
            setBreakTime(storedSeconds);
        }
    }, [])
    // calculate time for exercise
    let time = 0;
    for (const category of second) {
        time = time + category.time;
    }
    // console.log(second);
    // set stored time when click break time 
    const setSeconds = (value) => {
        const storedtime = localStorage.getItem('time_Seconds');
        if (storedtime) {
            localStorage.removeItem('time_Seconds');
        }        
        setBreakTime(value);
        
        localStorage.setItem('time_Seconds', JSON.stringify(value));
    }    
    // toast notification after completed break time
    const notify = () => {
        toast('Congratulations !!! you done with your activity');
    }    
    // calculate and show profile and break and exercise time 
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
                    <p onClick={() => setSeconds(10)}><span>10</span>s</p>
                </div>
                <div>
                    <p onClick={() => setSeconds(20)}><span>20</span>s</p>
                </div>
                <div>
                    <p onClick={() => setSeconds(30)}><span>30</span>s</p>
                </div>
                <div>
                    <p onClick={() => setSeconds(40)}><span>40</span>s</p>
                </div>
                <div>
                    <p onClick={() => setSeconds(50)}><span>50</span>s</p>
                </div>
            </div>
            <h2>Exercise Details</h2>
            <div className='exercise_time'>
                <p>Exercise time</p>
                <p><strong>{time}</strong> seconds</p>
            </div>
            <div className='break_times'>
                <p>Break time</p>
                <p><strong>{breakTime}</strong> seconds</p>
            </div>
            <div className='completed_btn'>
                <button onClick={notify}>Activity Completed</button>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default BreakCal;