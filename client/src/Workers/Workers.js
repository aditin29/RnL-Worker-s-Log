import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import './Workers.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Profile from '../Popups/Profile';
import Attendance from '../Popups/Attendance';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Advance from '../Popups/Advance';
import CreateIcon from '@material-ui/icons/Create';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditProfile from '../Popups/EditProfile';
import EditDetails from '../Popups/EditDetails';
import DelWorker from '../Popups/DelWorker';
//import api from '../utils/api'

function Workers() {

    const [workers, setWorkers] = useState([])
    
    const [trigProfile, setTrigProfile] = useState(false);
    const [trigAtt, setTrigAtt] = useState(false);
    const [trigAdv, setTrigAdv] = useState(false);
    const [edit, setEdit] = useState(false);
    const [editDetails, setEditDetails] = useState('pdetails');
    const [trigDel, setTrigDel] = useState(false);
    const [editOpt, setEditOpt] = useState(false);
    const [worker, setWorker] = useState();

    const [sites, setSites] = useState([]);
    const [sortSiteVal, setSortSiteVal] = useState('All');

    

    useEffect(() => {

        async function getData(){

            if(sortSiteVal === "All"){
                await axios.get("https://rnl-workers-log.herokuapp.com/users/siteSortAlpha")
                    .then(res => {setWorkers(res.data)})
                    .catch(err => {console.log(err)})
            } else {
                
                const siteVal = {
                    site: sortSiteVal
                }
                await axios.post("https://rnl-workers-log.herokuapp.com/users/siteSort", siteVal)
                    .then(res => {setWorkers(res.data)})
                    .catch(err => {console.log(err)})
            }
            
            
            await axios.get("https://rnl-workers-log.herokuapp.com/sites")
                .then(res => setSites(res.data))
                .catch(err => console.log(err))
        }
        
        getData();
        
            
    }, [sortSiteVal])


 


 
    return (
        <div className="workers">
            <div className="workers__banner">
                <Navbar />
            </div>

            <div className="workers__add">
                <Link className="add__link" to='/create-worker'>
                    <img src="Media/add1.png" alt="" />
                    <h2 style={{marginTop: "10px", color: "#D6993C"}}>Add a Worker</h2>
                </Link>
            </div>

            <div className="workers__title">
                <h2>List of Workers</h2>
                <div >
                        <select name="site" value={sortSiteVal} onChange={(e) => setSortSiteVal(e.target.value)} className="workers__dropdown">
                            <option >All</option>
                                {sites.map(site => (
                                    <option >{site.siteName}</option>
                                ))}
                        </select>
                </div>
            </div>

            <div className="workers__container" >
                <div className="workers__content" >                               

                    <div >
                        <table className="workers__table">
                            <thead className="workers__content-header">
                            
                                <th>Name</th>
                                <th style={{marginRight: "200px"}}>Site</th>
                                <th style={{marginRight: "200px"}}>Phone</th>
                                <th>Type</th>
                            
                            </thead>
                            <div style={{overflowY: "scroll", height: "400px"}}>
                                <tbody className="workers__tbody">
                                    {workers.map(worker => (
                                        <tr key={worker._id} className="workers__content-worker">
                                            <div><td >{worker.name}</td></div>
                                            <div className="mr__content-data" style={{marginRight: "40px"}}><td >{worker.site}</td></div>
                                            <div className="mr__content-data" style={{marginRight: "45px"}}><td >{worker.phoneNo}</td></div>
                                            <div className="mr__content-data" style={{marginRight: "175px"}}><td >{worker.type}</td></div>                                     
                                            
                                            <button onClick={() => {setTrigProfile(true); setWorker(worker)}} className="workers__btn"  style={{left: "930px", marginLeft: "-120px"}} >View Profile</button>
                                            <button onClick={() => {setTrigAtt(true); setWorker(worker)}} className="workers__btn" style={{left: "1080px", marginLeft: "20px"}}>Attendance</button>
                                            <button onClick={() => {setTrigAdv(true); setWorker(worker)}} className="workers__btn" style={{left: "1230px", marginLeft: "20px"}}>Pay Advance</button>
                                            <button className="workers__editIcon"><CreateIcon className="workers__createIcon" onClick={() => {setEdit(true); setWorker(worker)}}></CreateIcon> </button>
                                            <button className="workers__editIcon" style={{width: "50px", marginLeft: "20px"}}><DeleteOutlineIcon className="workers__createIcon" onClick={() => {setWorker(worker); setTrigDel(true)}} ></DeleteOutlineIcon> </button>
                                        </tr>
                                    ))}
                                
                                </tbody>
                            </div>
                        </table>
                    </div>

                    
                   {trigProfile && <ExpandMoreIcon style={{backgroundColor: "#2D2F2F", color: "white", borderRadius: "50px", marginLeft: "50%", marginTop: "20px", fontSize: "40px"}} />}

                   {trigAtt && <ExpandMoreIcon style={{backgroundColor: "#2D2F2F", color: "white", borderRadius: "50px", marginLeft: "50%", marginTop: "20px", fontSize: "40px"}} />}

                   {trigAdv && <ExpandMoreIcon style={{backgroundColor: "#2D2F2F", color: "white", borderRadius: "50px", marginLeft: "50%", marginTop: "20px", fontSize: "40px"}} />}

                   {edit && <ExpandMoreIcon style={{backgroundColor: "#2D2F2F", color: "white", borderRadius: "50px", marginLeft: "50%", marginTop: "20px", fontSize: "40px"}} />}

                   {trigDel && <ExpandMoreIcon style={{backgroundColor: "#2D2F2F", color: "white", borderRadius: "50px", marginLeft: "50%", marginTop: "20px", fontSize: "40px"}} />}
                   
                   
                    
                </div>
            </div>

            {trigProfile && <div style={{position: "absolute", height: "100%", width: "100%", left: "0", backgroundColor: "#9ae3e6"}} >
                <Profile setTrig={setTrigProfile} worker={worker} />
            </div>}


            {trigAtt && <div style={{position: "absolute", height: "100%", width: "100%", left: "0", backgroundColor: "#9ae3e6"}} >
                <Attendance setTrig={setTrigAtt} worker={worker} />
            </div>}

            {trigAdv && <div style={{position: "absolute", height: "100%", width: "100%", left: "0", backgroundColor: "#9ae3e6"}} >
                <Advance setTrig={setTrigAdv} worker={worker} />
            </div>}

            {edit && <div style={{position: "absolute", height: "100%", width: "100%", left: "0", backgroundColor: "#9ae3e6"}} >
                <EditProfile setTrig={setEdit} worker={worker} setEditOpt={setEditOpt} setEditDetails={setEditDetails} />
            </div>}

            {editOpt && <div style={{position: "absolute", height: "100%", width: "100%", left: "0", backgroundColor: "#9ae3e6"}} >
                <EditDetails setTrig={setEditOpt} worker={worker} editDetails={editDetails} />
            </div>}

            {trigDel && <div style={{position: "absolute", height: "100%", width: "100%", left: "0", backgroundColor: "#9ae3e6"}} >
                <DelWorker setTrig={setTrigDel} worker={worker} />
            </div>}


        </div>
    )
}

export default Workers
