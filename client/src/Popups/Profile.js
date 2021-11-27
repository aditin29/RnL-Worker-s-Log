import React from 'react';
import './Profile.css';
import CloseIcon from '@material-ui/icons/Close';

function Profile({setTrig, worker}) {
    return  (
        <div className="cw">
            {/* <div className="cw__nav" >
                <Navbar />
            </div> */}

            <CloseIcon className="profile__back" onClick={() => setTrig(false)} style={{fontSize: "30px"}} />
            
            <div className="cw__container" >
                <div className="profile__lcontent">
                    <h2 >Worker's personal details</h2>
                    <h3>Name</h3>
                    <p>{worker.name}</p>
                    <h3>Aadhar No.</h3>
                    <p>{worker.aadharNo}</p>
                    <h3>Phone No.</h3>
                    <p>{worker.phoneNo}</p>
                    <h3>Address</h3>
                    <p>{worker.address}</p>
                    <h3>Date Of Joining</h3>
                    <p>{worker.doj.substring(0, 10)}</p>
                    <h3>Site</h3>
                    <p>{worker.site}</p>
                    <h3>Type of worker</h3>
                    <p>{worker.type}</p>
                </div>


                <div className="cw__div">

                </div>

                <div className="profile__rcontent">
                    <h2>Worker's bank details</h2>
                    <h3>UAN No.</h3>
                    <p>{worker.uanNo}</p>
                    <h3>PF No.</h3>
                    <p>{worker.pfNo}</p>
                    <h3>ESIC </h3>
                    <p>{worker.esic}</p>
                    <h3>Wages Rate</h3>
                    <p>{worker.wagesRate}</p>
                    <h3>OT Rate</h3>
                    <p>{worker.otRate}</p>
                    <h3>DA/SA Rate</h3>
                    <p>{worker.daRate}</p>
                    <h3>Bank Name</h3>
                    <p>{worker.bank}</p>
                    <h3>Account No.</h3>
                    <p>{worker.accountNo}</p>
                    <h3>IFSC Code</h3>
                    <p>{worker.ifsc}</p>

                    
                    
                </div>
            </div>
        </div>
    )
}

export default Profile
