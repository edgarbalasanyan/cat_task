import React, { useState, useEffect } from 'react';
import "./CatPhotos.css"

function CatPhoto({ selectedButtonId}) {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPhotos([])
  }, [selectedButtonId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = selectedButtonId
            ? await fetch(
                `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${selectedButtonId}`)
            : await fetch(
                `https://api.thecatapi.com/v1/images/search?limit=10`);
        const data = await response.json();
        setPhotos(prevPhotos => [...prevPhotos, ...data]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedButtonId, page]);


  return (
    <div className='cat-photo-component-container'>
        <div className="cat-photos-container ">
        {photos.map((photo) => (
            <div key={photo.id}>
              <img src={photo.url} alt={photo.title} className='cat-photo'/>
            </div>
        ))}
        </div>
        <button className='more' onClick={()=>{setPage(page+1)}}>More</button>
    </div>);
}

export default CatPhoto;
