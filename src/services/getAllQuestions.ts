export const getAllQuestions = async () => {
  const response = await fetch("https://randomuser.me/api/?results=5");
  const data = await response.json();
  console.log(data);
  return data.results;
};
