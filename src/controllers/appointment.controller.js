const doctor_wisemodel = require('../models/appointment.model');

//get all doctor_wise list

exports.getdoctor_wise = (req,res)=>{
doctor_wisemodel.getalldoctor_wise((err,doctor_wise)=>{
    if(err)
    res.send(err);

    console.log('doctor',doctor_wise);
    res.send(doctor_wise);
})
}


//get doctor_wise list byid

exports.getdoctor_wiselistById = (req,res)=>{
    console.log('here is the doctor_wise by id');

doctor_wisemodel.getdoctor_wiseById(req.params.doctor,(err,doctor_wise)=>{
    
        if(err)
            res.send(err);
            console.log('single doctor',doctor_wise)
            res.send(doctor_wise);
    })
}

exports.createdoctor_wise = (req,res)=>{
    const doctor_wisedata = new doctor_wisemodel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ) {
        res.send({success:false,message:'pleasw fill the fields'});
    }else{
        doctor_wisemodel.createdoctor_wise(doctor_wisedata,(err,doctor_wise)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'appointment added successfully',data:doctor_wise.insertId});

        })
    }
    }
