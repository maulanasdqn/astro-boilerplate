import type { ErrorComplete, ErrorWithMessage } from "@util/types/error.type";

const isErrorWithMessage = (error: unknown): error is ErrorWithMessage => {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as Record<string, unknown>).message === "string"
  );
};

const toErrorWithMessage = (maybeError: unknown): ErrorWithMessage => {
  if (isErrorWithMessage(maybeError)) return maybeError;
  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
};

export const getErrorMessage = (error: unknown): string =>
  toErrorWithMessage(error).message;

export const messageParser = (error: unknown): string => JSON.parse(`${error}`);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleError = (error: any): ErrorComplete => error.response.data;

export const toPascalCase = (str: string) =>
  (str = str.replace(/(\w)(\w*)/g, function (_g0, g1, g2) {
    return g1.toUpperCase() + g2.toLowerCase();
  }));

export const displayImage = (str: string) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${str}.png`;
