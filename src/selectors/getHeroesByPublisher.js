import { heroes } from "../data/heroes"
export const getHeroesByPublisher = (publisher) => {
    console.log("getHeroesByPublisher");
    return heroes.filter(hero => hero.publisher === publisher)
}