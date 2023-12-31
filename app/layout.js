import { Open_Sans } from "next/font/google";
import "styles/globals.css";
import Container from "components/Container";
import Header from "components/Header";
import Footer from "components/Footer";
import ModalAddFilm from "components/Modal/ModalAddFilm";
import ModalPreviewFilm from "components/Modal/ModalPreviewFilm";
import ModalEditFilm from "components/Modal/ModalEditFilm";
import { StoreProvider } from "store/StoreProvider";

const openSans = Open_Sans({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["cyrillic"],
  display: "swap",
});

export const metadata = {
  title: "Movies DataBase",
  description: "Приложение для коллекции фильмов.",
  keywords: "Фильмы, коллекция, постеры, режиссеры",
  author: "Алексей Шевляков",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={openSans.className}>
        <StoreProvider>
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
          <ModalAddFilm />
          <ModalPreviewFilm />
          <ModalEditFilm />
        </StoreProvider>
      </body>
    </html>
  );
}
