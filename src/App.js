import React, { useState, useEffect } from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import Header from "./components/Header";
import Input from "./components/Input";
import SearchResultList from "./components/SearchResultList";
import Nominations from "./components/Nominations";
import AddNomination from "./components/AddNomination";
import RemoveNomination from "./components/RemoveNomination";
import Modal from "./components/Modal";

const App = () => {
  const[movies, setMovies] = useState([]);
  const[searchInput, setSearchInput] = useState('horror');
  const[nominations, setNominations] = useState([]);
  const[modalStatus, setModalStatus] = useState(false);

  const getMovies = async (searchInput) => {
      const url = `http://www.omdbapi.com/?s=${searchInput}&type=movie&apikey=939de7c0`;
      // const url = `http://www.omdbapi.com/?s=${searchInput}&type=movie&apikey=${process.env.OMDB_KEY}`;
  
      let res = await fetch(url);
  
      if(!res.ok){
          const message = `An error has occured: ${res.status}`
          throw new Error(message);
      }
  
      const movies = await res.json();
  
      console.log(movies)
  
      if(movies.Search){
        setMovies(movies.Search);
      };
  };

  useEffect (() => {
    getMovies(searchInput);
  },[searchInput]);

  useEffect(() => {
    const nominatedMovies = JSON.parse(
        localStorage.getItem('nominated')
    );

    if(nominatedMovies){
      setNominations(nominatedMovies);
    }
  },[])

  const saveToLocalStorage = (movies) => {
    localStorage.setItem('nominated', JSON.stringify(movies));
  };

  const addNominatedMovie = (movie) => {
    const newNominatedList = [...nominations, movie];
    setNominations(newNominatedList);
    saveToLocalStorage(newNominatedList);
  };

  const removeNominatedMovie = (movie) => {
    const newNominatedList = nominations.filter((nominated) => nominated.imdbID !== movie.imdbID);

    setNominations(newNominatedList);
    saveToLocalStorage(newNominatedList)
  };

  const setStatus = (status) => {
    setModalStatus(!modalStatus);
  };


  return (
    <>
      {/* 
      <Header />
        - Put Input in Header component
        - Create context for Input to set the movie search to be used in SearchResultList
      */}
      <div className="header-container">
        <Header />
        <Input searchInput={searchInput} setSearchInput={setSearchInput}/>
      </div>
      <Switch>
        <Route exact path = "/" render={props =>
          <div className = "movie-section">
            <SearchResultList 
              movies={movies} 
              nominations={nominations}
              nominate={AddNomination}
              handleNominate = {addNominatedMovie}
              modal = {Modal}
              modalStatus =  {modalStatus}
              setModalStatus = {setStatus}
            />
          </div>
        }>
          
        </Route>
        <Route exact path = "/nominations" render={props => 
          <div className = "movie-section">
            <Nominations 
              movies = {nominations}  
              handleRemoveNomination = {removeNominatedMovie}
              remove = {RemoveNomination}
            />
          </div>
        }>
        </Route>
      </Switch>
    </>
  );
}

export default withRouter(App);
