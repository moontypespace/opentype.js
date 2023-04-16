import assert from 'assert';
import { Font, Path, Glyph, parse, load} from '../src/opentype.js';
import { readFileSync } from 'fs';
const loadSync = (url, opt) => parse(readFileSync(url), opt);

//const font = loadSync('./test/fonts/Roboto-Black.ttf');
const font = loadSync('./test/fonts/Roboto-Black.ttf');
font.download('Roboto-Black-test.ttf')
/*
const font_static_ttf = loadSync('/Users/ollimeier/Downloads/Vary-Black.ttf');
console.log('font.names.windows.fontFamily: ', font.names.windows.fontFamily)


var tables = outFont.toTables().tables
console.log('font.names.windows.fontFamily: ', outFont.toTables().tables)
for (var i = 0; i < tables.length; i++) {
    const table = tables[i];
    console.log('table_tag: ', table['tableName'])
}


//font.download('VaryVariable-test.ttf')
font_static_ttf.download('Vary-Black-test.ttf')
*/