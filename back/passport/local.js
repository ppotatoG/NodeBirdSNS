const passport = require('passport');
const bcrypt = require('bcrypt');

const { Strategy : LocalStrategy } = require('passport-local');
const { User } = require('../models');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password'
    }, async(email, password, done) => {
        try {
            const user = await User.findOne({
                where : { email }
            });
            if(!user) {
                return done(null, false, {reason : '존재하지 않는 사용자입니다!'});
            }
    
            const result = await bcrypt.compare(password, user.password);
            if(result) {
                return done(null, user);
            }
            return done(null, fasle, { reason : '비밀번호가 틀렸습니다.' });
        } catch {
            console.error(error);
            return done(error);
        }
    }));
};