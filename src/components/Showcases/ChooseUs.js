import React from 'react'
import img_greyBackground from "../../assets/images/grey-background.svg"
import img_chooseUs from "../../assets/images/choose-us.png"
import ChooseusBox from '../Toolboxes/ChooseusBox'

function ChooseUs() {
  return (
        <>
                    <section className="choose-us">
                <img className="grey-background" src={img_greyBackground} alt="background-lines"/>
                <div className=" container">
                    <div className="reasons">   
                        <div className="headline">
                            <h3>Why choose us</h3>
                            <h2>Why We Are The Best Business Consulting Agency</h2>
                        </div>
                        <ChooseusBox title="Process Exellence" description="Lorem ipsum dolor sit amet consectetur." />
                        <ChooseusBox title="Strategic Planning" description="Lorem ipsum dolor sit amet consectetur." />
                        <ChooseusBox title="Experience Design" description="Lorem ipsum dolor sit amet consectetur."/>
                        <ChooseusBox title="Artificial Inteligence" description="Lorem ipsum dolor sit amet consectetur."/>
                    </div>
                    <div className="image-choose-us">
                        <img src={img_chooseUs}  alt="company people"/>
                </div>
                </div>
            </section>
        </>

  )
}

export default ChooseUs