export const groupBy = (collection, iterator) => {
  const sobre13 = [];
  collection.map((e) => {
    if (!iterator(e)) {
      sobre13.push(e.name);
    }
  });
  console.log(sobre13);

  return {};
};

export const flowRight = () => {};
