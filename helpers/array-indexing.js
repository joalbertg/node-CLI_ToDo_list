const arrayIndexing = (array, key) => {
  return array.reduce((acc,  curr) => {
    acc[curr[key]] = curr;
    return acc;
  }, {});
}

module.exports = {
  arrayIndexing
};

