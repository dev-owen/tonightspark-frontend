export const isCorrectUrlFormat = (url: string) => {
  return url.match(/\b(https):\/\/(zep.\us)\/(play)\/[0-9a-zA-Z]{6}\b/g);
};

export const isContainKorean = (word: string) => {
  return word.match(
    /[\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]/g,
  );
};
