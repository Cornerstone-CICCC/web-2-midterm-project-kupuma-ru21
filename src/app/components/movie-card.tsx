"use client";
import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Breakpoint, useBreakpoint } from "./hooks/useBreakpoint";

export const MovieCard = () => {
  const { breakpoint } = useBreakpoint();
  return (
    <Flex w={getFlexWidth(breakpoint)} flexWrap="wrap" gap="20px" margin="auto">
      {MOVIES.map(({ title, description }) => {
        return (
          <Card w={getCardWidth(breakpoint)} key={title}>
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{title}</Heading>
                <Text>{description}</Text>
              </Stack>
            </CardBody>
          </Card>
        );
      })}
    </Flex>
  );
};

const MOVIES = [
  { title: "Movie1", description: "This is a movie1" },
  { title: "Movie2", description: "This is a movie2" },
  { title: "Movie3", description: "This is a movie3" },
  { title: "Movie4", description: "This is a movie4" },
  { title: "Movie5", description: "This is a movie5" },
  { title: "Movie6", description: "This is a movie6" },
  { title: "Movie7", description: "This is a movie7" },
  { title: "Movie8", description: "This is a movie8" },
];

const getFlexWidth = (breakpoint: Breakpoint) => {
  if (breakpoint === "lg") return "940px";
  if (breakpoint === "md") return "640px";
};

const getCardWidth = (breakpoint: Breakpoint) => {
  if (breakpoint === "lg") return "300px";
  if (breakpoint === "md") return "200px";
};
