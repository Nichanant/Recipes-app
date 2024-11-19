"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';

function AllRecipesData() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);


    const fetchRecipeData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/recipes');
            const data = await response.json();

            setRecipes(data.recipes);
        } catch (error) {
            console.log("Error FetchData", error);
        }
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        fetchRecipeData();
    }, [])


    return (
        <main className='container text-center mx-auto'>
            {loading ? (
                <div className='text-5xl text-yellow-900 m-12'>Loading...</div>
            )
                :
                (
                    <div className='grid grid-cols-1 mx-8 sm:grid-cols-2 lg:grid-cols-5'>
                        {recipes.map((val, index) => (
                            <Link key={val.id} href={`/recipeInfo/[id]`} as={`/recipeInfo/${index + 1}`}>
                                <div key={index} className='flex flex-col justify-between items-center shadow-md transtion cursor-pointer rounded-md bg-white m-2 w-auto hover:border-2 border-yellow-500'>
                                    {/* *****Not to use <Image/> right here cause prevent Error***** */}
                                        <img src={`https://cdn.dummyjson.com/recipe-images/${index + 1}.webp`}
                                            width={200}
                                            height={200}
                                            alt={val.name}
                                            className='rounded-md w-fit' />
                                    
                                    <div className='text-lg p-4'>{val.name}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )
            }
        </main>
    )
}

export default AllRecipesData
