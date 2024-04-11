import React from 'react';

const Titledescription = ({ title, description, repoUrl }) => {
  // Splitting the title into owner and repo name
  const [owner, repoName] = title.split('/');

  return (
    <div>
      {/* Title */}
      <a href={repoUrl} className='hover:underline'>
        <div className='text-3xl mb-2 text-black-101'>
          {owner}/<span className='font-bold text-black-102'>{repoName}</span>
        </div>
      </a>

      {/* Description */}
      <div className='my-2 text-base text-gray-101'>
        {description}
      </div>
    </div>
  );
}

export default Titledescription;
