"use client";

import { ChakraProvider as ChakraProviderBase } from "@chakra-ui/react";

export function ChakraProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProviderBase>{children}</ChakraProviderBase>;
}
