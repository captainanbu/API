const staffmodel = require('../models/staff.model');
exports.getstaffdetails = (req,res)=>{
    staffmodel.getstaffdetails ((err,staff)=>{
        if(err)
        res.send(err);

        console.log('staff',staff);
        res.send(staff);
    })
}

exports.getstaffdetailsById = (req,res) =>{
    console.log('get staffdetails by id');
    staffmodel.getstaffdetailsById(req.params.id,(err,staff)=>{

        if(err)
        res.send(err);

        console.log('single staff',staff);
        res.send(staff[0]);
    })
}

exports.getstaffdetailsByName = (req,res) =>{
    console.log('get staffdetails by name');
    staffmodel.getstaffdetailsByName(req.params.name,(err,staffs)=>{

        if(err)
        res.send(err);

        console.log('single staff by name',staffs);
        res.send(staffs);
    })
}

exports.createstaff = (req,res)=>{
    const staffdata = new staffmodel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'fill the details'});
    }else{
        staffmodel.createstaffdetails(staffdata,(err,staff)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'staff details added successfully',data:staff.insertId});

        })
    }
    }
