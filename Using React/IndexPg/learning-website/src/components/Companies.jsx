import React from 'react'
import './Companies.css'
import microsoft from './microsoft.jpg'
import jp from './jp.png'
import uber from './uber.jpg'
import amazon from './amazon.jpg'
import flipcart from './flipcart.png'
import zoho from './zoho.png'
import wipro from './wipro.webp'

const Companies = () => {
    return (
        <div>
            <div className="explore" style={{ paddingTop: '50px' }}>
                <h1>Top Companies</h1>
                <p style={{ paddingTop: '30px', textAlign: 'center', fontSize: '20px' }}>
                    Leading companies recommend us for learning.
                    Boost your skills with trusted <br />expertise. Learn from the best, recommended by the best
                </p>
            </div>

            <div className="coms" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                <div className="com-content"><img src={microsoft} alt="Microsoft" /></div>
                <div className="com-content"><img src={jp} alt="JP" /></div>
                <div className="com-content"><img src={uber} alt="Uber" /></div>
                <div className="com-content"><img src={amazon} alt="Amazon" /></div>
                <div className="com-content"><img src={flipcart} alt="Flipkart" /></div>
                <div className="com-content"><img src={zoho} alt="Zoho" /></div>
                <div className="com-content"><img src={wipro} alt="Wipro" /></div>

                <div className="com-content"><img src={microsoft} alt="Microsoft" /></div>
                <div className="com-content"><img src={jp} alt="JP" /></div>
                <div className="com-content"><img src={uber} alt="Uber" /></div>
                <div className="com-content"><img src={amazon} alt="Amazon" /></div>
                <div className="com-content"><img src={flipcart} alt="Flipkart" /></div>
                <div className="com-content"><img src={zoho} alt="Zoho" /></div>
                <div className="com-content"><img src={wipro} alt="Wipro" /></div>
            </div>
        </div>
    )
}

export default Companies;
