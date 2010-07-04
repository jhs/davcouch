exports.response = function response(obj) {
  var result = JSON.parse(JSON.stringify(obj));
  result.headers = result.headers || {};
  result.headers.DAV = '1,2';

  result.body = result.body || "";
  return result;
}
