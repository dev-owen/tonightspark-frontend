const formatSeconds = (seconds: number) => {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  if (seconds < 60 * 60) {
    const mins = parseInt(`${seconds / 60}`);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  }
  const hours = parseInt(`${seconds / (60 * 60)}`);
  const mins = parseInt(`${(seconds - hours * 60 * 60) / 60}`);
  const secs = seconds % 60;
  return `${hours}h ${mins}m ${secs}s`;
};

export default formatSeconds;
