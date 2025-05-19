import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

function CategoryPage() {
    const {slug} = useParams();
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        axios.get(`http://localhost:8000/api/categories/${slug}/`)
            .then(res => {
                setCategory(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError('Ошибка загрузки данных');
                setLoading(false);
                console.error(err);
            });
    }, [slug]);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!category) {
        return <div>Категория не найдена</div>;
    }

    return (
        <div className='main-container'>
            <h1 className='main-title'>{category.name}</h1>
            <ul className='categories-list'>
                {category.recipes.map(recipe => (
                    <li key={recipe.id} className='category-item'>
                        <Link to={`/recipe/${recipe.id}?category=${slug}`}>
                            {recipe.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to="/" className='back'>← Назад к категориям</Link>
        </div>
    );
}

export default CategoryPage;