export const fetchAllCharacters = async function (pageNum) {
  try {
    const response = await fetch(
      `https://api.disneyapi.dev/characters?page=${pageNum}`
    );
    if (!response.ok)
      throw Error("İstek gerçekleştirilemdi daha sonra tekrar deneyin");
    const data = await response.json();
    return data;
  } catch (error) {}
};

export const fetchCharacter = async function (id) {
  try {
    const response = await fetch(`https://api.disneyapi.dev/characters/${id}`);
    const data = await response.json();
    if (!response.ok)
      throw Error("İstek gerçekleştirilemdi daha sonra tekrar deneyin");
    return data;
  } catch (error) {}
};
