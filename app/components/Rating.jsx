import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex justify-between mt-3">
      <div>
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} className="text-amber-300" />
        ))}
        {halfStar && <FontAwesomeIcon icon={faStar} className="text-amber-300" style={{ clipPath: 'inset(0 50% 0 0)' }} />}
        {[...Array(emptyStars)].map((_, index) => (
          <FontAwesomeIcon key={index + fullStars + (halfStar ? 1 : 0)} icon={faStar} className="text-gray-300" />
        ))}
      </div>
      <p className="text-gray-500 dark:text-gray-400">{rating.toFixed(1)}</p>
    </div>
  );
};

export default Rating;
