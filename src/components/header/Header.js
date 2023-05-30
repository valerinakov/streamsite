import "./Header.css"
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <div class="navbar">
                <input type="checkbox" id="check" ></input>
                <label for="check" class="checkbtn">
                    <i class="fa-solid fa-bars"></i>
                </label>
                <label class="logo"><a href="/" ><img src="https://i.imgur.com/StiL4gs.png"/></a></label>

                <ul class="socials">
                    <li><a href="https://www.patreon.com/ShadowQrow" target="blank"> <i class="fa-brands fa-patreon"></i> </a></li>
                    <li><a href="https://twitter.com/ShadowQrow" target="blank"> <i class="fa-brands fa-twitter"></i></a></li> 
                    <li><a href="https://www.youtube.com/SHADOWQROW" target="blank"> <i class="fa-brands fa-youtube"></i></a></li>
                    <li><a href="https://www.twitch.tv/shadowqrow/" target="blank"> <i class="fa-brands fa-twitch"></i></a></li>
                    <li><a href="https://www.tiktok.com/@shadowqrow" target="blank"> <i class="fa-brands fa-tiktok"></i></a></li>
                    <li><a href="https://www.instagram.com/shadow.qrow" target="blank"> <i class="fa-brands fa-instagram"></i></a></li>
                </ul>
                
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to="/stream">Stream</Link></li>
                </ul>
            </div>

            <div class="discord">
                <div class="discord-text">
                    <p>ENTER <a href="https://discord.gg/scwYSsEh"> <i class="fa-brands fa-discord"/> </a></p>
                    <p>THE SANCTUARY</p>
                </div>
            </div>
        </nav>
    )
}

export default Header