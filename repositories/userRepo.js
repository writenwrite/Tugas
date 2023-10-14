const User = require("../model/user");

class userRepo {

    static all = async (next) => {
        try {
            const data = await User.getMovie(next);
            return data;
        } catch (err) {
            next(err);
        }
    }
}

module.exports = userRepo;