const { Schema, model } = require("mongoose");
const { userSchema } = require("../../common/user");
const { hashPassword } = require("../../../functions/password");
const { verifyPassword } = require("../../../functions/password");
const { generateTokens } = require("../../../functions/token");

const studentSchema = new Schema(userSchema);

module.exports = {
  Student: model('student_model', studentSchema)
}



studentSchema.statics.createUser = async function (data) {
  const { name, rollno, image, password, department } = data;
  try {
    const doesUserAlreadyExist = await this.findOne(data?.rollno);
    if (doesUserAlreadyExist) {
      return { message: 'Failure', error: 'User Already Exists' }
    }
    const hashedPassword = await hashPassword(password);
    await this.create({
      name,
      rollno,
      image,
      password: hashedPassword,
      department
    });
    return { message: 'Success', data: { name, rollno, image } }
  } catch (error) {
    return { message: 'Failure', error: error.message }
  }
}

studentSchema.statics.getUser = async function (id) {
  try {
    const user = await this.findById(id).selectedExclusively({ password: -1 });
    console.log(user);
    return { message: 'Success', data: user };
  } catch (error) {
    return { message: 'Failure', error: error.message }
  }
}

studentSchema.statics.upateUser = async function (data) {
  const { filter, newData, options = { multi: true } } = data;
  try {
    const user = await this.updateMany(filter, { $set: newData }, options);
    return { message: 'Success', data: user.acknowledged };
  } catch (error) {
    return { message: 'Failure', error: error.message };
  }
}

studentSchema.statics.deleteUser = async function (filter) {
  try {
    const deleted = await this.deleteMany(filter);
    return { message: 'Success', data: deleted.acknowledged };
  } catch (error) {
    return { message: 'Failure', error: error.message };
  }
}

studentSchema.statics.login = async function (data) {
  const { password, id } = data;
  try {
    const user = await this.findById(id).select({ password });
    const verify = await verifyPassword(password, user.password);
    if (verify) {
      const tokens = generateTokens(id, 'Students');
      return { message: 'Success', data: tokens };
    }
    return { message: 'Failure', error: 'Incorrect Password' };
  } catch (error) {
    return { message: 'Failure', error: error.message };
  }
}