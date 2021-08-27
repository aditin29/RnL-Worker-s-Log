import React, {useState, useEffect} from 'react';
import Navbar from '../Components/Navbar';
import Alert from '@material-ui/lab/Alert';
//import axios from 'axios';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import api from '../utils/api'

function Sites() {

    const [addSuccess, setAddSuccess] = useState(false);    
    const [error, setError] = useState('');
    const [errAlert, setErrAlert] = useState(false);
    
    const [siteName, setSiteName] = useState('');


    
    const [deleteSite, setDeleteSite] = useState(false);
    const [sites, setSites] = useState([]);
    const [deleteSiteVal, setDeleteSiteVal] = useState('');
    const [delSuccess, setDelSuccess] = useState(false);  
    const [delFail, setDelFail] = useState(false);  
    const [delErr, setDelErr] = useState(false);    
    
 

    useEffect(() => {

        async function getData(){

                       
            await api.get("/sites")
                .then(res => setSites(res.data))
                .catch(err => console.log(err))
        }
        
        getData();
        
            
    }, [])



    function handleSiteVal(e) {
        setSiteName(e.target.value);
    }
    

    async function handleAdd(e) {
        e.preventDefault();
        
        const site = {
            siteName: siteName
        }

        await api.post("/sites/addSite", site)
                .then(res => {setErrAlert(false); setAddSuccess(true);})
                .catch(err => {setError(err); setErrAlert(true);})

        
    }


    async function handleDelete(e) {
        e.preventDefault();
        
        const site = {
            deleteSiteVal: deleteSiteVal
        }

        console.log(deleteSiteVal)

        await api.delete("/sites/deleteSite", site)
                .then(res => {setDelFail(false); setDelSuccess(true);})
                .catch(err => {setDelErr(err); setDelFail(true);})

        
    }

    const handleAnother = () => {    
        setSiteName(''); 
        setAddSuccess(false);
    }


    return (
        <div className="cw">           
            <div className="cw__nav">
                <Navbar />
            </div>
            
            <div className="cw__container" style={{display: "flex", justifyContent: "center", width: "40vw", alignItems: "center", height: "80vh", marginTop: "50px"}}>
                {!deleteSite ? <div className="att__content">
                
                    <button className="workers__editIcon" style={{width: "50px", marginLeft: "350px", marginTop: "-50px", display: "flex"}}><DeleteOutlineIcon className="workers__createIcon" onClick={() => setDeleteSite(true)} ></DeleteOutlineIcon> </button>
                    <h2 >Add a Site</h2>

                    <h3>Site Name</h3>
                    <input type="text" className="cw__inp" value={siteName} onChange={handleSiteVal} style={{marginBottom: "40px", height: "40px"}} />
                    
                    <button onClick={handleAdd}  className="cw__btn" style={{marginBottom: "-5px"}} >Add Site</button>
                    <button onClick={handleAnother}  className="cw__btn" style={{marginBottom: "10px", border: "2px solid #d6993c", backgroundColor: "transparent", color: "#d6993c"}} >Add another</button>
                                       
                    {addSuccess && <Alert severity="success">Site Added</Alert>}
                    {errAlert && <Alert severity="error">{error}</Alert>}

                </div> :



                <div className="att__content">
                
                    <button className="workers__editIcon" style={{width: "50px", marginLeft: "-110px", marginTop: "-50px", display: "flex"}}><ArrowBackIcon className="workers__createIcon" onClick={() => setDeleteSite(false)} ></ArrowBackIcon> </button>
                    <h2 >Delete a Site</h2>

                    <h3>Site Name</h3>
                    <div >
                        <select name="site" value={deleteSiteVal} onChange={(e) => setDeleteSiteVal(e.target.value)} className="workers__dropdown" style={{width: "300px", backgroundColor: "transparent", border: "2px solid #1c243a", color: "#1c243a"}}>
                            <option >-select-</option>
                                {sites.map(site => (
                                    <option >{site.siteName}</option>
                                ))}
                        </select>
                    </div>
                    
                    
                    <button onClick={handleDelete}  className="cw__btn" style={{marginBottom: "10px", marginTop: "50px", border: "2px solid red", backgroundColor: "transparent", color: "red"}} >Delete</button>
                                       
                    {delSuccess && <Alert severity="success">Site Deleted</Alert>}
                    {delFail && <Alert severity="error">{delErr}</Alert>}

                    
                    <p style={{marginTop: "20px"}}>*Refresh the page to update the site list</p>

                </div> }

            </div>
        </div>
    )
}

export default Sites
