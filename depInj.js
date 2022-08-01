let DI = function (dependencies) {
  this.dependencies = dependencies;
};

DI.prototype.inject = function (f) {
  let param_names = getParams(f);
  let params = param_names.map(function (name) {
    return this.dependencies[name];
  }.bind(this));
  let scrubbed_params = params.filter(function (param) {
    return typeof param !== 'undefined';
  });
  return () => f.apply(this, scrubbed_params);
}

function getParams(f) {
  let str = f.toString();
  let open = str.indexOf('(') + 1;
  let close = str.indexOf(')');
  let str_param = str.slice(open, close);
  return str_param.replace(/\s/g, '').split(',');
}
module.exports = DI;