import React, { useState, useEffect } from 'react';
import './App.css'; // Importing custom CSS file
import dpcropped from './assets/dpcropped.jpeg'; // Importing image
import Lowerbar from './components/lowerbar'; // Importing Lowerbar component
import Titledescription from './components/titledescription'; // Importing Titledescription component
import { FaSearch } from "react-icons/fa";
import Profile from './components/profile';
import axios from 'axios';

function App() {

  const [message, setMessage] = useState();
  const [searchValue, setSearchValue] = useState('');
  const [apiEndpoint, setApiEndpoint] = useState('');
  const [repoData, setRepoData] = useState({
    title: 'clearlydecoded/html-css-javascript-tutorial',
    description: 'Example Code for HTML, CSS, and JavaScript for Web Developers Coursera Course',
    imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg',
    contributors: '0',
    stars: '0',
    issues: '0',
    forks: '0',
    repoUrl: 'https://github.com/clearlydecoded/html-css-javascript-tutorial',
    profileUrl: 'https://github.com/clearlydecoded',
  });

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  
  const onSubmit = (searchString) => {
    setMessage('');
    const regex = /^https:\/\/github\.com\/([^/]+)\/([^/]+).*$/;
    const match = searchString.match(regex);
    if (match) {
      const owner = match[1];
      const repo = match[2];
      const apiUrl = ("https://api.github.com/repos/"+owner+"/"+repo).replace(/\.git$/, "");
 
      console.log(apiUrl);
      const repoName = searchString.replace(".git", ""); // Remove .git extension
      axios.get(apiUrl)
        .then(response => {
          const data = response.data;
          setRepoData({
            title: data.full_name,
            description: data.description,
            imageUrl: data.owner.avatar_url,
            contributors: data.contributors_url,
            stars: data.stargazers_count,
            issues: data.open_issues_count,
            forks: data.forks,
            repoUrl: repoName,
            profileUrl: data.owner.html_url,
          });
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setMessage('Error fetching data:', error);
        });
      } else {
        // Invalid URL pattern
        console.error('Invalid GitHub repository URL');
        setMessage('Invalid GitHub repository URL');
    }
  }

  useEffect(() => {
    if (typeof repoData.contributors === 'string') {
      // const regex = /^https:\/\/github\.com\/([^/]+)\/([^/]+).*$/;
      // const match = repoData.contributors.match(regex);
      console.log("test",repoData.contributors);
      // if (match) {
        axios.get(repoData.contributors)
        .then(response => {
            console.log("test",response.data);
            setRepoData(prevState => ({
              ...prevState,
              contributors: response.data.length
            }));
          })
          .catch(error => {
            console.error('Error fetching contributors:', error);
            setMessage('Error fetching contributors:', error);
          });
      // }
    }
  }, [repoData.contributors]);

  useEffect(()=>(console.log(repoData)),[repoData])

  const SearchBar = () => {
    return (
    <div className="pt-2 relative w-fit mt-24 mx-auto text-gray-600">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Enter Git Clone String"
        value={searchValue}
        onChange={handleChange}
      />
      <button type="submit" onClick={() => onSubmit(searchValue)} className="absolute right-0 top-0 mt-5 mr-4">
        <FaSearch />
      </button>
    </div>
    
    )
  }
  return (
    <div>
      <SearchBar />
      <div className='mx-auto w-fit'>
        { message }
      </div>
      <div className='my-[25vh] mx-auto  w-[600px] border-4 rounded-xl shadow-black-100 shadow-md'>
        <div className='p-4'> 
          {/* Upper section */}
          <div className='flex justify-between'>
            <div className=''>
              {/* Title and description component */}
              <Titledescription title={repoData.title} description={repoData.description} repoUrl={repoData.repoUrl}/>
            </div> 
            <Profile imageUrl={repoData.imageUrl} profileUrl={repoData.profileUrl}/>
          </div>
        </div>
        <div className='px-4'> 
          {/* Lower section */}
          <Lowerbar contributors={repoData.contributors} stars={repoData.stars} issues={repoData.issues} forks={repoData.forks}/>
        </div>
        <div className='bg-orange-101/90	h-4 rounded-b-lg mt-4'></div> {/* Footer */}
      </div>
    </div>
  );
}

export default App;
