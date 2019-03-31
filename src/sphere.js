import { SphereGeometry, MeshBasicMaterial, Mesh } from 'three';

const createSphere = (geometryParams, materialParams) => new Mesh(new SphereGeometry(...geometryParams),
    new MeshBasicMaterial(materialParams));

export default createSphere;
