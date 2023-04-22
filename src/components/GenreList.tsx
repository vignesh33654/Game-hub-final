import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';


interface  Props{
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre : Genre | null;
}

const GenreList = ({selectedGenre,onSelectedGenre}: Props) => {
const {data, isLoading, error} = useGenres();
if (error) return null;
if (isLoading ) return <Spinner />;
  return (
<>
    <Heading fontSize='24px' fontWeight='bold'>Genres</Heading>
    <List>
      {data.map(genre => 
      <ListItem key={genre.id} paddingY='4px'>
        <HStack>
          <Image
          boxSize="32px"
          borderRadius={8}
          src ={getCroppedImageUrl(genre.image_background)}/>
          <Button textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'Bold' : 'normal'} onClick={() => onSelectedGenre(genre)} fontSize='12px' variant='link' >{genre.name}</Button>
        </HStack>
        </ListItem>)}
    </List>
    </>
  )
}

export default GenreList