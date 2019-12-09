export default function doForId(list, id, callback, idKey='id') {
  const index = list.findIndex(entry => entry[idKey] === id);
  if (index >= 0) {
    callback(index);
    return true;
  }
  return false;
}