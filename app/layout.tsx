import ToasterContext from "./context/ToasterContext";
import "./globals.css";

export const metadata = {
  title: "Messenger Clone",
  description: "Real time chat app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToasterContext />
        {children}
        </body>
    </html>
  );
}
