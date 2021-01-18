import React from "react";

const Nominations = (props) => {
    const Remove = props.remove;

    return (
        <React.Fragment>
            {props.movies ? props.movies.map((movie) => (
                <div key={movie.imdbID}>
                    <img src={movie.Poster} alt='movie'></img>
                    <div>{movie.Title}</div>
                    <div 
                        onClick = {() => props.handleRemoveNomination(movie)}
                    >
                        <Remove />
                    </div>
                </div>
            )): <div className="nomination-heading">Nominate your favorite movies</div>
            }
        </React.Fragment>
    );
}

export default Nominations;
