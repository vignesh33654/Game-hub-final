import { gameQuery } from "../App";
import useData from "./useData";

export interface Platform { 
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  raing_top : number;
}

const useGames = (
  GameQuery : gameQuery ) => 

useData<Game>('/games', {
  params :  {
    genres: GameQuery.genre?.id, 
    platforms: GameQuery.platform?.id,
    ordering : GameQuery.sortOrder,
    search : GameQuery.searchText
  }
},[GameQuery]);

export default useGames;