import { NewsProvider } from "./context/NewsContext"
import Header from "./layouts/Header"
import Main from "./layouts/Main"

function App() {
  return (
    <div className="app">
      <NewsProvider>
        <Header></Header>
        <Main></Main>
      </NewsProvider>
    </div>
  )
}

export default App
