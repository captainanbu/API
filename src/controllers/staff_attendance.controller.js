const staffmodel = require('../models/staff_attendance.model');
exports.getstaffattendance = (req,res)=>{
    staffmodel.getstaffattendance((err,staff)=>{
        if(err)
        res.send(err);

        console.log('staffdddd',staff);
        res.send(staff);

    })
}

exports.createstaff = (req,res)=>{
    const staffdetails = new staffmodel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0) {
        res.send({success:false,message:'fill the detaails'});
    }else{
        staffmodel.createstaffattendance(staffdetails,(err,staff)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'staff attendance added successfully',data:staff.insertId});
            

        })
    }
    }