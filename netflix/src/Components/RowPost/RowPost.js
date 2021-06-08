import React,{useEffect,useState} from 'react'
import './RowPost.css';
import axios from '../../axios';
import {imageURL} from '../../Constance/Constance'
function RowPost(props) {
    const [movies, setMovies] = useState([])
useEffect(() => {
    axios.get(props.url).then((response)=>{
        console.log(response.data)
        setMovies(response.data.results)
    }).catch(err=>{
        //alert('Network Error')
    })
}, [])
    return (
        <div className='row'>
            <h2>{props.title}</h2>
           
            <div className="posters">
            {movies.map((obj)=>
                 <img className={props.isSmall?'smallposter':'poster'} alt='poster' src={imageURL+obj.backdrop_path}></img>
            )}
               
            </div>
        </div>
    )
}
export default RowPost
