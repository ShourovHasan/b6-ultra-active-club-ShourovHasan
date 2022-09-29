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
            
        </div>
    );
};

export default FitnessCards;