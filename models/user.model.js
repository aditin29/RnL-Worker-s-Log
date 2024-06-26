const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {type: String, required: true},
    aadharNo: {type: String},
    phoneNo: {type: String},
    address: {type: String},
    doj: {type: Date},
    site: {type: String},
    type: {type: String},
    uanNo: {type: String},
    pfNo: {type: String},
    esic: {type: String},
    bank: {type: String},
    accountNo: {type: String},
    ifsc: {type: String},
    wagesRate: {type: Number},
    otRate: {type: Number},
    daRate: {type: Number},
    monthlyReport: { 
        Jan: {
            presentDays: {type: Number, default: 0},
            otHrs: {type: Number, default: 0},
            basicWages: {type: Number, default: 0},
            daWages: {type: Number, default: 0},
            otAmt: {type: Number, default: 0},
            hra: {type: Number, default: 0},
            totalWages: {type: Number, default: 0},
            pf: {type: Number, default: 0},
            esic: {type: Number, default: 0},
            pt: {type: Number, default: 0},
            lwf: {type: Number, default: 0},
            adv: {type: Number, default: 0},
            totDeduction: {type: Number, default: 0},
            fPay: {type: Number, default: 0},
            site: {type: String, default: 'NA'}
        }, 
        Feb: {
            presentDays: {type: Number, default: 0},
            otHrs: {type: Number, default: 0},
            basicWages: {type: Number, default: 0},
            daWages: {type: Number, default: 0},
            otAmt: {type: Number, default: 0},
            hra: {type: Number, default: 0},
            totalWages: {type: Number, default: 0},
            pf: {type: Number, default: 0},
            esic: {type: Number, default: 0},
            pt: {type: Number, default: 0},
            lwf: {type: Number, default: 0},
            adv: {type: Number, default: 0},
            totDeduction: {type: Number, default: 0},
            fPay: {type: Number, default: 0},
            site: {type: String, default: 'NA'}
        }, 
        Mar: {
            presentDays: {type: Number, default: 0},
            otHrs: {type: Number, default: 0},
            basicWages: {type: Number, default: 0},
            daWages: {type: Number, default: 0},
            otAmt: {type: Number, default: 0},
            hra: {type: Number, default: 0},
            totalWages: {type: Number, default: 0},
            pf: {type: Number, default: 0},
            esic: {type: Number, default: 0},
            pt: {type: Number, default: 0},
            lwf: {type: Number, default: 0},
            adv: {type: Number, default: 0},
            totDeduction: {type: Number, default: 0},
            fPay: {type: Number, default: 0},
            site: {type: String, default: 'NA'}
        }, 
        Apr: {
            presentDays: {type: Number, default: 0},
            otHrs: {type: Number, default: 0},
            basicWages: {type: Number, default: 0},
            daWages: {type: Number, default: 0},
            otAmt: {type: Number, default: 0},
            hra: {type: Number, default: 0},
            totalWages: {type: Number, default: 0},
            pf: {type: Number, default: 0},
            esic: {type: Number, default: 0},
            pt: {type: Number, default: 0},
            lwf: {type: Number, default: 0},
            adv: {type: Number, default: 0},
            totDeduction: {type: Number, default: 0},
            fPay: {type: Number, default: 0},
            site: {type: String, default: 'NA'}
        }, 
        May: {
            presentDays: {type: Number, default: 0},
            otHrs: {type: Number, default: 0},
            basicWages: {type: Number, default: 0},
            daWages: {type: Number, default: 0},
            otAmt: {type: Number, default: 0},
            hra: {type: Number, default: 0},
            totalWages: {type: Number, default: 0},
            pf: {type: Number, default: 0},
            esic: {type: Number, default: 0},
            pt: {type: Number, default: 0},
            lwf: {type: Number, default: 0},
            adv: {type: Number, default: 0},
            totDeduction: {type: Number, default: 0},
            fPay: {type: Number, default: 0},
            site: {type: String, default: 'NA'}
        }, 
        Jun: {
            presentDays: {type: Number, default: 0},
            otHrs: {type: Number, default: 0},
            basicWages: {type: Number, default: 0},
            daWages: {type: Number, default: 0},
            otAmt: {type: Number, default: 0},
            hra: {type: Number, default: 0},
            totalWages: {type: Number, default: 0},
            pf: {type: Number, default: 0},
            esic: {type: Number, default: 0},
            pt: {type: Number, default: 0},
            lwf: {type: Number, default: 12},
            adv: {type: Number, default: 0},
            totDeduction: {type: Number, default: 0},
            fPay: {type: Number, default: 0},
            site: {type: String, default: 'NA'}
        }, 
        Jul: {
            presentDays: {type: Number, default: 0},
            otHrs: {type: Number, default: 0},
            basicWages: {type: Number, default: 0},
            daWages: {type: Number, default: 0},
            otAmt: {type: Number, default: 0},
            hra: {type: Number, default: 0},
            totalWages: {type: Number, default: 0},
            pf: {type: Number, default: 0},
            esic: {type: Number, default: 0},
            pt: {type: Number, default: 0},
            lwf: {type: Number, default: 0},
            adv: {type: Number, default: 0},
            totDeduction: {type: Number, default: 0},
            fPay: {type: Number, default: 0},
            site: {type: String, default: 'NA'}
        }, 
        Aug: {
            presentDays: {type: Number, default: 0},
            otHrs: {type: Number, default: 0},
            basicWages: {type: Number, default: 0},
            daWages: {type: Number, default: 0},
            otAmt: {type: Number, default: 0},
            hra: {type: Number, default: 0},
            totalWages: {type: Number, default: 0},
            pf: {type: Number, default: 0},
            esic: {type: Number, default: 0},
            pt: {type: Number, default: 0},
            lwf: {type: Number, default: 0},
            adv: {type: Number, default: 0},
            totDeduction: {type: Number, default: 0},
            fPay: {type: Number, default: 0},
            site: {type: String, default: 'NA'}
        }, 
        Sep: {
            presentDays: {type: Number, default: 0},
            otHrs: {type: Number, default: 0},
            basicWages: {type: Number, default: 0},
            daWages: {type: Number, default: 0},
            otAmt: {type: Number, default: 0},
            hra: {type: Number, default: 0},
            totalWages: {type: Number, default: 0},
            pf: {type: Number, default: 0},
            esic: {type: Number, default: 0},
            pt: {type: Number, default: 0},
            lwf: {type: Number, default: 0},
            adv: {type: Number, default: 0},
            totDeduction: {type: Number, default: 0},
            fPay: {type: Number, default: 0},
            site: {type: String, default: 'NA'}
        }, 
        Oct: {
            presentDays: {type: Number, default: 0},
            otHrs: {type: Number, default: 0},
            basicWages: {type: Number, default: 0},
            daWages: {type: Number, default: 0},
            otAmt: {type: Number, default: 0},
            hra: {type: Number, default: 0},
            totalWages: {type: Number, default: 0},
            pf: {type: Number, default: 0},
            esic: {type: Number, default: 0},
            pt: {type: Number, default: 0},
            lwf: {type: Number, default: 0},
            adv: {type: Number, default: 0},
            totDeduction: {type: Number, default: 0},
            fPay: {type: Number, default: 0},
            site: {type: String, default: 'NA'}
        }, 
        Nov: {
            presentDays: {type: Number, default: 0},
            otHrs: {type: Number, default: 0},
            basicWages: {type: Number, default: 0},
            daWages: {type: Number, default: 0},
            otAmt: {type: Number, default: 0},
            hra: {type: Number, default: 0},
            totalWages: {type: Number, default: 0},
            pf: {type: Number, default: 0},
            esic: {type: Number, default: 0},
            pt: {type: Number, default: 0},
            lwf: {type: Number, default: 0},
            adv: {type: Number, default: 0},
            totDeduction: {type: Number, default: 0},
            fPay: {type: Number, default: 0},
            site: {type: String, default: 'NA'}
        }, 
        Dec: {
            presentDays: {type: Number, default: 0},
            otHrs: {type: Number, default: 0},
            basicWages: {type: Number, default: 0},
            daWages: {type: Number, default: 0},
            otAmt: {type: Number, default: 0},
            hra: {type: Number, default: 0},
            totalWages: {type: Number, default: 0},
            pf: {type: Number, default: 0},
            esic: {type: Number, default: 0},
            pt: {type: Number, default: 0},
            lwf: {type: Number, default: 12},
            adv: {type: Number, default: 0},
            totDeduction: {type: Number, default: 0},
            fPay: {type: Number, default: 0},
            site: {type: String, default: 'NA'}
        }, 
    }

}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;

