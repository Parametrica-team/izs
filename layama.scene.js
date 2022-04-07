// Created with Motiva Layama v1.5 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "IZS_camera_day_0000", a: "IZS_camera_anim_day_001", p: new BABYLON.Vector3(937.661, 170, -1983.09), l: new BABYLON.Vector3(937.189, 170, -1982.21)});
   layamaCameras.push({n: "IZS_camera_day_0001", a: "IZS_camera_anim_day_002", p: new BABYLON.Vector3(61.3952, 170, -1139.3), l: new BABYLON.Vector3(61.767, 170, -1138.37)});
   layamaCameras.push({n: "IZS_camera_day_0002", a: "IZS_camera_anim_day_003", p: new BABYLON.Vector3(1011.2, 170, -715.554), l: new BABYLON.Vector3(1010.65, 170, -714.717)});
   layamaCameras.push({n: "IZS_camera_day_0003", a: "IZS_camera_anim_day_004", p: new BABYLON.Vector3(1133.45, 170, 488.367), l: new BABYLON.Vector3(1132.91, 170, 489.204)});
   layamaCameras.push({n: "IZS_camera_day_0004", a: "IZS_camera_anim_day_005", p: new BABYLON.Vector3(1064.63, 170, 1962.42), l: new BABYLON.Vector3(1063.83, 170, 1963.02)});
   layamaCameras.push({n: "IZS_camera_day_0005", a: "IZS_camera_anim_day_006", p: new BABYLON.Vector3(-31.9719, 170, 2597.51), l: new BABYLON.Vector3(-31.4998, 170, 2596.63)});
   layamaCameras.push({n: "IZS_camera_day_0006", a: "IZS_camera_anim_day_007", p: new BABYLON.Vector3(559.44, 170, 2917.81), l: new BABYLON.Vector3(559.912, 170, 2916.93)});
   layamaCameras.push({n: "IZS_camera_day_0007", a: "IZS_camera_anim_day_008", p: new BABYLON.Vector3(-299.33, 170, 1784.46), l: new BABYLON.Vector3(-298.858, 170, 1783.58)});
   layamaCameras.push({n: "IZS_camera_day_0008", a: "IZS_camera_anim_day_009", p: new BABYLON.Vector3(-321.029, 170, -0.706909), l: new BABYLON.Vector3(-320.192, 170, -0.159751)});
   layamaCameras.push({n: "IZS_camera_day_0009", a: "IZS_camera_anim_day_010", p: new BABYLON.Vector3(554.611, 170, -1425.4), l: new BABYLON.Vector3(555.448, 170, -1424.85)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("1024");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getOnScreenLogoUsage()
{
   return 6;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

