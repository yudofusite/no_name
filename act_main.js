

const background = document.getElementById("back_ground");
background.setAttribute("width","800px");
background.setAttribute("height","500px");
let bgf = background.getContext("2d");


const stage = document.getElementById("stage");
stage.setAttribute("width","800px");
stage.setAttribute("height","500px");
var stg = stage.getContext("2d");

const boss = document.getElementById("boss");
boss.setAttribute("width","800px");
boss.setAttribute("height","500px");
var bsg = boss.getContext("2d");

const massage = document.getElementById("massage");
massage.setAttribute("width","800px");
massage.setAttribute("height","500px");
var mas = massage.getContext("2d");

const mcanvas = document.getElementById("motion_canvas");
mcanvas.setAttribute("width","800px");
mcanvas.setAttribute("height","500px");
var mcv = mcanvas.getContext("2d");

const subm = document.getElementById("sub_m");
subm.setAttribute("width","300px");
subm.setAttribute("height","500px");
var sub = subm.getContext("2d");

//-------------------------BGMとか？

let bgm = new Audio();
bgm.src = "normal_field.mp3";
bgm.loop = "true";

window.addEventListener("click", function() {		//テストプレイ用クリック＆スキップ機能
//bgm.play();
now_stage += 3;

});


//--------------------------


let hp = 50;
let power = 0;


let scene = 0;			//現在の場面。0 = OP 1' = タイトル　みたいに


let mainprogram_timer = setInterval(function() {		//メインプログラム。

if (scene == 0) {
op_main();
};
if (scene == 1) {
title_main();
};
if (scene == 3) {
player_edit();
stage_edit_main();
boss_edit_main();
};

border();	//枠線

},1000 / 60);














//-------------以下　メモ用------------------------------------------------


//画面　800x500　フル配置20x20ブロックで40x25(1000)
//			うえ半分無配置にすると40x13(520) ←採用