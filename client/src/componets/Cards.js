import React from 'react';
import './Cards.css';
import CardItem from './CardItem.js';
import {usePosts} from "../context/postContext"
import{Link} from "react-router-dom"



function Cards() {
  const {posts} = usePosts();console.log(posts)
  return (
    <div className='cards '>
      <h1 className='animate-pulse'>Peliculas Imperdibles</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
         <Link to="/Formulario" className='flex justify-center' ><button className="m-3 p-2 h-9 w-auto rounded-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
  Crear nueva publicacion 
</button>
         </Link>
         
         {posts.map(post => (
          
          <ul key={post.id} className='cards__items'>
            
            <CardItem 
            post={post}
          
            />
           </ul>
          
         ))
         
          }
          
        </div>
      </div>
    </div>
  );
}

export default Cards;