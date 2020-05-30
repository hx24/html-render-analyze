const delay = function (time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

const sleep = function (time) {
  for (let start = Date.now(); Date.now() - start < time; ) {}
}

module.exports = {
  delay,
  sleep,
}
