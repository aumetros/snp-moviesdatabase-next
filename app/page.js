import Main from "components/Main";
import FilmsList from "components/FilmsList";
import Filter from "components/Filter";

export default function Home() {
  return (
    <Main>
      <Filter />
      <FilmsList />
    </Main>
  );
}
