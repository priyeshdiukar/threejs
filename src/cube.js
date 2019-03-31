import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

let cube;

const createCube = (geometryParams, materialParams) => {
    let geometry = new BoxGeometry(...geometryParams);
    let material = new MeshBasicMaterial(materialParams);
    cube = new Mesh(geometry, material);
    return cube;
}

export default createCube;
