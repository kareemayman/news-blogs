import { NewsProvider } from "./context/NewsContext"
import Header from "./layouts/Header"
import Main from "./layouts/Main"
import Footer from "./layouts/Footer"

function App() {
  return (
    <div className="app">
      <NewsProvider>
        <Header></Header>
        <Main></Main>
      </NewsProvider>
      <Footer></Footer>
    </div>
  )
}

export default App
