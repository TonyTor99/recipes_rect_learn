import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/categories/')
            .then(res => {
                setCategories(res.data)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='main-container'>
            <h1 className='main-title'>Категории рецептов</h1>
            <ul className='categories-list'>
                {categories.map(cat => (
                    <li key={cat.id} className='category-item'>
                        <Link to={`/category/${cat.slug}`}>
                            {cat.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;