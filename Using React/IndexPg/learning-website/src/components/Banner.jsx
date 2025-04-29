import React from 'react'
import './Banner.css'
import banner from './banner1.png'

const Banner = () =>
{
    return(

        <div className="banner-container">

           <img src={banner} alt="banner" className="banner"/>

           <div className="banner-content">

                <h1>What Would You Like To Search ?</h1>
                <div className="search-box">
                  <input type="text" placeholder="Search for courses..."/>
                  <button>Search</button>
                </div>
              </div>

        </div>

    )
}

export default Banner