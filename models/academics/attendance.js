const { Schema, Types, model } =  require("mongoose");

const attendanceSchema = new Schema({
  student: {
    type: Types.ObjectId,
    ref: "student_model",
    required: [true, 'Student Id Is Required'],
  },
  paper: {
    type: Types.ObjectId,
    ref: "paper_model",
    required: [true, 'Course Id Is Required'],
  },
  dates: {
    type: [Number],
    default: []
  },
  monthly_attended: { 
    type: Number, // total no of classes attended by a student
    default: 0 
  },
  monthly_occured: { 
    type: Number, // total no of classes that have been taken in amonth
    default: 0 
  },
  cumulative_attended: { 
    type: Number, 
    default: 0 
  },
  cumulative_occured: { 
    type: Number, 
    default: 0 
  },
});

module.exports = {
  Attendance: model('attendance_model', attendanceSchema)
}


attendanceSchema.statics.create = async function (data) {
  const { id: student, paper, monthly_attended, monthly_occured, cumulative_attended, cumulative_occured } = data;
  try {
    const newAttendance = await this.create({
      student,
      paper,
      monthly_attended,
      monthly_occured,
      cumulative_attended,
      cumulative_occured
    });
    console.log(newAttendance);
    return { message: 'Success', data: newAttendance };
  } catch (error) {
    return { message: 'Failure', error: error.message };
  }
}


attendanceSchema.statics.update = async function (data) {
  const { filter, options = { multi: true }, newData } = data;
  try {
    const updated = await this.updateMany(filter, newData, options);
    return { message: 'Success', data: updated };
  } catch (error) {
    return { message: 'Failure', error: error.message };
  }
}

attendanceSchema.statics.markAttendance = async function (data) {
  const { id: student, date } = data;
  try {
    const attendance = await this.findById(student);
    const isAlreadyMarked = attendance.dates.find(e => e === date);
    if (!isAlreadyMarked) {
      attendance.dates.push(date);
    }
    await attendance.save();
    return { message: 'Success', data: attendance };
  } catch (error) {
    return { message: 'Failure', error: error.message };
  }
}