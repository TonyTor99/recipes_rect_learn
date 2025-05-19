import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams, Link, useLocation} from 'react-router-dom';

function RecipePage() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const location = useLocation();
    const query = new URLSearchParams(location.search);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/${id}/`)
            .then(res => setRecipe(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!recipe) return <p>Загрузка рецепта...</p>;

    return (
        <div className="recipe-container">
            <div className="info-container">
                <h1 className='recipe-title'>{recipe.title}</h1>
                <p className='description'>{recipe.description}</p>
                <img src={recipe.image} alt="recipe-image" className="image" />
            </div>
            <div className='instruction-info'>
                <h2 className='instrucrion'>Инструкции</h2>
                {recipe.instructions.split(/\r\n\r\n/).map((line, index) => (
                    <p className='instruction-text' key={index}>{line}</p>
                ))}
            </div>
            <Link to={`/category/${query.get('category')}`} className='back'>← Назад к категории</Link>
        </div>
    );
}

export default RecipePage;