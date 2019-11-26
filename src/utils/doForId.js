export default function doForId(list, id, callback) {
  const index = list.findIndex(entry => entry.id === item.id);
  if (index > 0) {
    callback(index);
    return true;
  }
  return false;
}