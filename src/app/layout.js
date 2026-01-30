import { Toaster } from "react-hot-toast";
import "./globals.css";
import "./style.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
