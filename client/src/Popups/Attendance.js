import React, {useState, useRef} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import "./Attendance.css";
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
//import api from '../utils/api'

function Attendance({setTrig, worker}) {
  
    const [addSuccess, setAddSuccess] = useState(false); 
    const [error, setError] = useState('');
    const [errAlert, setErrAlert] = useState(false);
    const [adv, setAdv] = useState(0);
    const [lwf, setLwf] = useState(0);
    


    const [month, setMonth] = useState('Jan');
    const pdaysRef = useRef();
    const otRef = useRef();
    // const [pf, setPf] = useState(0);
    // const [pt, setPt] = useState(0);

    const handleMonth = (e) => {
        setMonth(e.target.value);
    }

  

    async function handleSave() {

        const basicWages = Number(pdaysRef.current.value) * worker.wagesRate;
        const daWages = Number(pdaysRef.current.value) * worker.daRate;
        const otAmt = Number(otRef.current.value) * worker.otRate;
        const hra = Number(((basicWages + daWages) * 0.05).toFixed());
        const totalWages = Number((basicWages + daWages + otAmt + hra).toFixed());
        
        let pf=0;
        if((basicWages + daWages) > 15000) {
            pf = (1800);
        }else {
            pf =Math.round(((basicWages + daWages) * 0.12)*10000)/10000;
        }

        const esic = Number((totalWages * 0.0075).toFixed());

        let pt = 0
        if(totalWages <= 7500) {
            pt = (0);
        } else if (7500 < totalWages && totalWages <= 10000){
            pt = (1750);
        }
        else {
            pt = (200);
        }

        
        switch(month){
            case "Jan":
                setAdv(worker.monthlyReport.Jan.adv);
                setLwf(worker.monthlyReport.Jan.lwf);
                break;
            case "Feb":
                setAdv(worker.monthlyReport.Feb.adv);
                setLwf(worker.monthlyReport.Feb.lwf);
                break;
            case "Mar":
                setAdv(worker.monthlyReport.Mar.adv);
                setLwf(worker.monthlyReport.Mar.lwf);
                break;
            case "Apr":
                setAdv(worker.monthlyReport.Apr.adv);
                setLwf(worker.monthlyReport.Apr.lwf);
                break;
            case "May":
                setAdv(worker.monthlyReport.May.adv);
                setLwf(worker.monthlyReport.May.lwf);
                break;
            case "Jun":
                setAdv(worker.monthlyReport.Jun.adv);
                setLwf(worker.monthlyReport.Jun.lwf);
                break;
            case "Jul":
                setAdv(worker.monthlyReport.Jul.adv);
                setLwf(worker.monthlyReport.Jul.lwf);
                break;
            case "Aug":
                setAdv(worker.monthlyReport.Aug.adv);
                setLwf(worker.monthlyReport.Aug.lwf);
                break;
            case "Sep":
                setAdv(worker.monthlyReport.Sep.adv);
                setLwf(worker.monthlyReport.Sep.lwf);
                break;
            case "Oct":
                setAdv(worker.monthlyReport.Oct.adv);
                setLwf(worker.monthlyReport.Oct.lwf);
                break;
            case "Nov":
                setAdv(worker.monthlyReport.Nov.adv);
                setLwf(worker.monthlyReport.Nov.lwf);
                break;
            case "Dec":
                setAdv(worker.monthlyReport.Dec.adv);
                setLwf(worker.monthlyReport.Dec.lwf);
                break;
            default:
                break;
            
        }


        const totDeduction = pf + esic + pt + adv + lwf;

        const fPay = Number((totalWages - totDeduction).toFixed());

        console.log("adv: ", adv)
        console.log("worker: ", worker)

        const reportData = {
	
			presentDays: Number(pdaysRef.current.value),
			otHrs: Number(otRef.current.value),
			basicWages: basicWages,
			daWages: daWages,
			otAmt: otAmt,
			hra: hra,
			totalWages: totalWages,
			pf: pf,
			esic: esic,
			pt: pt,
			totDeduction: totDeduction,
			fPay: fPay,
            site: worker.site,		
        }
        
        let id = worker._id;
        await axios.post(`https://rnl-workers-log.herokuapp.com/users/update${month}Report/${id}`, reportData)
                .then(setErrAlert(false), setAddSuccess(true))
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
                            <select value={month} onChange={handleMonth} name="site" className="cw__dropdown" style={{marginBottom: "20px"}}>
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
                    <h3>Present days</h3>
                    <input type="number" className="cw__inp" ref={pdaysRef} style={{marginBottom: "20px", height: "40px"}} />
                    <h3>OT Hours</h3>
                    <input type="number" className="cw__inp" ref={otRef} style={{marginBottom: "40px", height: "40px"}}/>


                    <button onClick={handleSave} className="cw__btn" >Save</button>
                    {addSuccess && <Alert severity="success">Information updated</Alert>}                    
                    {errAlert && <Alert severity="error">{error}</Alert>}
                </div>

            </div>
        </div>
    )
}

export default Attendance
