import React from 'react';
import { PiUsers } from "react-icons/pi";
import { GoIssueOpened } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { GoRepoForked } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

const Lowerbar = ({ contributors, stars, issues, forks }) => {
  return (
    <div className='flex gap-5'>
        {/* Container for Contributors */}
        <div className='border-gray-500 border-1 rounded p-1'>
            {/* Icon and Count for Contributors */}
            <div className='flex'>
                <PiUsers className='mt-1 text-gray-101 text-lg'/> {/* Contributors Icon */}
                <div className='mx-2'>{contributors}</div> {/* Contributors Count */}
            </div>
            <div className='text-sm text-gray-102 ml-6 mt-[-5px]'>Contributors</div> {/* Label for Contributors */}
        </div>
        
        {/* Container for Issues */}
        <div className='border-gray-500 border-1 rounded p-1'>
            {/* Icon and Count for Issues */}
            <div className='flex'>
                <GoIssueOpened className='mt-1 text-gray-101 text-lg'/> {/* Issues Icon */}
                <div className='mx-2'>{issues}</div> {/* Issues Count */}
            </div>
            <div className='text-sm text-gray-102 ml-6 mt-[-5px]'>Issues</div> {/* Label for Issues */}
        </div>
        
        {/* Container for Stars */}
        <div className='border-gray-500 border-1 rounded p-1'>
            {/* Icon and Count for Stars */}
            <div className='flex'>
                <CiStar className='mt-1 text-gray-101 text-lg'/> {/* Stars Icon */}
                <div className='mx-2'>{stars}</div> {/* Stars Count */}
            </div>
            <div className='text-sm text-gray-102 ml-6 mt-[-5px]'>Stars</div> {/* Label for Stars */}
        </div>
        
        {/* Container for Forks */}
        <div className='border-gray-500 border-1 rounded p-1'>
            {/* Icon and Count for Forks */}
            <div className='flex'>
                <GoRepoForked className='mt-1 text-gray-101 text-lg'/> {/* Forks Icon */}
                <div className='mx-2'>{forks}</div> {/* Forks Count */}
            </div>
            <div className='text-sm text-gray-102 ml-6 mt-[-5px]'>Forks</div> {/* Label for Forks */}
        </div>
        
        {/* GitHub Icon */}
        <a href='https://github.com'>
            <div className='ml-32 mt-3 opacity-30'>
                <FaGithub className='text-3xl rounded-2xl hover:shadow-black-100 shadow-lg'/>
            </div>
        </a>
    </div>
  );
};

export default Lowerbar;
