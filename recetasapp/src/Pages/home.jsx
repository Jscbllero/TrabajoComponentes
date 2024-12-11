import Header from "../Components/header"
import Footer from "../Components/footer"
import Menu from "../Components/menu"
import Aside from "../Components/aside"
import Content from "../Components/content"

export default function Home() {
  return (
    <><Header />
    <Menu />
    <div className="container mt-5">
      <div className="row">
        <Aside />
        <Content />
      </div>
    </div>
    
    
    <Footer />
    </>
  )
}
