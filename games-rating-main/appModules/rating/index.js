const makeRatingFile  = require("./rating-file");
const config = require("./config");
const { createRating, updateRating } = require("./calculations");

module.exports = {
    config,
    makeRatingFile,
    createRating,
    updateRating,
};