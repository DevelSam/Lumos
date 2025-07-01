import Header from '../../Header/Header.jsx'
import Footer from '../../Footer/Footer.jsx'
function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
