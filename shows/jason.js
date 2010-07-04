function(doc, req) {
  var ddoc = this,
      mustache = require("vendor/mustache"),
      dav      = require('js/lib/dav'),
      util     = require('js/lib/util');

  if(req.method == 'OPTIONS')
    return dav.response({
      headers: {"Allow": "GET, HEAD, COPY, MOVE, POST, PUT, PROPFIND, PROPPATCH, OPTIONS, MKCOL, DELETE, TRACE, REPORT, LOCK, UNLOCK"}
    })
};
