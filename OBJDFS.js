//#!/usr/bin/node 

var OBJDFS = (function () {

var DEBUG = false;

function objectInArray (object, array) {
    for (var i = 0; i < array.length; i++) {
        if (object === array[i]) return true;
    }
    return false;
}

function OBJDFS (source, searchString, sourceName, maxDepth) {
    var sourceName = typeof sourceName === 'undefined' ? 
        'source' : sourceName; 
    var maxDepth = typeof maxDepth === 'undefined' ? 10 : maxDepth; 
    DEBUG && console.log ('OBJDFS');
    DEBUG && console.log ('source = ');
    DEBUG && console.log (source);
    var path = [sourceName];
    //var parents = {};
    var V = [];

    return (function OBJDFSPRIME (v, depth) {
        DEBUG && console.log ('key = ');
        DEBUG && console.log (key);
        //DEBUG && console.log (v);
        if (depth > maxDepth) return;

        var depth = typeof depth === 'undefined' ? 1 : depth; 
        V.unshift (v);

        DEBUG && console.log (Object.keys (v));
        Object.keys (v).forEach (function (e, i, arr) {
            path.push (e);
            DEBUG && console.log ('parents = ');
            DEBUG && console.log (parents);
            if (e === searchString) {
                DEBUG && console.log ('depth = ');
                DEBUG && console.log (depth);

                // print path to node
                console.log (path.join ('.'));
            } 
            if (!(objectInArray (v[e], V))) {
                try {
                    OBJDFSPRIME (v[e], depth + 1);
                } catch (e) {
                    DEBUG && console.log ('Error: ' + e);
                }
            }
            path.pop (e);
        });
    }) (source);
};

function DOMDFS (searchString, maxDepth) {
    return OBJDFS (window, searchString, 'window', maxDepth);
}

return {
    OBJDFS: OBJDFS,
    DOMDFS: DOMDFS
};

}) ();

if (module && module.exports) {
    module.exports = OBJDFS;
}



