// app/layout.tsx (Actualizat)
import SessionWrapper from "./components/SessionWrapper"; // <-- Importă wrapper-ul
import React from "react";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
