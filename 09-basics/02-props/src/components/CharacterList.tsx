import type { FC } from 'react';
import {
    Avatar,
    Box,
    Flex,
    Heading,
    List,
    ListItem,
    Text,
} from '@chakra-ui/react';

export interface Character {
    id: number;
    name: string;
    grade: number;
    height?: number;
}

type Props = {
    school: string;
    characters: Character[];
};

// return文削除
const CharacterList: FC<Props> = ({ school, characters }) => (
    <div>
        <Heading size="md" as="h2">
            {school}
        </Heading>
        <List my={8}>
            {characters.map((character) => (
                <ListItem key={character.id} m={6}>
                    <Flex>
                        <Avatar size="md" bg="teal.500" />
                        <Box textAlign="left" ml={3}>
                            <Text>{character.name}</Text>
                            <Text as="span">{character.grade}年生</Text>
                            <Text as="span" ml={2}>
                                {/* eslint-disable-next-line @typescript-eslint/strict-boolean-expressions */}
                                {character.height ?? '???'} {/* null合体演算子 */}
                                cm
                            </Text>
                        </Box>
                    </Flex>
                </ListItem>
            ))}
        </List>
    </div>
);

export default CharacterList;