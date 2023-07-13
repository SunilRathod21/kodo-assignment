export const formattedDate = (dateTime) => {
  const date = new Date(dateTime);
  return date.toLocaleString(); 
};

export const sortByName = (arr) => {
  return arr.sort((a, b) => a.name.localeCompare(b.name));
}

export const sortByDate = (arr) => {
  return arr.sort((a, b) => new Date(b.dateLastEdited) - new Date(a.dateLastEdited));
}