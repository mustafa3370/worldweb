import Homestyle from './Home.module.css'
import Explore from './../Explore/Explore';
import Journal from './../Journal/Journal';

function Home() {
    return (
        <>
        
            <div className={`container-fluid ${Homestyle.Home}`}>
            <ul className={`nav justify-content-evenly ${Homestyle.nav}`}>
  <li className="nav-item">
    <a className={`nav-link ${Homestyle.link}`} href="#">ABOUT </a>
  </li>
  <li className="nav-item">
    <a className={`nav-link ${Homestyle.link}`} href="#">EXPLORE</a>
  </li>
  <li className="nav-item">
    <a className={`nav-link  ${Homestyle.Font}`} href="#"><i class="fa-solid fa-location-dot"></i></a>
  </li>
  <li className="nav-item">
    <a className={`nav-link ${Homestyle.link}`} href="#">JOURNAL</a>
  </li>
  <li className="nav-item">
    <a className={`nav-link ${Homestyle.link}  `} href="#"><i class="fa-solid fa-magnifying-glass"></i>SEARCH</a>
  </li>
</ul>
                <div className="row">
                    <div className="col-md-12">
                        <div className={Homestyle.text}>
                        <h1 className="text-center">The Great Outdoors</h1>
                        <h6 className="text-center">Wander often. Wonder always</h6>
                        </div>
                      
                    </div>
                </div>
            </div>
            <Explore/>
            <Journal/>
        </>
        
    )
}

export default Home
