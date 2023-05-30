import Header from '../../components/header/Header'
import WidgetBot, { API } from '@widgetbot/react-embed'

import "./Stream.css"

const Stream = () => {
  return (
  <div>
    <Header />
      <div id="stream-chat-wrapper">
        <div id="stream-width-wrapper">
          <div id="stream-wrapper">
            <iframe id="youtube-stream"
                    src="https://www.youtube.com/embed/live_stream?channel=UCg-XiYAkzmCQMrIHCsOfD6g">
            </iframe>
            <iframe id="twitch-stream" 
                    src="https://player.twitch.tv/?channel=shadowqrow&parent=localhost"
                    frameborder="0"
                    allowfullscreen="true"
                    scrolling="no">
            </iframe>
          </div>
          <button id="toggle-button">Switch Stream</button>
        </div>
            <WidgetBot
                server="299881420891881473"
                channel="355719584830980096"
            />
        </div>
  </div>
  )
}

export default Stream;
