import React from 'react';
import '../stylesheets/footer.css';
import AccredianLogo from '../assets/AccredianLogo.png';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footerContainer">
                <div className="LogoAndSchedule">
                    <img src={AccredianLogo} alt="Accredian" />
                    <div className="Schedule">
                        <button>Schedule 1-on-1 Call Now</button>
                        <p>Speak with our Learning Advisor</p>
                    </div>
                </div>
                <hr />
                <div className="extraLinks">
                    <div className="Programs">
                        <h3>Programs</h3>
                        <ul>
                            <li><p>Data Science & AI</p> <i className="fa-solid fa-plus"></i></li>
                            <li><p>Product Management</p> <i className="fa-solid fa-plus"></i></li>
                            <li><p>Business Analytics</p> <i className="fa-solid fa-plus"></i></li>
                            <li><p>Digital Transformation</p> <i className="fa-solid fa-plus"></i></li>
                            <li><p>Business Management</p> <i className="fa-solid fa-plus"></i></li>
                            <li><p>Project Management</p> <i className="fa-solid fa-plus"></i></li>
                            <li><p>Strategy & Leadership</p> <i className="fa-solid fa-plus"></i></li>
                            <li><p>Senior Management</p> <i className="fa-solid fa-plus"></i></li>
                            <li><p>Fintech</p> <i className="fa-solid fa-plus"></i></li>
                        </ul>
                    </div>
                    <div className="ContactUs">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><a href="mailto:admissions@accredian.com">Email us (For Data Science Queries): admissions@accredian.com</a></li>
                            <li><a href="mailto:pm@accredian.com">Email us (For Product Management Queries):pm@accredian.com</a></li>
                            <li><a href="tel:+91 9079653292">Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</a></li>
                            <li><a href="tel:+91 9625811095">Product Management Admission Helpline:+91 9625811095</a></li>
                            <li><a href="tel:+91 7969322507">Enrolled Student Helpline: +91 7969322507</a></li>
                        </ul>
                        <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
                        <h3>Why Accredian?</h3>
                        <div className="followContainer">
                            <h3>Follow Us</h3>
                            <div className="Logos">
                                <i className="fa-brands fa-square-facebook"></i>
                                <i className="fa-brands fa-linkedin"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                    </div>
                    <div className="AccredianLinks">
                        <h3>Accredian</h3>
                        <ul>
                            <li><a href="https://accredian.com/About">About</a></li>
                            <li><a href="https://accredian.com/Career">Career</a></li>
                            <li><a href="https://accredian.com">Blog</a></li>
                            <li><a href="https://accredian.com/policies/accredian-policy">Admission Policy</a></li>
                            <li><a href="https://accredian.com/terms/referral">Referral Policy</a></li>
                            <li><a href="https://accredian.com/terms/privacy">Privacy Policy</a></li>
                            <li><a href="https://accredian.com/terms">Terms Of Service</a></li>
                            <li><a href="https://accredian.com/Faq">Master FAQs</a></li>
                        </ul>
                    </div>
                </div>
                <p>© {new Date().getFullYear()} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
