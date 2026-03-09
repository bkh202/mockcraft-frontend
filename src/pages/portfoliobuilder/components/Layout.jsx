import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased transition-colors duration-300">
      <Header />
      <main className="grow flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;