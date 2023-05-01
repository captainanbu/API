const express =require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

//parse request data connect type application to url-encoded type
app.use(bodyParser.urlencoded({extended: false}));

// parse request data to json type
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Hello World!!!!');
}); 





const doctor_wise_route = require('./src/routes/appointment.route');
app.use('/api/appointment',doctor_wise_route);

const leave_type_route = require('./src/routes/leave_type.route');
app.use('/api/leaveTypes',leave_type_route);

const PatientRoute = require('./src/routes/patient.route');
app.use('/api/patient',PatientRoute);


const staff_attendanceRoute = require('./src/routes/staff_attendance.route');
app.use('/api/staff_attendance',staff_attendanceRoute);

 const staff_designation_route = require('./src/routes/staff_designation.route');
 app.use('/api/staff_designation',staff_designation_route);

 const staff_Route = require('./src/routes/staff.route');
 app.use('/api/staff',staff_Route);








app.listen(port,()=>{
    console.log(`Server is Running in the port ${port}`);
});