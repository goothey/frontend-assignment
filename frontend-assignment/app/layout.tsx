import './globals.css'; // importing global css


export const metadata = {
  title: 'Advanced Front-End Assignment - Karan Rana Magar (n01742592)',
  description: 'Assignment 1: React + Next.js demo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navigation menu - required for deliverable 1 */}
        <header className="navbar">
          <nav className="nav-links">
            <a href="/"> Home</a>
            <a href="/counter"> Counter</a>
            <a href="/todo">Todo</a>
          </nav>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
