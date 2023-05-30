import Header from '../../components/header/Header'
import YoutubeVideos from '../../components/youtubeVideos/YoutubeVideos'
import GoogleDoc from '../../components/googleDoc/GoogleDoc'
import WidgetBot, { API } from '@widgetbot/react-embed'
import Crate from '@widgetbot/crate/dist/api'
import "./Home.css"

const Home = () => {
  return (
  <div>
    <Header/>
    <div class='main'>

      <div class="google-box">
        <GoogleDoc />
      </div>
    
    </div>
  </div>
  )
}

export default Home;
