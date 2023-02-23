const MB = 5;
const FILE_SIZE_LIMIT = MB * 1024 * 1024;

const fileSizeLimiter = (req, res, next) => {
    const files = req.files;
    const fileOverLimit = [];

    Object.keys(files).forEach(key => {
        if (files[key].size > FILE_SIZE_LIMIT) {
            fileOverLimit.push(files[key].name);
        }
    })

    if (filesOverLimit.length) {
        const properVerb = fileOverLimit.length > 1 ? 'are' : 'is';
        const sentence = `Upload failed. ${fileOverLimit.toString()} ${properVerb} larger than ${MB}MB.`.replaceAll(',', ', ');
        const message = fileOverLimit.length < 3 ?
            sentence.replace(',', ' and') :
            sentence.replace(/,(?=[^,]*$)/, ", and");
        return res.status(413).json({ status: 'error', message });
    }
    next();
}

module.exports = fileSizeLimiter;