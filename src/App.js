import Header from './components/header/Header'
import YoutubeVideos from './components/youtubeVideos/YoutubeVideos'
import GoogleDoc from './components/googleDoc/GoogleDoc'
import "./Index.css"

const App = () => {
  return (
  <div>
    <Header/>
    <div class='main'>
      <div class="youtube-box">
        <YoutubeVideos/>
      </div>
      <div class="google-box">
        <GoogleDoc />
      </div>
      <div class="youtube-box">
        <YoutubeVideos />
      </div>
    </div>
  </div>
  )
}

export default App;
