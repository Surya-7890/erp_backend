const { Schema, Types, model } = require("mongoose");

const examSchema = new Schema({
  date: { 
    type: String, 
    required: [true, 'Date Is Required'] 
  },
  startTime: { 
    type: String, 
    required: [true, 'Start Time Is Required'] 
  },
  duration: { 
    type: Number, 
    required: [true, 'Duration Is Required'] 
  },
  supervisor: {
    type: Types.ObjectId,
    ref: "staff_model",
    required: [true, 'Supervisor Is Required'],
  },
  infrastructure: {
    type: Types.ObjectId,
    ref: "infrastructure_model",
    required: [true, 'Infrastructure Is Required'],
  },
  paper: {
    type: Types.ObjectId,
    ref: "paper_model",
    required: [true, 'Paper Is Required'],
  }
});

module.exports = {
  Exam: model('exam_model', examSchema)
}

examSchema.statics.create = async function (data) {
  const { paper_id: paper, infrastructure_id: infrastructure, supervisor_id: supervisor, duration, startTime, date } = data;
  try {
    const newExam = await this.create({
      paper,
      infrastructure,
      supervisor,
      duration,
      startTime,
      date
    });
    return { message: 'Success', data: newExam };
  } catch (error) {
    return { message: 'Failure', error: error.message }
  }
}