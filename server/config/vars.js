import yaml from 'js-yaml';
import fs from 'fs';

const doc = yaml.safeLoad(fs.readFileSync('./env.yaml', 'utf8'));
export default doc[process.env.NODE_ENV];
