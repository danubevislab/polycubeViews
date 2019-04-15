import * as THREE from 'three-full';

export interface PolyCube {
    // items
    cubeGroupGL: THREE.Group,
    cubeGroupCSS: THREE.Group,

    // cube management
    createObjects: Function,
    assembleData: Function,
    render: Function,
    filterDataByDatePeriod: Function,
    filterDataByCategory: Function,
    resetSelection: Function,
    resetCateogrySelection: Function,

    // updating settings / data
    updateView: Function,
    updateData: Function,
    updateNodeSize: Function,
    updateNodeColor: Function,
    updateNumSlices: Function,
    updateTime: Function,

    // temporal encodings
    transitionSTC: Function,
    transitionSI: Function,
    transitionJP: Function,
    transitionANI: Function,

    // util
    getCubePosition: Function,
    hideBottomLayer: Function, 
    showBottomLayer: Function, 

    // interactions
    highlightObject: Function,

    // event handleers
    onClick: Function,
    onDblClick: Function
}