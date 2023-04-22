import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import PlatformIconList from './PlatformIconList'
import Emoji from './Emoji'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
      <HStack marginBottom ={2} justifyContent='space-between'>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='16'>{game.name}<Emoji rating={game.raing_top}/></Heading>

      </CardBody>
    </Card>
  )
}

export default GameCard