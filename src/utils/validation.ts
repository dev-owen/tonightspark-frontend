export const isCorrectUrlFormat = (url: string) => {
  return url.match(/\b(https):\/\/(zep.\us)\/(play)\/[0-9a-zA-Z]{6}\b/g);
};
