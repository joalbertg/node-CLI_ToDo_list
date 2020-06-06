const isEmptyObject = data => {
  //if (typeof data != 'object') throw new Error('Data bad format.');
  if (Object.entries(data).length === 0) throw new Error('Data is empty!');
}

module.exports = {
  isEmptyObject
};

