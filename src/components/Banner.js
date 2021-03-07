import React from 'react'
import {FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaPlay} from 'react-icons/fa'

const Banner = () => {
    const[state]=React.useState({title:'FRESHCO CAFE', text:'Cafe with quality hospitality and hygienic Food. You won’t regret for coming here.', image:'/images/man-01.png'})
    return (
       <header className="header">
           <div className="container">
               <div className="row">
                   <div className="col-6">
                       <div className="header__content">
                       <div className="header__section">
                           <ul className="header__ul">
                                <li>
                                   <FaFacebook />
                                </li>
                                <li>
                                   <FaTwitter />
                                </li>
                                <li>
                                   <FaPinterest />
                                </li>
                                <li>
                                   <FaInstagram />
                                </li>
                           </ul>
                           <h1>{state.title}</h1>
                           <p>
                                {state.text}
                            </p>
                            <div className="header__buttons">
                                <a href="" className="btn btn-outline">
                                    My Portfolio
                                </a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="" className="btn btn-smart">
                                    <FaPlay className="play" />
                                </a>
                            </div>
                       </div>
                       </div>
                   </div>
                   <div className="col-6">
                       <div className="banner__img">
                           <img src={state.image} alt="man" width = "300" height = "600"/>
                       </div>
                   </div>
               </div>
           </div>
       </header>
    )
}

export default Banner
