import localFont from "next/font/local";
import "./globals.css";
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Dealls Job",
  description: "Dealls Job Case Study: Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav className="navbar navbar-expand-lg navbar-light navbar-brand-title">
          <a className="navbar-brand-label" href="/">Dealls Job</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
