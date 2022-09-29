import { faDumbbell, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import './Fitness.css';

const FitnessCards = () => {
    const [categories, setCategories] = useState([]);
    const [second, setSecond] = useState([]);
    useEffect(() => {
        fetch('gymApi.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    const handleAddToTime = (selectedCategory) =>{
        console.log('Clicked', selectedCategory);
    }

    return (
        <div className='fitness_container'>
            <div className='fitness_body'>
                <div className='fitness_Header'>                 
                    <h1><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Fitness Club</h1>
                </div>
                <p>Select today's exercise</p>
                <div className='categories_container'>
                    {
                        categories.map(category => <Category category={category} handleAddToTime={handleAddToTime} key={category.id}></Category>)
                    }
                    
                </div>
            </div>
            <div className='fitness_Calculation'>
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
                    <p><strong>0</strong> seconds</p>
                </div>
                <div className='break_times'>
                    <p>Exercise time</p>
                    <p><strong>0</strong> seconds</p>
                </div>
                <div className='completed_btn'>
                    <button>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default FitnessCards;