import React from 'react';
import {FaGithub, FaCoffee, FaPizzaSlice, FaBeer,FaBirthdayCake } from 'react-icons/fa';


const Services = () => {
    const[header]=React.useState({
        mainHeader:"SERVICES",
        subHeading:"Our Services", 
        text:" All our coffees, drinks and meals are available in the dining room or to take-out. We accept reservations and call-in orders."
    });

    const [state] = React.useState([
        {
            id:1,
            icon:<FaCoffee  className="commonIcons"/>,
            heading:"Hot beverages",
            text:" description",
        },
        {
            id:2,
            icon:<FaPizzaSlice className="commonIcons"/>,
            heading:"Fast food",
            text:" description",
        },
        {
            id:3,
            icon:<FaBeer className="commonIcons"/>,
            heading:"Liquors ",
            text:" description",
        },
        {
            id:4,
            icon:<FaBirthdayCake className="commonIcons"/>,
            heading:"Bakery items",
            text:" description",
        }          
    ]);
    
    return (
        <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

                    <div className="row bgMain">
                        {/* loop chalako */}
                        {state.map(info=>(
                            <div className="col-4 bgMain">
                            <div className="services__box">
                               {info.icon}
                                <div className="services__box-header">{info.heading}</div>
                                <div className="services__box-p">
                                    {info.text}
                                </div>
                            </div>
                        </div>

                        ))}
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Services
