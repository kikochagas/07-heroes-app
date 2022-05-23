import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string';
export const SearchScreen = () => {

  const navigate  = useNavigate();
  const location = useLocation();
  const {q = ''}  = queryString.parse(location.search);
  const initialForm = {
    searchText: q
  };

  const [ {searchText}, handleInputChange] = useForm( initialForm );


  const handleSearch= (e) => {
    e.preventDefault();
    console.log(searchText);
    //reset();
    navigate(`?q=${searchText}`);
  }
  const heroesFileted = useMemo(() => {
    return getHeroesByName(q)
  }, [q])


  return (
    <>
        <h1>SearchScreen</h1>
        <hr />
        <div className="row">
          <div className="col-5">
            <h4>Search</h4>
            <hr />
            <form onSubmit={handleSearch}>
              <input 
                type="text"
                placeholder='Search a hero...'
                className="form-control"
                name='searchText'
                autoComplete='off'
                value={searchText}
                onChange={handleInputChange} />

                <button 
                    className="btn btn-outline-primary mt-1 btn-block"
                    type="submit">
                      Search...
                    </button>


            </form>
          </div>
          <div className="col-7">
            <h4>Resultados</h4>
            <hr />

              {
                (q === '') 
                  ? <div className="alert alert-info">Buscar unn heroe</div>
                  : (heroesFileted.length === 0) 
                      && <div className="alert alert-danger">No hay resultados:  {q}</div>
              }






            {
              heroesFileted.map(hero =>(
                <HeroCard
                    key={hero.id}
                    {...hero}
                    />
              ))
            }

          </div>
        </div>
    </>
  )
}