import journalstyle from './Journal.module.css'
function Journal() {
    return (
       <section className={journalstyle.journal}>
           <div className={journalstyle.title}>The Journal</div>
           <div className={journalstyle.text}><p>
           Our favorite stories about public lands and opportunities for you to get
           involved in protecting your outdoor experiences.</p></div>
           <div className="container">
               <div className= {`row  ${journalstyle.padding}`}>
                   <div className="col-md-6">
                       <img src={require('../../photos/road.jpg')} alt=""  className={journalstyle.photo}/>
                       <div className={journalstyle.photoInfo}>
                           <div className={journalstyle.date}>
                               MAY 30,2017
                           </div>
                           <div className={journalstyle.place}> 
                           An Unforgettable
                           </div>
                           <div className={journalstyle.info}>
                               if you only have one day to nisit Yosemite 
                               National Park and you want to make the most out of it
                           </div>
                       </div>
                   </div>
                   <div className="col-md-6">
                       <img src={require('../../photos/pradge.jpg')} alt=""  className={journalstyle.photo}/>
                       <div className={journalstyle.photoInfo}>
                           <div className={journalstyle.date}>
                               MAY 28,2017
                           </div>
                           <div className={journalstyle.place}> 
                          Symphonies in Steel
                           </div>
                           <div className={journalstyle.info}>
                           Crossing the Golden Gate Bridge from San Francisco, you
                           arrive in Marin even before landing on solid ground.
                           </div>
                       </div>
                   </div>
               </div>
               <div className={journalstyle.seeMore}> <p>SEE MORE</p></div>
           </div>
           <div className="container">
               <div className="row">
                   <div className="col-md-12">
                   <img src={require('../../photos/Home.png')} alt=""  className={journalstyle.photo}/>
                   </div>
               </div>
           </div>
       </section>
    )
}

export default Journal
