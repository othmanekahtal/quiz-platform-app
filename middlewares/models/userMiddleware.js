const bcrypt = require('bcryptjs');
exports.hashingPassword = async function (next) {
    this.password = await bcrypt.hash(this.password, 12);
    this.confirm_password = undefined;
    next()
}
exports.getFullName = async function () {
    return `${this.first_name} ${this.last_name}`;
}
exports.samePassword = async function({candidate_pass,user_pass}){
    console.log({candidate_pass,user_pass})
    return await bcrypt.compare(user_pass,candidate_pass);
}