import React from 'react';
import './Category.css';

const Category = ({ category, handleAddToTime }) => {
    const { id, picture, title, about, age, time } = category;
    return (
        <div className='category'>
            <img src={picture} alt="" />
            <div className='category_details'>
                <p className='category_name'>{title}</p>
                <p><small>{about}</small></p>
                <p>For Age: <strong>{age}</strong></p>
                <p>Time required: <strong>{time}s</strong></p>
            </div>
            <button onClick={() => handleAddToTime(id)} className='btn_category'>Add to list</button>
        </div>
    );
};

export default Category;