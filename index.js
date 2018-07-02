var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return  Object.assign({}, object, {[key]: value})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
//  object = Object.assign({}, object, {[key]: value})
  Object[key] = value
  return object;
}

function deleteFromObjectByKey(object, key) {
  var obj = {object}
  delete obj[key];
  return obj;
}  

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}  
