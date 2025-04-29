import React from 'react'
import './Course.css'

const Course = () => {
    return (
        <div>
            <div className="explore">
                <h1>Programming Languages</h1>
            </div>

            <div className="courses">
                <div className="course-box" style={{backgroundColor:'#b2e0e7'}}>
                    <div className="course-content">
                        <p>Python</p>
                    </div>
                </div>

                <div className="course-box" style={{backgroundColor:'#d9f3e2'}}>
                    <div className="course-content">
                        <p>Java</p>
                    </div>
                </div>

                <div className="course-box" style={{backgroundColor:'#b2e0e7'}}>
                    <div className="course-content">
                        <p>C++</p>
                    </div>
                </div>

                <div className="course-box" style={{backgroundColor:'#d9f3e2'}}>
                    <div className="course-content">
                        <p>C</p>
                    </div>
                </div>
            </div>

            <div className="courses">
                <div className="course-box" style={{backgroundColor:'#d9f3e2'}}>
                    <div className="course-content">
                        <p>Flutter</p>
                    </div>
                </div>

                <div className="course-box" style={{backgroundColor:'#b2e0e7'}}>
                    <div className="course-content">
                        <p>Golang</p>
                    </div>
                </div>

                <div className="course-box" style={{backgroundColor:'#d9f3e2'}}>
                    <div className="course-content">
                        <p>PHP</p>
                    </div>
                </div>

                <div className="course-box" style={{backgroundColor:'#b2e0e7'}}>
                    <div className="course-content">
                        <p>R</p>
                    </div>
                </div>
            </div>

            
            <div className="explore">
                <h1>Web Development</h1>
            </div>

            <div className="courses">
                <div className="course-box" style={{backgroundColor: '#e6e6fa'}}>
                    <div className="course-content">
                        <p>Html</p>
                    </div>
                </div>

                <div className="course-box" style={{backgroundColor: '#e3dedc'}}>
                    <div className="course-content">
                        <p>Css</p>
                    </div>
                </div>

                <div className="course-box" style={{backgroundColor: '#e6e6fa'}}>
                    <div className="course-content">
                        <p>Javascript</p>
                    </div>
                </div>

                <div className="course-box" style={{backgroundColor: '#e3dedc'}}>
                    <div className="course-content">
                        <p>Node js</p>
                    </div>
                </div>
            </div>

            <div className="courses">
                <div className="course-box" style={{backgroundColor: '#e3dedc'}}>
                    <div className="course-content">
                        <p>React js</p>
                    </div>
                </div>

                <div className="course-box" style={{backgroundColor: '#e6e6fa'}}>
                    <div className="course-content">
                        <p>Next js</p>
                    </div>
                </div>

                <div className="course-box" style={{backgroundColor: '#e3dedc'}}>
                    <div className="course-content">
                        <p>Mongo DB</p>
                    </div>
                </div>

                <div className="course-box" style={{backgroundColor: '#e6e6fa'}}>
                    <div className="course-content">
                        <p>SQL</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;
