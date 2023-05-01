var dbcon = require('../../config/db.config');

var wise = function(doctor) {
    this.id = doctor.id;
    this.patient_id = doctor.patient_id;
    this.case_reference_id = doctor.case_reference_id;
    this.visit_details_id = doctor.visit_details_id;
    this.date = doctor.date;
    this.time = doctor.time;
    this.priority = doctor.priority;
    this.specialist = doctor.specialist;
    this.doctor = doctor.doctor;
    this.amount = doctor.amount;
    this.message = doctor.message;
    this.appointment_status = doctor.appointment_status;
    this.source = doctor.source;
    this.is_opd = doctor.is_opd;
    this.is_ipd = doctor.is_ipd;
    this.global_shift_id = doctor.global_shift_id;
    this.shift_id = doctor.shift_id;
    this.is_queue = doctor.is_queue;
    this.live_consult = doctor.live_consult;
    this.created_at = doctor.created_at;
}

//get all appointment
wise.getalldoctor_wise = (result)=>{
    dbcon.query('select * from appointment',(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('appointment fetched');
            result(null,res);
        }
    })
}


//get all appointment id

wise.getdoctor_wiseById = (id,result) => {
    dbcon.query('select * from appointment where doctor = ?',id,(err,res)=>{
        if(err){
            console.log('error while fetching doctor_wise',err);
            result(null,err);
        }
        else
        {
            console.log('doctor wise fetched successfully');
            result(null,res);
        }
    });
}

//create all appointment

wise.createdoctor_wise = (appointmentdata,result)=>{
    dbcon.query('insert into appointment set ?',appointmentdata,(err,res)=>{
        if (err){
            console.log(err)
            console.log('error while inserting data');
            result(null,err);
        }else{
            console.log('appointment data inserted successfully');
            result(null,res)

        }
        })
}


module.exports = wise;