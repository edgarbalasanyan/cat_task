import React, { useState, useEffect } from 'react';
import "./CatPhotos.css"

function CatPhoto({ selectedButtonId}) {
  const [photos, setPhotos] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = selectedButtonId? await fetch(
                        `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${selectedButtonId}`)
                        :await fetch(
                            `https://api.thecatapi.com/v1/images/search?limit=${limit}`);
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedButtonId, limit]);

  return (
    <div className='cat-photo-component-container'>
        <div className="cat-photos-container ">
        {photos.map((photo) => (
        <img key={photo.id} src={photo.url} alt={photo.title} className='cat-photo'/>
        ))}
        </div>
        <button className='more' onClick={()=>{setLimit(limit+10)}}>More</button>
    </div>);
}

export default CatPhoto;
