import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "PC Moderation Dashboard",
  description: "Dashboard voor PC Moderation"
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
