import "../styles/globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Test Next 13</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
