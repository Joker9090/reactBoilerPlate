exports.index = function(req, res){
  res.render('index');
};

exports.indexHtml = function(req, res){
  res.sendfile('./views/indexHtml.html')
};

exports.indexTemplate = function(req, res){
  res.render('indexTemplate', { msg: 'test - 3' });
};

exports.indexItem = function(req, res){
  res.render('indexItem', {  msg: 'test - 4', names: ["juan","carla"] });
};

exports.indexWithReactClient = function(req, res){
  res.render('indexWithReactClient', {  msg: 'test - 5' });
};
