import { Heading } from '@chakra-ui/react'
import { gameQuery } from '../App'

interface Props{
    GameQuery : gameQuery;
}

const GameHeading = ({GameQuery} : Props) => {

    const heading = `${GameQuery.platform?. name || ''}
    ${GameQuery.genre ?. name || ''} Games`;
  return (
    <Heading as  = 'h1' marginY={5}>{heading}</Heading>
  )
}

export default GameHeading