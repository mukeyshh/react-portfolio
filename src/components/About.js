import React from 'react'

const About = () => {
    const[state]=React.useState({subHeader:"About Us", text:"Cafe with quality hospitality and hygienic Food. You won’t regret for coming here."})

    const [state1] = React.useState([
        { id: 1, title: "Name:", text: "Ujjwal Chaudhary" },
        { id: 2, title: "Email:", text: "example@domain.com" },
        { id: 3, title: "Phone:", text: "+1 023 454 345" },
      ]);
    return (
        <div className="about">
            <div className="container">
            <div className="common">
            <h1 className="mainHeader">{state.subHeader}</h1>
            <p className="mainContent">{state.text}</p>
            <div className="commonBorder"></div>
          </div>
          <div className="row h-650 alignCenter">
              <div className="col-6">
                <div className="about__img">
                    <img src="/images/man-02.png" alt="man" width = "300" height = "340" />    
                </div>
              </div>
              <div className="col-6">
                <div className="about__info">
                    <h1>Hi there</h1>
                    <div className="about__info-p">
                    When people think of coffee, they usually think of its ability to provide an energy boost. However, according to some research, it can also offer some other important health benefits, such as a lower risk of liver cancer, type 2 diabetes, and heart failure.
                    </div>
                    <div className="info__contacts">
                         <div className="row">
                            {state1.map((info) => (
                                <div className="col-6">
                                    <strong>{info.title}</strong>
                                        <p>{info.text}</p>
                                    </div>
                                ))}
                </div>
              </div>
                </div>
              </div>
          </div>
          </div>   
        </div>
    )
}

export default About
