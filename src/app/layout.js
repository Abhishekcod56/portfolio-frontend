import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description:
    "Personal portfolio website powered by a custom CMS."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}