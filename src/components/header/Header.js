import "./Header.css"

const Header = () => {
    return (
        <nav>
            <div>
                <input type="checkbox" id="check" ></input>
                <label for="check" class="checkbtn">
                    <i class="fa-solid fa-bars"></i>
                </label>
                <label class="logo">The Sanctuary</label>

                <ul class="socials">
                    <li><a href="" > <i class="fa-brands fa-patreon"></i> </a></li>
                    <li><a href="" > <i class="fa-brands fa-twitter"></i></a></li> 
                    <li><a href="" > <i class="fa-brands fa-youtube"></i></a></li>
                    <li><a href="" > <i class="fa-brands fa-twitch"></i></a></li>
                    <li><a href="" > <i class="fa-brands fa-tiktok"></i></a></li>
                    <li><a href="" > <i class="fa-brands fa-instagram"></i></a></li>
                </ul>
                
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Stream</a></li>
                </ul>
            </div>

            <div class="discord">
                <div>
                <i class="fa-brands fa-discord"/>
                </div>
                <div class="discord-text">
                    <p>Join</p>
                    <p>THE SANCTUARY</p>
                </div>
            </div>
        </nav>
    )
}

export default Header