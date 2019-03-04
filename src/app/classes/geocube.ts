import { PolyCube } from './polycube.interface';
import { DataManager } from './datamanager';
import * as THREE from 'three';
import { Scene } from 'three';
import { VIEW_STATES } from './viewStates';

export class GeoCube implements PolyCube {
    private dm: DataManager;
    private scene: THREE.Scene;
    private color: string;
    private gCubeGroup: THREE.Group;

    init(dm: DataManager, scene: THREE.Scene): void {
        this.dm = dm;
        this.scene = scene;
        this.gCubeGroup = new THREE.Group();
        this.assembleData();
        this.render();
    }
    
    assembleData(): void {
        this.color = this.dm.getData()[2];
        console.log(this.color);
    }
    
    render(): void {
        console.log('rendering geocube');
        let material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(this.color),
            wireframe: true
        });
    
        // create a box and add it to the scene
        let box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
        box.position.x = 0.5;
        box.rotation.y = 0.5;
        this.gCubeGroup.name = 'GEO_CUBE';
        this.gCubeGroup.add(box);

        this.scene.add(this.gCubeGroup);
    }

    update(currentViewState: VIEW_STATES): void {       
        if(currentViewState.valueOf() === VIEW_STATES.GEO_CUBE || currentViewState.valueOf() === VIEW_STATES.POLY_CUBE) {
            this.scene.add(this.gCubeGroup);
        }
    }

    onClick($event: any): void {
        console.log($event);
        console.log('geocube onclick')
    }
}