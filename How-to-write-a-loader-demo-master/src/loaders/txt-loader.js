// import {getOptions} from 'loader-utils';
var loaderUtils = require('loader-utils');

module.exports = function loader(source){
    const options = loaderUtils.getOptions(this);
    // source = source.replace(/\[name\]/g,(options || {}).name);
    source = source.replace(/\[name\]/g, `我是你爸`);
    console.log(source);
    return `export default ${JSON.stringify(source)}`
}