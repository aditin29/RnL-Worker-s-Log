import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

function EditProfile({setTrig, worker, setEditOpt, setEditDetails}) {

    
    return (
        <div className="cw">
            
            <CloseIcon className="profile__back" onClick={() => setTrig(false)} style={{fontSize: "35px"}} />
            
            <div className="cw__container" style={{display: "flex", justifyContent: "center", width: "40vw", alignItems: "center"}}>
                <div className="att__content">
                    <h2 >{worker.name}</h2>
                    
                    <button onClick={() => {setTrig(false); setEditOpt(true); setEditDetails('pdetails')}} className="cw__btn" style={{marginBottom: "10px", height: "70px"}} >Edit worker's details</button>

                    <button onClick={() => {setTrig(false); setEditOpt(true); setEditDetails('bdetails')}} className="cw__btn" style={{marginBottom: "10px", height: "70px"}} >Edit worker's paymnet details</button>
                    
                </div>

            </div>
        </div>
    )
}

export default EditProfile
