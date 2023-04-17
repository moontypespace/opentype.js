// The `prep` table.
// https://www.microsoft.com/typography/OTSPEC/prep.htm

import parse from '../parse.js';
import table from '../table.js';


function parsePrepTable(data, start, tableEntry) {
    let p = new parse.Parser(data, start);
    return p.parseByteList(tableEntry.length);
}


function makePrepTable(prep) {
    const t = new table.Table('prep', prep);
    return t;
}

export default { parse: parsePrepTable , make: makePrepTable };
