import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../stylesheets/home.css';
import Cash from '../assets/Cash.png';
import CustomerService from '../assets/Customerservice.png';
import SubHeader from './SubHeader';

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
        <SubHeader/>
        <div className="Home" id="home">
            <div className="anniversaryAnnouncementContainer">
                <div className="anniversaryAnnouncement">
                    <img src={Cash} id="cash1" className='Cash' alt="Cash.png" />
                    <img src={Cash} id="cash2" className='Cash' alt="Cash.png" />
                    <img src={Cash} id="cash3" className='Cash' alt="Cash.png" />
                    <img src={Cash} id="cash4" className='Cash' alt="Cash.png" />
                    <img src={Cash} id="cash5" className='Cash' alt="Cash.png" />
                    <div className="referDialogueContainer">
                        <div className="referDialogue">
                            <h1>Let's Learn</h1>
                            <h1>& Earn</h1>
                        </div>
                        <div className="referDialogueSub">
                            <div id="referDialogueSub1">Get a chance to win</div>
                            <div id="referDialogueSub2">up-to <h1>Rs. 15,000</h1></div>
                        </div>
                        <button onClick={() => navigate('/refer')}>
                            Refer Now
                        </button>
                    </div>
                    <div className="anniversaryPicture"></div>
                </div>
            </div>
            <div className="Benifits">
                <h3>How Do I <span>Refer?</span></h3>
                <div className="binifitsCircles">
                    <div className="circleContent">
                        <i className="fa-solid fa-user-plus"></i>
                        <p>Submit referrals easily via our website’s referral section.</p>
                    </div>
                    <div className="circleContent">
                        <i className="fa-solid fa-clipboard-list"></i>
                        <p>Earn rewards once your referral joins an Accredian program.</p>
                    </div>
                    <div className="circleContent">
                        <i className="fa-solid fa-wallet"></i>
                        <p>Both parties receive a bonus 30 days after program enrollment.</p>
                    </div>
                </div>
                <button onClick={() => navigate('/refer')}>
                    Refer Now
                </button>
            </div>
            <div className="referralBenifits" id="benifits">
                <h3>What Are The <span>Referral Benefits?</span></h3>
                <div className="tablesContainer">
                    <div className="enrolledOuter">
                        <div className="enrolled">
                            Enrolled
                            <i className="fa-solid fa-toggle-on"></i>
                        </div>
                    </div>
                    <div className="tables">
                        <table className='table1'>
                            <thead>
                                <tr>
                                    <th>
                                        <p>All Programs</p> 
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Product Management</p>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Strategy & Leadership</p>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Business Management</p>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Fintech</p>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Senior Management</p>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Data Science</p>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td>
                                        <p>Digital Transformation</p>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Business Analytics</p>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className='table2'>
                            <thead>
                                <tr>
                                    <th>Programs</th>
                                    <th>Referrer Bonus</th>
                                    <th>Referee Bonus</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <i className="fa-solid fa-graduation-cap"></i>
                                        <p>Professional Certificate Program in Product Management</p>
                                    </td>
                                    <td>₹ 7,000</td>
                                    <td>₹ 9,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="fa-solid fa-graduation-cap"></i>
                                        <p>PG Certificate Program in Strategic Product Management</p>
                                    </td>
                                    <td>₹ 7,000</td>
                                    <td>₹ 9,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="fa-solid fa-graduation-cap"></i>
                                        <p>Executive Program in Data Driven Product Management</p>
                                    </td>
                                    <td>₹ 7,000</td>
                                    <td>₹ 9,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="fa-solid fa-graduation-cap"></i>
                                        <p>Executive Program in Product Management and Digital Transformation</p>
                                    </td>
                                    <td>₹ 7,000</td>
                                    <td>₹ 9,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="fa-solid fa-graduation-cap"></i>
                                        <p>Executive Program in Product Management</p>
                                    </td>
                                    <td>₹ 7,000</td>
                                    <td>₹ 9,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="fa-solid fa-graduation-cap"></i>
                                        <p>Advanced Certification in Product Management</p>
                                    </td>
                                    <td>₹ 7,000</td>
                                    <td>₹ 9,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="fa-solid fa-graduation-cap"></i>
                                        <p>Executive Program in Product Management and Project Management</p>
                                    </td>
                                    <td>₹ 7,000</td>
                                    <td>₹ 9,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="showMorebuttonOuter">
                        <div className="showMoreBtn">
                            Show More
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>  
                </div>
                <button onClick={() => navigate('/refer')}>
                    Refer Now
                </button>
            </div>
            <div className="Faqs" id="faqs">
                <h3>What Are The <span>Referral Benefits?</span></h3>
                <div className="faqsContainer">
                    <div className="faqBtnContainer">
                        <button className='faqBtn Active'>Eligibility</button>
                        <button className='faqBtn'>How to Use?</button>
                        <button className='faqBtn'>Terms & Conditions</button>
                    </div>
                    <div className="faqArea">
                        <div className="question">
                            <p>Do I need to have prior Product Management and Project Management experience to enroll in the program?</p>
                            <i className="fa-solid fa-chevron-up"></i>
                        </div>
                        <p>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
                        suitable for individuals from any field of work.</p>
                        <div className="extraQuestion">
                            <p>What is the minimum system configuration required?</p>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="getInTouchBoxContainer" id="support">
                <div className="getInTouchBox">
                    <div className="circlesDesign1">
                        <div className="circlesDesign2">
                            <div className="circlesDesign3"></div>
                        </div>
                    </div>
                    <div className="getInTouchDialogueBox">
                        <div className="getInTouchDialogue">
                            <div className="customerService">
                                <div className="customerServiceImg">
                                    <img src={CustomerService} alt="Customer Service" />
                                </div>
                            </div>
                            <div className="getInTouchDialogueInner">
                                <h1>Want to delve deeper into the program?</h1>
                                <p>Share your details to receive expert insights from our program team!</p>
                            </div>
                        </div>
                        <button>Get in touch <i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
