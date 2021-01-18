// import React, { useState, useEffect } from 'react';
// import Header from "./Header";
// import Input from "./Input";
// import SearchResultList from "./SearchResultList";
// import Nominations from './Nominations';
// import AddNomination from './AddNomination';
// import RemoveNomination from './RemoveNomination';

// const Home = () => {
//     const[movies, setMovies] = useState([]);
//     const[searchInput, setSearchInput] = useState('horror');
//     const[nominations, setNominations] = useState([]);

//     const getMovies = async (searchInput) => {
//         const url = `http://www.omdbapi.com/?s=${searchInput}&type=movie&apikey=939de7c0`;
//         // const url = `http://www.omdbapi.com/?s=${searchInput}&type=movie&apikey=${process.env.OMDB_KEY}`;
    
//         let res = await fetch(url);
    
//         if(!res.ok){
//             const message = `An error has occured: ${res.status}`
//             throw new Error(message);
//         }
    
//         const movies = await res.json();
    
//         console.log(movies)
    
//         if(movies.Search){
//             setMovies(movies.Search);
//         };
//     };

//     const saveToLocalStorage = movies => {
//         localStorage.setItem('nominated', JSON.stringify(movies));
//     };

//     const addNominatedMovie = (movie) => {
//         const newNominatedList = [...nominations, movie];
//         setNominations(newNominatedList);
//         saveToLocalStorage(newNominatedList);
//     };
    
//     const removeNominatedMovie = (movie) => {
//         const newNominatedList = nominations.filter((nominated) => nominated.imdbID !== movie.imdbID);
    
//         setNominations(newNominatedList);
//         saveToLocalStorage(newNominatedList)
//     };

//     useEffect (() => {
//         getMovies(searchInput);
//     },[searchInput]);

//     useEffect(() => {
//         const nominatedMovies = JSON.parse(
//             localStorage.getItem('nominated')
//         );

//         setNominations(nominatedMovies);
//     },[])
    
//     return (
//         <>  
//             <div className="header-container">
//                 <Header />
//                 <Input searchInput={searchInput} setSearchInput={setSearchInput}/>
//             </div>

//             <div className= "movie-section">
//                 <SearchResultList 
//                     movies={movies} 
//                     nominations={nominations}
//                     nominate={AddNomination}
//                     handleNominate = {addNominatedMovie}
//                 />
//             </div>
//         </>
//     );
// }

// export default Home;
