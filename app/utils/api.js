function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

export async function getFilms() {
  const res = await fetch("http://localhost:3000/films");
  return checkResponse(res);
}
