import React from 'react';

const SearchResultList = (props) => {
    const Nominate = props.nominate;
    const Modal = props.modal;

    return(
        <React.Fragment>
            {props.movies.map((movie,i) => (
                <div className="item-container" key={i}>
                    {movie.Poster !== "N/A" && 
                        <img src={movie.Poster} alt='movie'></img>
                    }
                    <div 
                        className="info-section"
                        onClick = {() => props.handleNominate(movie)}
                    >
                        <div>{movie.Title}({movie.Year})</div>
                        {props.nominations.filter(item => item.imdbID === movie.imdbID).length === 0 && props.nominations.length<5 &&
                            <Nominate />
                        }           
                    </div>
                </div>
            ))}
            {props.nominations.length === 5 &&
                <Modal status={props.modalStatus} changeStatus = {props.setModalStatus}/>
            }
        </React.Fragment>
    );
};

export default SearchResultList;