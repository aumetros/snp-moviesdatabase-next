import { Open_Sans } from "next/font/google";
import "./globals.css";

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
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
