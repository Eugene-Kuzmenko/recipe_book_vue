export default (state, { item }) => {
  const i = state.list.findIndex(oldItem => oldItem.id === item.id);
  if (i > 0) state.list[i] = item;
  else state.list.push(item);
}