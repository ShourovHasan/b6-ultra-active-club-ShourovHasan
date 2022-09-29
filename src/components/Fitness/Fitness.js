import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import BreakCal from '../BreakCal/BreakCal';
import Category from '../Category/Category';
import './Fitness.css';

const FitnessCards = () => {
    // destructuring 
    const [categories, setCategories] = useState([]);
    const [second, setSecond] = useState([]);
    // data load from our created file 
    useEffect(() => {
        fetch('gymApi.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    // add time for exercise
    const handleAddToTime = (selectedCategory) =>{
        let newTime = [];
        const exists = categories.find(category => category.id === selectedCategory.id);
        if (exists) {
            newTime = [...second, exists];
        }
        setSecond(newTime);
    }
    return (
        <div className='fitness_container'>
            <div className='fitness_body'>
                <div className='fitness_Header'>                 
                    <a href='App.js' alter="brand"><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Fitness Club</a>
                </div>
                <p>Select today's exercise</p>
                {/* categories loaded  */}
                <div className='categories_container'>
                    {
                        categories.map(category => <Category category={category} handleAddToTime={handleAddToTime} key={category.id}></Category>)
                    }                    
                </div>
            </div>
            {/* profile and breaktime added */}
            <div className='fitness_Calculation'>
                <BreakCal second={second} key={second.id}></BreakCal>
            </div>
        </div>
    );
};

export default FitnessCards;