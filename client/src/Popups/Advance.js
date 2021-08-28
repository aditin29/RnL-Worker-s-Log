import React, {useState, useRef} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
//import api from '../utils/api'

function Advance({setTrig, worker}) {

    const [error, setError] = useState('');
    const [errAlert, setErrAlert] = useState(false);
    const [alert, setAlert] = useState(false);


    const [advMonth, setAdvMonth] = useState('Jan');
    const amtRef = useRef();



    const handleAdvMonth = (e) => {
        setAdvMonth(e.target.value);
    }



    async function handleAdv() {

        const AdvanceAmt = {
	
			adv: amtRef.current.value		
        }

        let id = worker._id;

        await axios.post(`${process.env.REACT_APP_BASEURL}/users/update${advMonth}Adv/${id}`, AdvanceAmt)
                .then(setErrAlert(false), setAlert(true))
                .catch(err => {setError(err); setErrAlert(true);})
    } 


    return (
        <div className="cw">
            
            <CloseIcon className="profile__back" onClick={() => setTrig(false)} style={{fontSize: "35px"}} />
            
            <div className="cw__container" style={{display: "flex", justifyContent: "center", width: "40vw", alignItems: "center"}}>
                <div className="att__content">
                    <h2 >{worker.name}</h2>

                    <h3>Month</h3>
                    <div >
                            <select value={advMonth} onChange={handleAdvMonth} name="month" className="cw__dropdown" style={{marginBottom: "20px"}}>
                                <option >Jan</option>
                                <option >Feb</option>
                                <option >Mar</option>
                                <option >Apr</option>
                                <option >May</option>
                                <option >Jun</option>
                                <option >Jul</option>
                                <option >Aug</option>
                                <option >Sep</option>
                                <option >Oct</option>
                                <option >Nov</option>
                                <option >Dec</option>
                            </select>
                    </div>

                    <h3>Advance Amount</h3>
                    <input type="number" className="cw__inp" ref={amtRef} style={{marginBottom: "40px", height: "40px"}} />
                    
                    <button onClick={handleAdv}  className="cw__btn" style={{marginBottom: "10px"}} >Add Advance</button>
                    {alert && <Alert severity="success">Advance Amount Added</Alert>}
                    {errAlert && <Alert severity="error">{error}</Alert>}
                </div>

            </div>
        </div>
    )
}

export default Advance
