import yaml from 'js-yaml';
import fs from 'fs';

const doc = yaml.safeLoad(fs.readFileSync('./../env.yaml', 'utf8'));
console.log(doc);

export default doc[process.NODE_ENV];
