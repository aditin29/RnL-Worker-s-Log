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


    const [month, setMonth] = useState('Jan');
    const pdaysRef = useRef();
    const otRef = useRef();

    // const [pf, setPf] = useState(0);
    // const [pt, setPt] = useState(0);

    const handleMonth = (e) => {
        setMonth(e.target.value);
    }

  

    async function handleSave() {

        const basicWages = pdaysRef.current.value * worker.wagesRate;
        const daWages = pdaysRef.current.value * worker.daRate;
        const otAmt = otRef.current.value * worker.otRate;
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

        let adv =0;
        let lwf =0;
        switch(month){
            case "Jan":
                adv=worker.monthlyReport.Jan.adv;
                lwf=worker.monthlyReport.Jan.lwf;
                break;
            case "Feb":
                adv=worker.monthlyReport.Feb.adv;
                lwf=worker.monthlyReport.Feb.lwf;
                break;
            case "Mar":
                adv=worker.monthlyReport.Mar.adv;
                lwf=worker.monthlyReport.Mar.lwf;
                break;
            case "Apr":
                adv=worker.monthlyReport.Apr.adv;
                lwf=worker.monthlyReport.Apr.lwf;
                break;
            case "May":
                adv=worker.monthlyReport.May.adv;
                lwf=worker.monthlyReport.May.lwf;
                break;
            case "Jun":
                adv=worker.monthlyReport.Jun.adv;
                lwf=worker.monthlyReport.Jun.lwf;
                break;
            case "Jul":
                adv=worker.monthlyReport.Jul.adv;
                lwf=worker.monthlyReport.Jul.lwf;
                break;
            case "Aug":
                adv=worker.monthlyReport.Aug.adv;
                lwf=worker.monthlyReport.Aug.lwf;
                break;
            case "Sep":
                adv=worker.monthlyReport.Sep.adv;
                lwf=worker.monthlyReport.Sep.lwf;
                break;
            case "Oct":
                adv=worker.monthlyReport.Oct.adv;
                lwf=worker.monthlyReport.Oct.lwf;
                break;
            case "Nov":
                adv=worker.monthlyReport.Nov.adv;
                lwf=worker.monthlyReport.Nov.lwf;
                break;
            case "Dec":
                adv=worker.monthlyReport.Dec.adv;
                lwf=worker.monthlyReport.Dec.lwf;
                break;
            default:
                break;
            
        }

        console.log("adv = ", adv);

        const totDeduction = pf + esic + pt + adv + lwf;

        const fPay = Number((totalWages - totDeduction).toFixed());

        

        const reportData = {
	
			presentDays: pdaysRef.current.value,
			otHrs: otRef.current.value,
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
        console.log(reportData);
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
