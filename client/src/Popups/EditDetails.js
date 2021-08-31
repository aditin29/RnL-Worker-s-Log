import React, {useState, useRef, useEffect} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
//import api from '../utils/api'

function EditDetails({setTrig, worker, editDetails}) {

    const [sites, setSites] = useState([]);
    const [addSuccess, setAddSuccess] = useState(false); 
    const [error, setError] = useState('');
    const [errAlert, setErrAlert] = useState(false);

    useEffect(() => {
        async function getSites(){
            await axios.get("/sites")
                .then(res => setSites(res.data))
                .catch(err => console.log(err))
        }

        getSites();

    }, [])

    
    const phoneRef = useRef();
    const addRef = useRef();    
    const [site, setSite] = useState('');
    const [type, setType] = useState('');

    function handleSite(e) {
        setSite(e.target.value);
    }

    function handleType(e) {
        setType(e.target.value);
    }

    async function handlePdetails(e) {
        let id = worker._id
        
        e.preventDefault();
        const userPdata = {
            phoneNo: phoneRef.current.value,
            address: addRef.current.value,
            site: site,
            type: type     

        }

        await axios.post(`/users/updatePdetails/${id}`, userPdata)
                .then(setErrAlert(false), setAddSuccess(true))
                .catch(err => {setError(err); setErrAlert(true)})
    }




    
    const uanRef = useRef();
    const pfRef = useRef();
    const esicRef = useRef();
    const wagesRef = useRef();
    const otRef = useRef();
    const daRef = useRef();
    const bankRef = useRef();
    const accountRef = useRef();
    const ifscRef = useRef();

    async function handleBdetails(e) {
        let id = worker._id
        
        e.preventDefault();
        const userBdata = {
            uanNo: uanRef.current.value,
            pfNo: pfRef.current.value,
            esic: esicRef.current.value,
            wagesRate: wagesRef.current.value,
            otRate: otRef.current.value,
            daRate: daRef.current.value,
            bank: bankRef.current.value,
            accountNo: accountRef.current.value,
            ifsc: ifscRef.current.value

        }

        await axios.post(`/users/updateBdetails/${id}`, userBdata)
                    .then(setErrAlert(false), setAddSuccess(true))
                    .catch(err => {setError(err); setErrAlert(true)})
    }
      
        
    
    return (
        
        <div className="cw">
            {editDetails==='pdetails' ? 
                    <div>
                        <CloseIcon className="profile__back" onClick={() => setTrig(false)} style={{fontSize: "35px"}} />
                        
                        <div className="cw__container" style={{display: "flex", justifyContent: "center", width: "38vw", alignItems: "center", height: "85vh", marginTop: "-50px", marginLeft: "50px"}}>
                            <div className="att__content">
                                <h2 >{worker.name}</h2>

                                <h3>Phone No.</h3>
                                <input type="text" ref={phoneRef} className="cw__inp" />
                                <h3>Address</h3>
                                <input type="text" ref={addRef} className="cw__inp" />
                                <h3>Site</h3>
                                <div >
                                        <select style={{overflowY: "scroll"}} value={site} onChange={handleSite} name="site" className="cw__dropdown">
                                            <option >-select-</option>
                                            {sites.map(site => (
                                                <option >{site.siteName}</option>
                                            ))}
                                            
                                        </select>
                                </div>
                                <h3>Type of worker</h3>
                                <div >
                                        <select value={type} onChange={handleType} name="type" className="cw__dropdown">
                                            <option >-select-</option>
                                            <option >Helper</option>
                                            <option >Semi-mason</option>
                                            <option >Mason</option>
                                        </select>
                                </div>
                                
                                <button onClick={handlePdetails} className="cw__btn" style={{marginBottom: "10px"}} >Save</button>
                                {addSuccess && <Alert severity="success">Details updated</Alert>}                    
                                {errAlert && <Alert severity="error">{error}</Alert>}
                                
                            </div>

                        </div>
                    </div> : 
                    
                    <div>
                        <CloseIcon className="profile__back" onClick={() => setTrig(false)} style={{fontSize: "35px"}} />
                        
                        <div className="cw__container" style={{display: "flex", justifyContent: "center", width: "38vw", alignItems: "center", height: "85vh", marginTop: "-50px", marginLeft: "50px"}}>
                            <div className="att__content">
                                <h2 >{worker.name}</h2>

                                <div style={{overflowY: "scroll", maxHeight: "280px", marginBottom: "20px", marginTop: "-20px"}}>
                                    <h3>Wages Rate</h3>
                                    <input type="number" ref={wagesRef} className="cw__inp" />
                                    <h3>OT Rate</h3>
                                    <input type="number" ref={otRef} className="cw__inp" />
                                    <h3>DA/SA Rate</h3>
                                    <input type="number" ref={daRef} className="cw__inp" />
                                    <h3>Bank Name</h3>
                                    <input type="text" ref={bankRef} className="cw__inp" />
                                    <h3>Account No.</h3>
                                    <input type="text" ref={accountRef} className="cw__inp" />
                                    <h3>IFSC Code</h3>
                                    <input type="text" ref={ifscRef} className="cw__inp" />
                                </div>

                                

                                
                                <button onClick={handleBdetails} className="cw__btn" style={{marginBottom: "10px"}} >Save</button>
                                {addSuccess && <Alert severity="success">Details updated</Alert>}                    
                                {errAlert && <Alert severity="error">{error}</Alert>}
                                
                            </div>

                        </div>
                    </div>
            }

            
            
        </div>
    )
}

export default EditDetails