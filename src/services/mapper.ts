export const mapper = (object: Record<any, any>, formattingMethod: Function, retryMethod: Function)=> {
  for (const oldName in object) {
    const newName = formattingMethod(oldName);

    if (newName != oldName) {
      if (object.hasOwnProperty(oldName)) {
        object[newName] = object[oldName];
        delete object[oldName];
      }
    }

    if (typeof object[newName] == "object") {
      object[newName] = retryMethod(object[newName]);
    }
  }

  return object;
}
