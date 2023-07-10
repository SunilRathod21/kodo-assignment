export const formattedDate = (dateTime) => {
  const date = new Date(dateTime);
  return date.toLocaleString(); 
};

