import Explorecss from './Explore.module.css'
function Explore() {
    return <>
    <section className={Explorecss.Explore}>
    <div className={`container text-center mb-5 ${Explorecss.Text}`}>
        <h4>Explore the World</h4>
        <p className={Explorecss.p}>We seek to provide the most authentic content from athletes,adventurers,explorers and travellers around the world.Ourlong-term mission is to educate,
            inspire and enable all peoples to experience & protect wilderness.</p>
    </div>
    <div className="container position-relative">
        <div className={`row pb-5 g-4 ${Explorecss.padding}`}>
            <div className="col-md-4 position-relative">
                <div className={Explorecss.Gradient}></div>
            <img src={require("../../photos/photo1.jpg")} className={Explorecss.photo}/>
            <div className={Explorecss.Phototext}>
                <h5>Naeroyfjorden</h5>
                <h6 className="text-center">NORWAY</h6>
            </div>
            </div>
            <div className="col-md-4 position-relative">
            <div className={Explorecss.Gradient}></div>
            <img src={require("../../photos/photo3.jpg")} className={Explorecss.photo}/>
            <div className={Explorecss.Phototext}>
                <h5 className="text-center">AntelopeCanyon</h5>
                <h6 className="text-center">UNITED STATES</h6>
            </div>
            </div>
            <div className="col-md-4 position-relative">
            <div className={Explorecss.Gradient}></div>
            <img src={require("../../photos/photo2.jpg")} className={Explorecss.photo}/>
            <div className={Explorecss.Phototext}>
                <h5>Grossglocekner</h5>
                <h6 className="text-center">AUSTRIA</h6>
            </div>
            </div>
            <div className={Explorecss.seeMore}> <p>SEE MORE</p></div>
        </div>
    </div>
    </section>
    </>
}

export default Explore
