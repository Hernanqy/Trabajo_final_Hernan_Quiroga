import React,{ useState} from 'react';
import './Cards.css';
import CardItem from './CardItem.js';
import {usePosts} from "../context/postContext"
import{Link} from "react-router-dom"



function Cards() {
  const {posts} = usePosts();console.log(posts)
const [filtered, setFiltered] = useState("")

  return (
    <div className='cards '>
      <h1 className='animate-pulse'>Peliculas Imperdibles</h1>
      <div className='cards__container '>
        <div className='cards__wrapper'>
         <Link to="/Formulario" className='flex justify-center' ><button className="m-3 p-2 h-9 w-auto rounded-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
  Crear nueva publicacion 
</button>
         </Link>
         
         <input type="text" onChange={(e) => setFiltered(String(e.target.value))} className='bg-indigo-500 ' ></input>
         
         {posts.filter(
          ({title}) => title.includes(filtered)

         ).map(post => (
          
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