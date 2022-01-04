const bcrypt = require('bcryptjs');
exports.hashingPassword = async function (next) {
    this.password = await bcrypt.hash(this.password, 12);
    this.confirm_password = undefined;
    next()
}
exports.getFullName = async function () {
    return `${this.first_name} ${this.last_name}`;
}
exports.correctPassword = async ({
                                     candidatePassword,
                                     userPassword
                                 }) => await bcrypt.compare(userPassword, candidatePassword);