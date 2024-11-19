"use client"

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'


function recipeSearch() {
    const params = useParams();

    console.log(params.selectedMenu);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    

    const fetchRecipeData = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/recipes/${params.selectedMenu}`);
            const data = await response.json();

            setRecipes(data);
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
        <div className='p-24'>
            <Link href="/" className='w-[150px] h-[50px] text-2xl bg-yellow-500 mx-2 px-2 rounded-md shadow-md text-center flex flex-col justify-center items-center hover:bg-black hover:text-yellow-500 hover:ease-in hover:fill-yellow-500 transition duration-300 ease-out'>Home</Link>
            <div className='flex justify-center items-center mt-10 text-center'>
                {loading ? (<div className='text-5xl text-yellow-900 m-12'>Loading...</div>)
                    :
                    (
                        <div className='bg-white w-[500px] overflow-hidden rounded-xl shadow-lg grid grid-cols-1 items-center justify-center lg:grid-cols-2 lg:w-[1200px]'>
                            {/* *****Not to use <Image/> right here cause prevent Error***** */}
                            <img src={recipes.image}
                                width={500}
                                height={800}
                                alt={recipes.name}
                                className='rounded-xl h-full' 
                                style={{objectFit:"cover"}}/>

                            <div className='info'>
                                <div className='text-4xl text-yellow-900 my-5 mx-10'>{recipes.name}</div>

                                <p className='text-xl text-yellow-900 m-12 text-start bg-yellow-500 w-fit px-2 py-1 rounded-xl mt-[-10px] mb-[-8px]' >Ingredients:</p>
                                {recipes.ingredients?.map((val, index) => (
                                    <p key={index+10} 
                                    className='text-md text-yellow-900 m-12 text-start px-2 py-1 rounded-xl my-[2px]'>{index + 1}. {val}</p>
                                ))}
                                <br />
                                <p className='text-xl text-yellow-900 m-12 text-start bg-yellow-500 w-fit px-2 py-1 rounded-xl mt-[-10px] mb-[-8px]' >Instructions:</p>
                                {recipes.instructions?.map((val, index) => (
                                    <p key={index+20}
                                    className='text-md text-yellow-900 m-12 text-start px-2 py-1 rounded-xl my-[2px]'>{index + 1}. {val}</p>
                                ))}

                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default recipeSearch
