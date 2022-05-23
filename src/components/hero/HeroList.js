import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => {
        return getHeroesByPublisher(publisher);
      }, [publisher])
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`);
    }


  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
        {
            heroes.map(hero => (
                <HeroCard 
                    key={hero.id}
                    {...hero} />
            ))
        }
    </div>
  )
}
