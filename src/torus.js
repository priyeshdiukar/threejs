import { TorusGeometry, MeshBasicMaterial, Mesh } from 'three';

const createTorus = (geometryParams, materialParams) => new Mesh(
    new TorusGeometry(...geometryParams),
    new MeshBasicMaterial(materialParams));

export default createTorus;
