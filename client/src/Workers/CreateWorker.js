import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import './CreateWorker.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
//import api from '../utils/api'

function CreateWorker() {

    const [sites, setSites] = useState([]);
    const [error, setError] = useState('');
    const [errAlert, setErrAlert] = useState(false);

    useEffect(() => {
        async function getSites(){
            await axios.get("https://rnl-workers-log.herokuapp.com/sites")
                .then(res => setSites(res.data))
                .catch(err => console.log(err))
        }

        getSites();

    }, [])



    const nameRef = useRef();
    const aadharRef = useRef();
    const phoneRef = useRef();
    const addRef = useRef();
    const dojRef = useRef();
    const uanRef = useRef();
    const pfRef = useRef();
    const esicRef = useRef();
    const wagesRef = useRef();
    const otRef = useRef();
    const daRef = useRef();
    const bankRef = useRef();
    const accountRef = useRef();
    const ifscRef = useRef();

  
    const [site, setSite] = useState('');
    const [type, setType] = useState('');

    const history = useHistory();



    function handleSite(e) {
        setSite(e.target.value);
    }

    function handleType(e) {
        setType(e.target.value);
    }


    async function handleSubmit(e) {
        e.preventDefault();
        const userData = {
            name: nameRef.current.value,
            aadharNo: aadharRef.current.value,
            phoneNo: phoneRef.current.value,
            address: addRef.current.value,
            doj: dojRef.current.value,
            site: site,
            type: type,
            uanNo: uanRef.current.value,
            pfNo: pfRef.current.value,
            esic: esicRef.current.value,
            wagesRate: wagesRef.current.value,
            otRate: otRef.current.value,
            daRate: daRef.current.value,
            bank: bankRef.current.value,
            accountNo: accountRef.current.value,
            ifsc: ifscRef.current.value,        

        }

        try {
            setErrAlert(false);
            await axios.post("https://rnl-workers-log.herokuapp.com/users/add", userData);
            
            history.push('/workers');
        
        } catch(err) {
            setError(err);
            setErrAlert(true);
        }
    }



    return (
        <div className="cw" style={{height: "160vh"}}>
            <div className="cw__nav" >
                <Navbar />
            </div>
            
            <div className="cw__container" style={{marginTop: "90px", marginBottom: "70px"}}>
                <div className="cw__lcontent">
                    <h2>Enter worker's personal details</h2>
                    <h3>Name</h3>
                    <input type="text" ref={nameRef} className="cw__inp" />
                    <h3>Aadhar No.</h3>
                    <input type="text" ref={aadharRef} className="cw__inp" />
                    <h3>Phone No.</h3>
                    <input type="text" ref={phoneRef} className="cw__inp" />
                    <h3>Address</h3>
                    <input type="text" ref={addRef} className="cw__inp" />
                    <h3>Date Of Joining</h3>
                    <input type="date" ref={dojRef} className="cw__inp" />
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
                </div>


                <div className="cw__div">

                </div>

                <div className="cw__rcontent">
                    <h2>Enter worker's bank details</h2>
                    <h3>UAN No.</h3>
                    <input type="text" ref={uanRef} className="cw__inp" />
                    <h3>PF No.</h3>
                    <input type="text" ref={pfRef} className="cw__inp" />
                    <h3>ESIC </h3>
                    <input type="text" ref={esicRef} className="cw__inp" />
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

                    <button onClick={handleSubmit} className="cw__btn" >Add Worker</button>

                    {errAlert && <Alert severity="error">{error}</Alert>}
                    
                </div>
            </div>
        </div>
    )
}

export default CreateWorker
