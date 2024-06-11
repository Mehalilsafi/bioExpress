import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating, onRate }) => {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [currentRating, setCurrentRating] = useState(rating);

  useEffect(() => {
    setCurrentRating(rating);
  }, [rating]);

  const handleClick = (star) => {
    onRate(star);
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <FontAwesomeIcon
          key={star}
          icon={faStar}
          className={`cursor-pointer ${star <= (hoveredStar || currentRating) ? 'text-amber-300' : 'text-gray-300'}`}
          onClick={() => handleClick(star)}
          onMouseEnter={() => setHoveredStar(star)}
          onMouseLeave={() => setHoveredStar(0)}
        />
      ))}
      <span className="ml-2">{currentRating.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;

