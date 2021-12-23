exports.Guest = async (req, res, next) => {
    if (!req.session?.isAuth) {
        return res.status(401).redirect('login');
    }
    next()
}
exports.Auth = async (req, res, next) => {
    if (req.session?.isAuth) {
        return res.status(203).redirect('dashboard');
    }
    next()
}