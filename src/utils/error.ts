const identifier = "[ChromaUI] -> ";

export const error = {
  identifier,
  dispatch: (message: string) => {
    throw new Error(identifier + message);
  }
}