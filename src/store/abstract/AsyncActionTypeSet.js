export default class AsyncActionTypeSet {
  constructor(type) {
    this.type=type;
    this.SUCCESS=`${type}_SUCCESS`;
    this.FAILURE=`${type}_FAILURE`;
  }

  toString() {
    return this.type;
  }
}