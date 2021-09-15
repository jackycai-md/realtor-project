export const formatTime = (timestamp) => {
  if (!timestamp) {
    return '';
  }

  const date = new Date(timestamp);

  return date.toLocaleTimeString('en-US', { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
};