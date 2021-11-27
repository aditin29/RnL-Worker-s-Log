import React, {useEffect, useState} from 'react';
import Navbar from '../Components/Navbar';
import './MonthlyReport.css';
import ReactToExcel from 'react-html-table-to-excel';
import axios from 'axios';
//import api from '../utils/api'


function MonthlyReport() {

    const [workers, setWorkers] = useState([]);
    const [report, setReport] = useState();
    const [month, setMonth] = useState("Jan");
    let Month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let date = new Date();


    let i = Month.indexOf(date.toString().substring(4, 7));

    


    const [next, setNext] = useState(false);
    const [prev, setPrev] = useState(false);
    const [popup, setPopup] = useState(false);
    const [ind, setInd] = useState(i);
    
    
    let totAmt = 0;

    

    const [sites, setSites] = useState([]);
    const [sortSiteVal, setSortSiteVal] = useState('All');
    let m = `${month}${sortSiteVal}Report`;




    useEffect(() => {

        if (ind===0) {
            setPrev(true);
        } else {
            setPrev(false);
        }

        if(ind===11) {
            setNext(true);
        }else{
            setNext(false);
        }

    
       
        async function getData() {

            await axios.get("https://rnl-workers-log.herokuapp.com/sites")
                    .then(res => setSites(res.data))
                    .catch(err => console.log(err))

            if(sortSiteVal === "All"){
                await axios.get("https://rnl-workers-log.herokuapp.com/users/siteSortAlpha")
                    .then(res => {setWorkers(res.data)})
                    .catch(err => {console.log(err)})
            } else {
                
                const siteVal = {
                    site: sortSiteVal
                }
                await axios.post(`https://rnl-workers-log.herokuapp.com/users/siteSort${month}`, siteVal)
                    .then(res => {setWorkers(res.data)})
                    .catch(err => {console.log(err)})
            }

            
            
            let x = Month[ind];
            
            setMonth(x);
    
            await axios.get(`https://rnl-workers-log.herokuapp.com/users/${month}Report`)
                        .then(res => setReport(res.data) )
                        .catch(err => console.log(err))
        }
        
       getData();
            
    }, [ind, month, sortSiteVal])   

    

    const handlePrev = () => {
        
        let i = ind  - 1;
        setInd(i);
    }

    const handleNext = () => {
        

        let k = ind  + 1;
        setInd(k);
    }


    function handlePopupYes(){
        let mon = month;
        workers.map(worker => {
            let Id = worker._id;
            
            return(axios.post(`https://rnl-workers-log.herokuapp.com/users/reset${mon}/${Id}`)
            .then(res => {console.log(res.data)})
            .catch(err => {console.log(err)}))
        })
        window.location.reload();
    }


    function handlePopupNo() {
        setPopup(false);
    }

    function handleReset() {
        setPopup(true);
    }





    return (
        <div className="workers">
            <div className="workers__banner" style={{height: "350px"}}>
                <Navbar />
            </div>

            <div className="workers__title">
                <div className="mr__report-title" >
                    <button disabled={prev} onClick={handlePrev} className="mr__title-arrow"  style={{fontSize: "15px", marginRight: "20px", marginTop: "10px", color : "#d6993c"}} > Prev </button>
                    <h2>{month}'s Report</h2>
                    <button disabled={next} onClick={handleNext} className="mr__title-arrow"  style={{fontSize: "15px", marginLeft: "20px", marginTop: "10px", color : "#d6993c"}} >Next</button>
                    
                </div>

                <button className="mr__reset-btn" onClick={handleReset} >RESET</button>

                <ReactToExcel className="mr__export-btn" table="monthlyReport" filename={m} sheet="sheet 1" buttonText="EXPORT" />
                
                <div >
                        <select name="site" value={sortSiteVal} onChange={(e) => {setSortSiteVal(e.target.value); totAmt=0}} className="workers__dropdown">
                            <option >All</option>
                            {sites.map(site => (
                                    <option >{site.siteName}</option>
                                ))}
                        </select>
                </div>
            </div>

            {popup && <div className="mr__reset-popup">
                    <p>Are you sure?</p>
                    <div className="mr__popup-btns">
                        <button onClick={handlePopupNo}>No</button>
                        <button onClick={handlePopupYes}>Yes</button>
                    </div>
                </div>
            }

            

            <div className="workers__container" style={{overflowX: "scroll"}} >
                <div className="workers__content" >
                                       

                    <div >
                        <table id="monthlyReport" className="workers__table">
                            <thead className="mr__content-header">
                                <tr>
                                    <td style={{marginRight: "190px"}}>Name</td>
                                    <td style={{marginRight: "120px"}}>Type</td>
                                    <td style={{marginRight: "105px"}}>Site</td>
                                    <td style={{marginRight: "100px"}}>Phone</td>
                                    <td style={{marginRight: "120px"}}>DOJ</td>
                                    <td style={{marginRight: "100px"}}>UAN No</td>
                                    <td style={{marginRight: "100px"}}>PF No</td>
                                    <td style={{marginRight: "110px"}}>ESIC</td>
                                    <td>Presesnt Days</td>
                                    <td style={{marginRight: "110px"}}>OT Hours</td>
                                    <td style={{marginRight: "110px"}}>Wages Rate</td>
                                    <td>DA/SA Rate</td>
                                    <td>OT Rate</td>
                                    <td style={{marginRight: "120px"}}>Basic Wages</td>
                                    <td>DA Wages</td>
                                    <td style={{marginRight: "110px"}}>OT Amt</td>
                                    <td style={{marginRight: "100px"}}>HRA</td>
                                    <td style={{marginRight: "105px"}}>Total Wages</td>
                                    <td>PF</td>
                                    <td style={{marginRight: "100px"}}>ESIC</td>
                                    <td>PT</td>
                                    <td>LWF</td>
                                    <td style={{marginRight: "120px"}}>Other Deduction</td>
                                    <td style={{marginRight: "105px"}}>Total Deduction</td>
                                    <td style={{marginRight: "105px"}}>Payment</td>
                                    <td style={{marginRight: "100px"}}>Bank</td>
                                    <td style={{marginRight: "140px"}}>Acc No</td>
                                    <td style={{marginRight: "120px"}}>IFSC</td>
                                    <td style={{marginRight: "5px"}}>Aadhar No</td>
                                </tr>
                            
                            </thead>
                            <div style={{overflowY: "scroll", height: "440px", marginRight: "20px"}}> 
                                <tbody>
                                    {workers.map(worker => {

                                        let wReport;
                                        

                                        for(let i=0; i<report?.length; i++){
                                            if(report[i][1] === worker._id){
                                                wReport = report[i][0];
                                            }
                                        }

                                        totAmt = totAmt + wReport?.fPay;

                                        
                                        
                                        return(
                                            <tr className="mr__content-worker">
                                                <td className="mr__content-data" style={{marginRight: "75px", justifyContent: "flex-start"}} ><p >{worker.name}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "36px"}}><p >{worker.type}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "20px"}}><p >{wReport?.site==="NA" ? worker.site : wReport?.site}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "15px"}}><p >{worker.phoneNo}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "50px"}}><p >{worker.doj.substring(0, 10)}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "30px"}}><p >{worker.uanNo}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "20px"}}><p >{worker.pfNo}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "50px"}}><p >{worker.esic}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "50px"}}><p >{wReport?.presentDays}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "60px"}}><p >{wReport?.otHrs}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "70px"}}><p >{worker.wagesRate}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "40px"}}><p >{worker.daRate}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "50px"}}><p >{worker.otRate}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "80px"}}><p >{wReport?.basicWages}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "40px"}}><p >{wReport?.daWages}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "30px"}}><p >{wReport?.otAmt}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "40px"}}><p >{wReport?.hra}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "40px"}}><p >{wReport?.totalWages}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "0px"}}><p >{wReport?.pf}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "0px"}}><p >{wReport?.esic}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "0px"}}><p >{wReport?.pt}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "50px"}}><p >{wReport?.lwf}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "120px"}}><p >{wReport?.adv}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "80px"}}><p >{wReport?.totDeduction}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "35px"}}><p >{wReport?.fPay}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "25px"}}><p >{worker.bank}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "70px"}}><p >{worker.accountNo}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "55px"}}><p >{worker.ifsc}</p></td>
                                                <td className="mr__content-data" style={{marginRight: "50px"}}><p >{worker.aadharNo}</p></td>                                    
                                                
                                        </tr>)
                                    })}

                                    <tr style={{left: "750px", fontWeight: "bold", fontSize: "20px"}}>Total Amount: {totAmt}</tr>
                                
                                </tbody>
                            </div>
                            
                        </table>

                        
                    </div>


                   
                   
                    
                </div>
            </div>
        </div>
    )
}

export default MonthlyReport
