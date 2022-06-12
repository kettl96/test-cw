function undoRedo(obj) {
  let undoArr = []
  let redoArr = []

  function set(key, value) {
    redoArr = []
    undoArr.push(key in obj ? [key, obj[key]] : [key])
    arguments.length > 1 ? obj[key] = value : delete obj[key]
  }
  function undo(undoArr, redoArr, el) {
    if (el = undoArr.pop()) {
      redoArr.push(el[0] in obj ? [el[0], obj[el[0]]] : [el[0]])
      el.length == 1 ? delete obj[el[0]] : obj[el[0]] = el[1]
    }
    return el
  }
  return {
    set: function (key, value) { set(key, value) },
    get: function (key) { return obj[key] },
    del: function (key) { set(key) },
    undo: function () { if (!undo(undoArr, redoArr)) throw 'error' },
    redo: function () { if (!undo(redoArr, undoArr)) throw 'error' }
  }
}