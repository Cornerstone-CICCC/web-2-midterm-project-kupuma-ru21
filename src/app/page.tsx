import { Box, Flex, Input, Link } from "@chakra-ui/react";
import { MovieCard } from "./components/movie-card";
import { Title } from "./components/title";

export default function Page() {
  return (
    <Box pb="20px">
      <Box textAlign="center" mb="20px">
        <Title />
        <Flex justifyContent="center" gap="20px" mb="20px">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </Flex>
        <Input placeholder="Search Movie" width="70%" />
      </Box>
      <MovieCard />
    </Box>
  );
}
