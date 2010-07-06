function(doc, req) {
  var ddoc = this,
      mustache = require("vendor/mustache"),
      dav      = require('js/lib/dav'),
      util     = require('js/lib/util');

  if(req.method == 'OPTIONS')
    return dav.response({
      headers: {"Allow": "GET, HEAD, COPY, MOVE, POST, PUT, PROPFIND, PROPPATCH, OPTIONS, MKCOL, DELETE"
                         //+ "REPORT, TRACE, LOCK, UNLOCK"
               }
    })

  util.dir({doc:doc, req:req});

  if(req.method == 'PROPFIND') {
    log("body = " + req.body);
    var r = new XML(req.body);
    log("r = " + r);
    util.dir({request:request});
    return "I got it";
  }
};
