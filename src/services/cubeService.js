const Cube = require("./../models/Cube");

const cubes = [
  {
    id: "kbyxdpcln7c7n7e",
    name: "pepi",
    description: "asd",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3qrzOft1bpbwNn84yLrxrr6pLLtrwY4NzQ&usqp=CAU",
    difficultyLevel: 1,
  },
  {
    id: "kbyxdpcln7c86jj",
    name: "Gosho",
    description: "dsa",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3qrzOft1bpbwNn84yLrxrr6pLLtrwY4NzQ&usqp=CAU",
    difficultyLevel: 5,
  },
];

exports.getAll = (search, from, to) => {
  let filterCubes = [...cubes];
  if (search) {
    filterCubes = filterCubes.filter((cube) =>
      cube.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (from) {
    filterCubes = filterCubes.filter(
      (cube) => cube.difficultyLevel >= Number(from)
    );
  }
  if (to) {
    filterCubes = filterCubes.filter(
      (cube) => cube.difficultyLevel <= Number(to)
    );
  }

  return filterCubes;
};

exports.create =  async (cubeData) => {
  const cube = await Cube.create(cubeData);
  
  return cube;
};

exports.getSingleCube = (id) => {
  return cubes.find((cube) => cube.id === id);
};
