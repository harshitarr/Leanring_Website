import React from 'react'
import './Topcourse.css'
import python from './python.png'
import aiml from './aiml.png'
import webdev from './web dev.png'
import interview from './interviews.png'

const Topcourse = () =>{

    return(

        <div>

            <div className="explore">
                <h1 style={{ marginTop:'50px'}}>Top Courses We Offer</h1>
            </div>

            <div className="topcourses">

                <div className="course-card">
                    <div className="course-header">
                       <img src={python} alt='uiux'/>
                    </div>
                    <div className="course-body">
                        <h4>DSA to Development: A Complete Guide</h4>
                        <p className="course-level">Beginner to Advance</p>
                        <button>Buy now</button>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-header">
                       <img src={aiml} alt='aiml'/>
                    </div>
                    <div className="course-body">
                        <h4>AI and ML: A Complete Guide</h4>
                        <p className="course-level">Beginner to Advance</p>
                        <button>Buy now</button>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-header">
                       <img src={webdev} alt='webdev'/>
                    </div>
                    <div className="course-body">
                        <h4>Web Development: A Complete Guide</h4>
                        <p className="course-level">Beginner to Advance</p>
                        <button>Buy now</button>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-header">
                        <img src={interview} alt='interview'/>
                    </div>
                    <div className="course-body">
                        <h4>Interview:Tips and Tricks</h4>
                        <p className="course-level">Beginner to Advance</p>
                        <button>Buy now</button>
                    </div>
                </div>


            </div>

    </div>

    )
}

export default Topcourse