"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';

function HeaderInput() {
    const router = useRouter();
    const [menu, setMenu] = useState([]);

    const [selectedMenu, setSelectedMenu] = useState("");



    const submitHandler = (e) => {
        e.preventDefault();

        router.push(`/recipeSearch/${selectedMenu}`)
        console.log("เลือกเมนู: ", selectedMenu);
    }


    const fetchRecipeData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/recipes');
            const data = await response.json();

            setMenu(data.recipes);
        } catch (error) {
            console.log("Error FetchData", error);
        }
    }

    useEffect(() => {
        fetchRecipeData();
    }, [])

    return (
        <header className='h-[300px] flex justify-center items-center bg-yellow-950 shadow-2xl'>
            <div className='text-center w-5/6'>
                <h1 className='text-yellow-500 text-6xl mb-2 drop-shadow-md'>Recipes</h1>
                <p className='text-yellow-500 text-2xl drop-shadow-md'>Anyone can cook 👩🏻‍🍳</p>
                <form className='flex mt-2'>
                    <div className='unuse'>
                        {/* <input
                        type="text"
                        placeholder='Type menu...'
                        className='w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-md text-2xl' /> */}
                    </div>


                    <select
                        onChange={(e) => {setSelectedMenu(e.target.value)}}
                        className='w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-md text-xl'>
                        <option value="">Select Menu...</option>
                        {menu.map((val) => (
                            <option value={val.id} key={val.name}>{val.name}</option>
                        ))}
                    </select>
                    <button
                        type='submit'
                        onClick={submitHandler}
                        className='w-[150px] bg-yellow-500 mx-2 px-2 rounded-md shadow-md text-center flex flex-col justify-center items-center hover:bg-black hover:text-yellow-500 hover:ease-in hover:fill-yellow-500 transition duration-300 ease-out'>
                        Get Recipe
                        <svg className='w-[40px] h-[40px]'
                            viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="Recipe_Book"><path d="M108.4875,428.1877a32.387,32.387,0,0,0,32.3506,32.3506H393.5027a30.8487,30.8487,0,0,0,28.51-19.154V395.8376H140.8381A32.387,32.387,0,0,0,108.4875,428.1877Z" /><path d="M200.4724,145.7937A21.01,21.01,0,0,0,179.4861,166.78v27.2422a20.9863,20.9863,0,0,0,41.9726,0V166.78A21.01,21.01,0,0,0,200.4724,145.7937Z" /><path d="M412.0125,51.4617H138.15A48.2169,48.2169,0,0,0,89.9875,99.6243V415.9319a48.0859,48.0859,0,0,0,1.5073,11.9719,49.403,49.403,0,0,1,49.3433-49.0662H422.0125V61.4617A10,10,0,0,0,412.0125,51.4617ZM238.4587,194.0222a38.0444,38.0444,0,0,1-29.4863,37.0156v94.5865a8.5,8.5,0,1,1-17,0V231.0378a38.0444,38.0444,0,0,1-29.4863-37.0156V166.78a37.9863,37.9863,0,0,1,75.9726,0Zm106.419,0a38.045,38.045,0,0,1-29.4863,37.0156v94.5865a8.5,8.5,0,0,1-17,0V231.0378a38.045,38.045,0,0,1-29.4864-37.0156V145.2644a8.5,8.5,0,0,1,17,0v48.7578a21.0045,21.0045,0,0,0,12.4864,19.171V147.2957a8.5,8.5,0,0,1,17,0v65.8975a21.0044,21.0044,0,0,0,12.4863-19.171V145.2644a8.5,8.5,0,0,1,17,0Z" /></g></svg>
                    </button>
                </form>
            </div>

        </header>
    )
}

export default HeaderInput
