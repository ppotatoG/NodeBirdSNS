const passport = require('passport');
const local = require('./local.js')


module.exports = () => {
    passport.serializeUser(() => {

    });

    passport.deserializeUser(() => {

    });

    local();
}