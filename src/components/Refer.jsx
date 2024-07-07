import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../stylesheets/refer.css';
import Cash from '../assets/Cash.png';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

const Refer = () => {
    const navigate = useNavigate();
    const [Reference_Code, setReference_Code] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [userItems, setUserItems] = useState({
        Balance: 0,
        ReferralId: ""
    });

    useEffect(() => {
        const token = localStorage.getItem('auth-token');
        async function getItems() {
            try {
                const response = await axios.post('http://localhost:3000/getUserData', null, {
                    headers: {
                        Accept: 'application/form-data',
                        'auth-token': localStorage.getItem('auth-token')
                    }
                });
                setUserItems(response.data.userData);
                setLoaded(true);
            } catch (error) {
                console.log(error);
                if (error.response.data.errors === "Invalid auth-token") {
                    localStorage.removeItem('auth-token');
                    window.location.replace('/login');
                }
            }
        }
        if (token) {
            getItems();
        }
    }, []);

    if (!loaded) {
        return (
            <div className="Home" style={{ width: "100%", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ClipLoader />
            </div>
        );
    }

    if (!localStorage.getItem('auth-token')) {
        window.location.replace('/login');
    }

    return (
        <div className="Refer">
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
                    </div>
                    <div className="anniversaryPicture"></div>
                </div>
                <div className="referInput">
                    <img src={Cash} alt="Cash" className="Cash" id="cash1" />
                    <img src={Cash} alt="Cash" className="Cash" id="cash2" />
                    <img src={Cash} alt="Cash" className="Cash" id="cash3" />
                    <input
                        type="text"
                        value={userItems.ReferralId !== "" ? userItems.ReferralId : Reference_Code}
                        onChange={(e) => setReference_Code(e.target.value)}
                        disabled={userItems.ReferralId !== ""}
                    />
                    <div className="referralBtns">
                        <button disabled={userItems.ReferralId === ""}>Refer</button>
                        <button>Get your Referral Code</button>
                    </div>
                    <div className="warning">Please note! By getting a new Referral Code you will be unable to claim any unclaimed Referrals!</div>
                </div>
            </div>
        </div>
    );
}

export default Refer;
