import Header from './components/header/Header'
import YoutubeVideos from './components/youtubeVideos/YoutubeVideos'
import GoogleDoc from './components/googleDoc/GoogleDoc'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Stream from './pages/stream/Stream'
import "./Index.css"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/stream" element={<Stream />}></Route>
    </Routes>
  )
}

export default App;
