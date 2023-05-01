var dbconn = require('../../config/db.config');
var staffs = function(details){
    this.id = details.id;
    this.date = details.date;
    this.staff_id = details.staff_id;
    this.staff_attendance_type_id = details.staff_attendance_type_id;
    this.remark = details.remark;
    this.is_active = details.is_active;
    this.created_at = details.created_at;
    this.updated_at = details.updated_at;
}

staffs.getstaffattendance = (result)=>{
    dbconn.query('select * from staff_attendance',(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('staffattendance fetched');
            result(null,res);
        }
        
    })
}

staffs.createstaffattendance = (staffdetails,result)=>{
    dbconn.query('insert into staff_attendance SET ?',staffdetails,(err,res)=>{
        if(err){
            console.log(err)
            console.log('error while fetching data');
            result(null,err);
        }else{
            console.log('staff details inserted successfully');
            result(null,res)
        }
            
    })
}

module.exports = staffs;