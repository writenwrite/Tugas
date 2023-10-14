const errorHandler = (err, req, res, next) => {
    console.log(err)

    if (err.name == 'paramsError') {
        res.status(400).json({ message: "need title and genres params" })
    } else if (err.name == 'notFound') {
        res.status(404).json({ message: "movie not found" })
    } else {
        res.status(500).json({ message: "internal server error" })
    }

}

module.exports = errorHandler;