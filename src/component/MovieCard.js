import React from 'react'
import './MovieCard.css';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";

function MovieCard({movie}) {
  return (
  //   <Card style={{ width: '18rem' , margin :'10px'}}>
  //     <Card.Img variant="top" src={movie.posterurl} />
  //     <Card.Body>
  //       <Card.Title>{movie.name}</Card.Title>
  //       <Card.Text>
  //        <p>{movie.description} </p>
         
  //       </Card.Text>
  //       <ReactStars
  //   count={5}
  //  edit={false}
  //  value={movie.rating}
  //   size={24}
  //   activeColor="#ffd700"
  // />
       
  //     </Card.Body>
  //   </Card>
  <div className="card transition">
        <h2 className="transition">{movie.name}</h2>
        <p>{movie.description} </p>
        
        <div className="card_circle transition" style={{background:`url(${movie.posterurl})`}}>
          <img src={movie.posterurl} />
          </div>                                
        <ReactStars
    count={5}
   edit={false}
   value={movie.rating}
    size={24}
    activeColor="#dd2476"
  />
      </div>
  )
}

export default MovieCard