const uniqueId = require("uniqid");

const cubes = [
    {
        id: 'slzeq7swlrenkyua',
        name: 'Меги',
        description: '444',
        imageUrl: '456',
        difficultyLevel: 1
    },
    {
        id: 'slzeq7swlrenqnh8',
        name: 'Dancho',
        description: '5454',
        imageUrl: 'gfgfd',
        difficultyLevel: 1
    }

];

exports.create = (cubeData) => {
    const newCube = {
        id: uniqueId(),
        ...cubeData,

    };
    cubes.push(newCube);

    return newCube;

};



exports.getAll = (search, from, to) => {

    let filterCubes = [...cubes];

    if (search) {
        filterCubes = filterCubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (from) {
        filterCubes = filterCubes.filter(cube => cube.difficultyLevel >= Number(from))
    }
    if (to) {
        filterCubes = filterCubes.filter(cube => cube.difficultyLevel <= Number(to))
    }
    return filterCubes;
};

exports.getSingleCube = (id) => {
return cubes.find((cube) => cube.id === id);
}




