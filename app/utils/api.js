function checkResponse(res, message) {
  if (!res.ok) {
    throw new Error(message);
  }
  return res.json();
}

export async function getFilms() {
  const res = await fetch("http://localhost:3000/films");
  return checkResponse(res, "Failed to fetch data");
}
