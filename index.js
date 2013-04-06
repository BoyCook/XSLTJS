
module.exports = process.env.XSLT_COV ? require('./lib-cov/xslt').XSLT : require('./lib/xslt').XSLT;
