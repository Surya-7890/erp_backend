const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Admin Username Is Required']
  },
  password: {
    type: String,
    required: [true, 'Password Is Required']
  },
  email: {
    type: String,
    required: [true, 'Email Id Is Required']
  }
});

module.exports = {
  Admin: model('admin_model', adminSchema)
}


adminSchema.statics.login = async function (data) {
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