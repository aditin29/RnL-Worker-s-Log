import React, {useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
//import api from '../utils/api'

function DelWorker({setTrig, worker}) {

    const [error, setError] = useState('');
    const [errAlert, setErrAlert] = useState(false);
    const [alert, setAlert] = useState(false);  


    async function handleDel(e) {

        e.preventDefault();

        let id = worker._id;

        await axios.delete(`https://rnl-workers-log.herokuapp.com/users/deleteWorker/${id}`)
                .then(setErrAlert(false), setAlert(true))
                .catch(err => {setError(err); setErrAlert(true);})
    } 


    return (
        <div className="cw">
            
            <CloseIcon className="profile__back" onClick={() => setTrig(false)} style={{fontSize: "35px"}} />
            
            <div className="cw__container" style={{display: "flex", justifyContent: "center", width: "40vw", alignItems: "center"}}>
                <div className="att__content">
                    <h2 >{worker.name}</h2>
                    <h3>Site</h3>
                    <p>{worker.site}</p>
                    <h3>Type of worker</h3>
                    <p>{worker.type}</p>
                
                    
                    <button onClick={handleDel}  className="cw__btn" style={{marginBottom: "10px"}} >Delete Worker</button>
                    {alert && <Alert severity="success">Worker deleted successfully</Alert>}
                    {errAlert && <Alert severity="error">{error}</Alert>}
                </div>

            </div>
        </div>
    )
}

export default DelWorker;
