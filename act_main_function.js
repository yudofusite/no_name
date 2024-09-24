"use strict";

const ask_button = document.getElementById("ask_button");	//説明書を別ウインドウで
ask_button.addEventListener("click", function() {
openwindow("act_ask.html","_blank","width=800, height=600, top=0, left=700 resizable=yes, scrollbars=yes");
});

var wo = "null";
function openwindow(url,winname,sub) {
if (wo !== "null") {
wo.close();
};

wo = window.open(url,winname,sub);
wo.focus();
};

//---------------------------------------------------------------

let muteki_jikan = 0;	//1以上の時無敵時間。

function border() {			//描画エリア枠線
stg.lineWidth = 2;
stg.strokeStyle = "#000000";
stg.strokeRect(1, 1, 798, 498);
};

let jump = new Audio();
jump.src = "jump2.wav";

//-----------------------------------------------------------------

let op_move = 240;
let op_move_c = 0;

function op_main() {
stg.clearRect(0, 0, 800, 500);
stg.fillStyle = "#000020";
stg.fillRect(0, 0, 800, 500);
stg.fillStyle = "#ffffff";
stg.font = "bold 20px sans-serif";
stg.fillText("yudofusite presents", 300, op_move - 240);
op_move += 6;
	if (op_move > 480) {
	op_move = 480;
	op_move_c++
	};
	if (op_move_c > 30) {
	scene = 1;
	};
};

//----------------------------------------------------------------

let title_spacing = 60;
let titleflag = [0, 0];		//スペースキー押下後の

function title_main() {		//タイトル画面
stg.clearRect(0, 0, 800, 500);
stg.fillStyle = "#eeeeee";
stg.fillRect(0, 0, 800, 500);
stg.fillStyle = "#dddddd";
stg.beginPath();
stg.moveTo(500, 0);
stg.lineTo(230, 500);
stg.lineTo(800, 500);
stg.lineTo(800, 0);
stg.closePath();
stg.fill();

stg.font = "bold 60px sans-serif";
stg.letterSpacing = "8px";
stg.fillText("(ﾟーﾟ*)", 300, 250);

stg.fillStyle = "#eeeeee";
stg.font = "60px sans-serif";
stg.letterSpacing = "8px";
stg.fillText("( ᐛ )", 400, 400);

stg.fillStyle = "#000020";
stg.font = "40px sans-serif";
stg.letterSpacing = title_spacing + "px";
stg.textAlign = "center";
stg.fillText("タイトル考えてない", 400, 150);
stg.font = "15px sans-serif";
stg.fillText("-Burning NEET", 600, 180);

if (title_spacing > 10.3 && titleflag[0] == 0) {			//タイトルぐいーん
title_spacing -= (title_spacing - 10) / 7;
} else {
	if (titleflag[0] == 0) {
	stg.font = "15px sans-serif";
	stg.letterSpacing = "5px";
	stg.fillText("-PRESS SPACE KEY-", 400, 300);
	};
};


	if (spk == true) {		//スペース押下後いろいろ
	titleflag[0] = 1;
	};

	if (titleflag[0] == 1) {

	if (titleflag[1] == 0) {
	jump.play();
	};

	titleflag[1]++;
	title_spacing *= 1.2;
	};

	if (titleflag[1] > 60) {
	bgm.play();
	scene = 3;
	x_n = 0;
	y_n = 300;
	x = 0;
	y = -2;
	massage_func();
	};


};

//----------------------------------------------------------------

let now_stage = 0;	//今のステージ
let now_section = 1;

function stage_edit_main() {
	edit_stage(now_stage);
};

//_________________________________________________________________
//-----------------------------------------------------------------


let edit_array = [0, 1];	//地形カウンター反復(120fごと)
let stone = new Image();
stone.src = "stone.png";
stone.width = "20px";

function edit_stage(ang_stg) {		//ステージ描画部分や


if (edit_array[1] == 1) {		//地形カウンター反復100f
edit_array[0]++
	if (edit_array[0] > 100) {
	edit_array[0] = 100
	edit_array[1] = 0;
	};

} else {
edit_array[0]--
	if (edit_array[0] < 0) {
	edit_array[0] = 0
	edit_array[1] = 1;
	};
};


let edit_x = 0;
let edit_y = 0;

edit_y = date_stage[ang_stg][0];

	for (let i = 1; i < 521; i++) {

	if (date_stage[ang_stg][i] == 1) {		//土地面
		stg.fillStyle = "#600000";
		stg.fillRect(edit_x, edit_y, 20, 20);
		stg.fillStyle = "#500000";
		stg.fillRect(edit_x + 4, edit_y + 10, 2, 2);
		stg.fillRect(edit_x + 10, edit_y + 3, 2, 2);
		stg.fillRect(edit_x + 18, edit_y + 15, 2, 2);
		stg.fillRect(edit_x + 15, edit_y + 8, 2, 2);
	};

	if (date_stage[ang_stg][i] == 2) {		//橋地面
		stg.strokeStyle = "#606060";
		stg.strokeRect(edit_x + 1, edit_y + 5, 18, 15);
		stg.beginPath();
		stg.moveTo(edit_x + 1, edit_y + 5);
		stg.lineTo(edit_x + 19, edit_y + 20);
		stg.moveTo(edit_x + 18, edit_y + 5);
		stg.lineTo(edit_x + 1, edit_y + 20);
		stg.closePath();
		stg.stroke();		
		stg.strokeRect(edit_x + 1, edit_y - 8, 18, 8);
		stg.fillStyle = "#404040";
		stg.fillRect(edit_x, edit_y, 20, 5);

	};
	
	if (date_stage[ang_stg][i] == 3) {		//岩地面
		stg.drawImage(stone, edit_x, edit_y);
	};

	
	if (date_stage[ang_stg][i] == 4) {		//レンガ
		stg.fillStyle = "#500000";
		stg.fillRect(edit_x, edit_y, 20, 20);
		
		stg.lineWidth = 1;
		stg.strokeStyle = "#000000";
		stg.beginPath();
		stg.moveTo(edit_x, edit_y + 5);
		stg.lineTo(edit_x + 20, edit_y + 5);
		stg.moveTo(edit_x, edit_y + 10);
		stg.lineTo(edit_x + 20, edit_y + 10);
		stg.moveTo(edit_x, edit_y + 15);
		stg.lineTo(edit_x + 20, edit_y + 15);
		stg.moveTo(edit_x + 10, edit_y);
		stg.lineTo(edit_x + 10, edit_y + 5);
		stg.moveTo(edit_x + 10, edit_y + 10);
		stg.lineTo(edit_x + 10, edit_y + 15);
		stg.closePath();
		stg.stroke();
		stg.strokeRect(edit_x + 1, edit_y + 1, 18, 18);

	};
	
	if (date_stage[ang_stg][i] == 5) {		//マグマ
		stg.fillStyle = "#ff1010";
		stg.fillRect(edit_x, edit_y, 20, 20);
	};

	if (date_stage[ang_stg][i] == 6) {		//草生える
		stg.fillStyle = "#20ff20";
		stg.fillRect(edit_x, edit_y + 15, 4, 5);
		stg.fillRect(edit_x + 4, edit_y + 17, 4, 3);
		stg.fillRect(edit_x + 8, edit_y + 16, 4, 4);
		stg.fillRect(edit_x + 12, edit_y + 18, 4, 2);
		stg.fillRect(edit_x + 16, edit_y + 16, 4, 4);
	};

	if (date_stage[ang_stg][i] == 7) {		//針
		stg.fillStyle = "#606060";
		stg.beginPath();
		stg.moveTo(edit_x + 10, edit_y - 10);
		stg.lineTo(edit_x + 5, edit_y + 20);
		stg.lineTo(edit_x + 10, edit_y + 20);
		stg.lineTo(edit_x + 10, edit_y - 10);
		stg.fill();
		stg.fillStyle = "#909090";
		stg.beginPath();
		stg.moveTo(edit_x + 10, edit_y - 10);
		stg.lineTo(edit_x + 15, edit_y + 20);
		stg.lineTo(edit_x + 10, edit_y + 20);
		stg.lineTo(edit_x + 10, edit_y - 10);
		stg.fill();
	};

	if (date_stage[ang_stg][i] == 8) {		//いわ
		stg.fillStyle = "#a0a0a0";
		stg.fillRect(edit_x, edit_y + 20, 20, -500);
		stg.fillStyle = "#909090";
		stg.fillRect(edit_x + 2, edit_y + 20, 16, -500);
		stg.fillStyle = "#808080";
		stg.fillRect(edit_x + 5, edit_y + 20, 10, -500);
		stg.fillStyle = "#909090";
		stg.fillRect(edit_x - 3, edit_y, 26, 20);
		stg.fillStyle = "#808080";
		stg.fillRect(edit_x , edit_y, 20, 20);
		stg.fillStyle = "#707070";
		stg.fillRect(edit_x + 4, edit_y, 12, 20);

	};
	if (date_stage[ang_stg][i] == 9) {		//丸太
		stg.fillStyle = "#bc702a";
		stg.strokeStyle = "#98490c";
		stg.beginPath();
		stg.arc(edit_x + 10, edit_y + 10, 8, 0, 2 * Math.PI);
		stg.closePath();
		stg.fill();
		stg.stroke();
	};
	if (date_stage[ang_stg][i] == 10) {		//ジャンプ台
		stg.fillStyle = "#002789";
		stg.strokeStyle = "#505050";
		stg.lineWidth = 3;
		stg.beginPath();
		stg.moveTo(edit_x + 5, edit_y + 3);
		stg.lineTo(edit_x + 15, edit_y + 17);
		stg.moveTo(edit_x + 15, edit_y + 3);
		stg.lineTo(edit_x + 5, edit_y + 17);
		stg.stroke();

		stg.fillRect(edit_x, edit_y, 20, 5);
		stg.fillRect(edit_x, edit_y + 15, 20, 5);
	};
	if (date_stage[ang_stg][i] == 11) {		//レンガ屋外
		stg.fillStyle = "#454545";
		stg.fillRect(edit_x, edit_y, 20, 20);
		
		stg.lineWidth = 1;
		stg.strokeStyle = "#000000";
		stg.beginPath();
		stg.moveTo(edit_x, edit_y + 5);
		stg.lineTo(edit_x + 20, edit_y + 5);
		stg.moveTo(edit_x, edit_y + 10);
		stg.lineTo(edit_x + 20, edit_y + 10);
		stg.moveTo(edit_x, edit_y + 15);
		stg.lineTo(edit_x + 20, edit_y + 15);
		stg.moveTo(edit_x + 10, edit_y);
		stg.lineTo(edit_x + 10, edit_y + 5);
		stg.moveTo(edit_x + 10, edit_y + 10);
		stg.lineTo(edit_x + 10, edit_y + 15);
		stg.closePath();
		stg.stroke();
		stg.strokeRect(edit_x + 1, edit_y + 1, 18, 18);

	};
	if (date_stage[ang_stg][i] == 12) {		//橋の柵
		stg.strokeStyle = "#200000";
		stg.lineWidth = 2;
		stg.strokeRect(edit_x, edit_y, 20, 21);
		stg.strokeStyle = "#400000";
		stg.strokeRect(edit_x, edit_y + 6, 20, 1); 
		
	};
	if (date_stage[ang_stg][i] == 13) {		//灯り
		stg.fillStyle = "#e7dc00";
		stg.fillRect(edit_x + 5, edit_y - 125, 10, 4);

		//stg.fillStyle = "#e7dc0040";
		//stg.beginPath();
		//stg.moveTo(edit_x + 5, edit_y - 120);
		//stg.lineTo(edit_x + 15, edit_y - 120);
		//stg.lineTo(edit_x + 25, edit_y + 20);
		//stg.lineTo(edit_x - 5, edit_y + 20);
		//stg.closePath();
		//stg.fill();

		stg.fillStyle = "#002500";
		stg.fillRect(edit_x + 5, edit_y - 130, 10, 5);
		stg.strokeStyle = "#003000";
		stg.lineWidth = 2;
		stg.strokeRect(edit_x + 10, edit_y + 20, 1, -150);
		stg.fillStyle = "#003000";
		stg.fillRect(edit_x + 7, edit_y - 20, 6, 40);
		
	};
	if (date_stage[ang_stg][i] == 14) {		//上下火球
		stg.fillStyle = "#ff0000";
		stg.strokeStyle = "#aa0000";
		stg.beginPath();
		stg.arc(edit_x + 10, edit_y + 10 - edit_array[0], 6, 0, 2 * Math.PI);
		stg.closePath();
		stg.fill();
		
	};
	if (date_stage[ang_stg][i] == 15) {		//消滅足場(e_a 0-49)
		if (edit_array[0] < 50) {

		stg.fillStyle = "#200060";


		stg.fillRect(edit_x, edit_y, 20, 20);
		stg.strokeStyle = "#000030";
		stg.strokeRect(edit_x, edit_y, 20, 20);
		};
		
	};
	if (date_stage[ang_stg][i] == 16) {		//消滅足場(e_a 51-100_?)
		if (edit_array[0] > 50) {

		stg.fillStyle = "#600020";
		

		stg.fillRect(edit_x, edit_y, 20, 20);
		stg.strokeStyle = "#300000";
		stg.strokeRect(edit_x, edit_y, 20, 20);
		};
		
	};



	edit_x += 20;
	if (edit_x >= 790) {
	edit_x = 0;
	edit_y += 20;
	};

	};

};

//----------------------------------------------------------------
//----------------------------------------------------------------


let x_n = 0;	//今の座標
let y_n = 300;

let x = 0;	//kskの変数
let y = 0;

let move_ok = 1;	//移動できるか？（1=おｋ 0=停止）

let walk_char_counter = 0;
let walkchar = 0;

function player_edit() {			//とりあえず自機描画部分

if (move_ok !== 2) {

walk_char_counter += Math.abs(x / 3);		//徒歩カウンター（モーション用）

if (walk_char_counter > 12) {			//徒歩モーションのやつ
walkchar++
walk_char_counter = 0;
	if (walkchar > 1) {

	walkchar = 0;
	};

};


stg.clearRect(0, 0, 800, 500);

//stg.strokeStyle = "#000050a0";			//当たり判定の枠色。表示する場合はこ↑こ↓の色を変える
//stg.strokeRect(x_n, y_n, 20, 40);

if (muteki_jikan < 1 || gk(muteki_jikan) == 1) {
stg.strokeStyle = "#000000";			//棒人間頭部描画
stg.fillStyle = "#ffffff";
stg.lineWidth = "2px";
stg.beginPath();
stg.arc(x_n + 10, y_n + 6, 7, 0, 2 * Math.PI);
stg.closePath();
stg.stroke();
stg.fill();

stg.beginPath();				//棒人間 首-腰
stg.moveTo(x_n + 10,y_n + 14);
stg.lineTo(x_n + 10, y_n + 28);
stg.closePath();
stg.stroke();

if (Math.abs(x) < 0.5) {			//棒人間　地上静止時　手足

stg.beginPath();
stg.moveTo(x_n + 10, y_n + 16);		//手
stg.lineTo(x_n + 2, y_n + 20);
stg.moveTo(x_n + 10, y_n + 16);
stg.lineTo(x_n + 18, y_n + 20);
stg.closePath();
stg.stroke();

stg.beginPath();
stg.moveTo(x_n + 10, y_n + 28);		//足
stg.lineTo(x_n + 2, y_n + 40);
stg.moveTo(x_n + 10, y_n + 28);
stg.lineTo(x_n + 18, y_n + 40);
stg.closePath();
stg.stroke();

} else {				

	y_n += 3;

	if (st_hit(now_stage) == 1) {			//棒人間　地上移動時手足
	y_n -= 3;


	move_te(walkchar);

	} else {
	y_n -= 3;					//棒人間空中時
	
	
	move_te(2);

	};


};


};
};
//---------------------------------------------------------------


y_n += 4;
if (st_hit(now_stage) == 1) {		//床判定部分
y_n -= 4;
y = 0;
	while (st_hit(now_stage) == 1) {
	y_n--
	};

} else {

y_n += 2;


};


x_n += x;		//横移動部分




if (x_n > 780) {		//次ステージ
if (boss_stage.includes(now_stage)) {
x_n = 780;
x = 0;
} else {
now_stage++
x_n = 0;
x = 0;
y_n = date_stage[now_stage][0] - 45;
y = 0;
};

};



if (x_n < -5) {		//画面外防止
x_n = -5;
x = 0;
};


if (st_hit(now_stage) == 1) {
x_n -= x * 1;
x = 0;
};

if (st_hit(now_stage) == 2) {			//マグマとかの死亡判定
	y_n = date_stage[now_stage][0] - 45;
	x_n = 0;
	x = 0;
	y = 0;
	power -= 800;
};

if (st_hit(now_stage, 2) == 3) {		//針判定
if (dmg_ne == 1 && muteki_jikan < 1) {
hp -= 30;
muteki_jikan = 30;
x = 0;
};
};

if (st_hit(now_stage, 3) == 4) {
y = -25;
};


y_n += y;

	if (st_hit(now_stage) == 1) {		//天井判定
		if (y < 0) {
		y = 0;
			while (st_hit(now_stage) == 1) {
			y_n++
			};
		};
	};

	if (y_n > 520) {			//落下死判定
	y_n = date_stage[now_stage][0] - 45;
	x_n = 0;
	x = 0;
	y = 0;
	power -= 800;
	};


x *= 0.6;	//減速用
if (upk == true) {
y += 0.6;
} else {
y += 1;
};
	if (y > 5) {
	y = 5;
	};
};


let lek = false;
let rik = false;
let upk = false;
let spk = false;


addEventListener("keydown", function(event) {	//操作。同時押し対応
	if (event.key == "ArrowRight") {
	lek = true;
	}
	if (event.key == "ArrowLeft") {
	rik = true;
	}
	if (event.key == "ArrowUp") {
	upk = true;
	}
	if (event.code == "Space") {
	spk = true;
	}



});



addEventListener("keyup", function(event) {	//操作。同時押し対応
	if (event.key == "ArrowRight") {
	lek = false;
	}
	if (event.key == "ArrowLeft") {
	rik = false;
	}
	if (event.key == "ArrowUp") {
	upk = false;
	}
	if (event.code == "Space") {
	spk = false;
	}



});


setInterval(function () {	//動作部分。60fps
if (move_ok == 1) {
	if (lek) {
	x += 3;
	power++
	};
	if (rik) {
	x -= 3;
	power++
	};

	if (upk) {
		if (y < 1.1 && y > 0) {
			y_n += 5
			if (st_hit(now_stage) == 1) {
			y = -18;
			y_n -= 10;
			jump.play()
			};
		};
	};

	if (power > 1000) {
	power = 1000;
	};
	if (power < 0) {
	power = 0;
	};




	if (hp < 1) {			//ダメージによる死亡判定・モーションとか？
	move_ok = 2;
	died_motion(x_n, y_n);		//死亡演出
	y_n = date_stage[now_stage][0] - 45;
	x_n = 0;
	x = 0;
	y = 0;
	power -= 1000;
	hp = 50;

	};



};
	muteki_jikan--			//無敵時間減らしー
},1000 / 60);

//---------------------------------------------------------------〇当たり判定部分↓(st_hit(now_stage) が1の場合、当たったと判断します。2の場合は死亡判定)
//当たり判定順番は（ブロック右辺、ブロック左辺、ブロック上辺、ブロック下辺）


let hit_x = 0;
let hit_y = 0;
let hit = 0;
let dmg_ne = 0;
let jump_die = 0;

function st_hit(stb, modehit) {			//当たり判定部分(返り値、当たっている場合はt,そうでない場合はfを返す。
hit = 0;
dmg_ne = 0;
jump_die = 0;
hit_x = 0;
hit_y = date_stage[stb][0];	//走査開始位置指定

for (let i3 = 1; i3 < date_stage[stb].length; i3++) {

	if (date_stage[stb][i3] == 1 || date_stage[stb][i3] == 3 || date_stage[stb][i3] == 4 || date_stage[stb][i3] == 11) {			//ブロック（正方形20x20の地面）の判定
		if (hit_x <= x_n + 20 && x_n <= hit_x + 20 && hit_y <= y_n + 40 && hit_y + 19 >= y_n) {	
		if (hit < 2) {
		hit = 1;
		};
	
		};
	};
	if (date_stage[stb][i3] == 2) {				//上半分ブロック（正方形20x10の地面）の判定
		if (hit_x <= x_n + 20 && x_n <= hit_x + 20 && hit_y <= y_n + 40 && hit_y + 4 >= y_n) {	

		if (hit < 2) {
		hit = 1;
		};
	
		};
	};
	if (date_stage[stb][i3] == 5) {								//マグマーー！！
		if (hit_x <= x_n + 20 && x_n <= hit_x + 20 && hit_y <= y_n + 40 && hit_y + 19 >= y_n) {	
		hit = 2;
	
		};
	};
	if (date_stage[stb][i3] == 7) {							//針のダメージ判定
		if (hit_x <= x_n + 10 && x_n <= hit_x + 10 && hit_y <= y_n + 50 && hit_y + 19 >= y_n) {	

		if (muteki_jikan < 1) {
		hit = 1;
		dmg_ne = 1;
		};
	
		};
	};
	if (date_stage[stb][i3] == 9) {							//丸太の判定　距離判定
		if (Math.sqrt(Math.pow((hit_x) - (x_n) , 2) + Math.pow ((hit_y) - (y_n + 18), 2) ) < 18) {	

		if (hit < 2) {
		hit = 1;
		};
	
		};
	};
	if (date_stage[stb][i3] == 10) {							//ジャンプ台の判定　距離判定
		if (Math.sqrt(Math.pow((hit_x) - (x_n) , 2) + Math.pow ((hit_y) - (y_n + 18), 2) ) < 18) {	

		jump_die = 1;
	
		};
	};
	if (date_stage[stb][i3] == 14) {							//上下火球の判定　矩形
		if (hit_x <= x_n + 10 && x_n <= hit_x + 10 && hit_y - edit_array[0] <= y_n + 20 && hit_y - edit_array[0] + 19 >= y_n) {	

		if (muteki_jikan < 1) {
		hit = 1;
		dmg_ne = 1;
		};
	
		};
	};
	if (date_stage[stb][i3] == 15 && edit_array[0] < 50) {			//点滅ブロック（正方形20x20の地面）の判定
		if (hit_x <= x_n + 20 && x_n <= hit_x + 20 && hit_y <= y_n + 40 && hit_y + 19 >= y_n) {	
		if (hit < 2) {
		hit = 1;
		};
	
		};
	};
	if (date_stage[stb][i3] == 16 && edit_array[0] > 50) {			//点滅ブロック（正方形20x20の地面）の判定
		if (hit_x <= x_n + 20 && x_n <= hit_x + 20 && hit_y <= y_n + 40 && hit_y + 19 >= y_n) {	
		if (hit < 2) {
		hit = 1;
		};
	
		};
	};


hit_x += 20;
	if (hit_x >= 800) {
	hit_x = 0;
	hit_y += 20;
	};

};

if (jump_die == 1) {
if (modehit == 3) {
return 4;
};
};

if (dmg_ne == 1) {

	if (modehit == 2) {
		if (muteki_jikan < 1) {
		return 3;
	
		};

	};

} else {
if (hit == 1) {
return 1;
} else {
return hit;
};
};

};


let dimer = 40;

function died_motion(died_x,died_y) {

let died_motion_timer = setInterval(function() {
mcv.clearRect(0, 0, 800, 500);
mcv.fillStyle = "#ff0000";
mcv.fillRect(died_x - dimer, 0, dimer * 2, 500);
dimer -= 2;

if (dimer < 1) {
move_ok = 1;
clearInterval(died_motion_timer);
dimer = 40;
mcv.clearRect(0, 0, 800, 500);
};

},1000 / 60);

};


function move_te(wcc) {			//地上時　手足描画部分
if (wcc == 2) {

	if (x > 0) {
	stg.beginPath();
	stg.moveTo(x_n + 10, y_n + 16);		//右向き時　手
	stg.lineTo(x_n + 3, y_n + 25);
	stg.moveTo(x_n + 10, y_n + 16);
	stg.lineTo(x_n + 12, y_n + 27);
	stg.closePath();
	stg.stroke();

	stg.beginPath();
	stg.moveTo(x_n + 10, y_n + 28);		//足
	stg.lineTo(x_n + 5, y_n + 41);
	stg.closePath();
	stg.stroke();
	stg.beginPath();
	stg.moveTo(x_n + 10, y_n + 28);
	stg.lineTo(x_n + 3, y_n + 36);
	stg.closePath();
	stg.stroke();

	} else {

	stg.beginPath();
	stg.moveTo(x_n + 10, y_n + 16);		//左向き時　手
	stg.lineTo(x_n + 17, y_n + 25);
	stg.moveTo(x_n + 10, y_n + 16);
	stg.lineTo(x_n + 6, y_n + 27);
	stg.closePath();
	stg.stroke();

	stg.beginPath();
	stg.moveTo(x_n + 10, y_n + 28);		//足
	stg.lineTo(x_n + 15, y_n + 41);
	stg.closePath();
	stg.stroke();
	stg.beginPath();
	stg.moveTo(x_n + 10, y_n + 28);
	stg.lineTo(x_n + 17, y_n + 36);
	stg.closePath();
	stg.stroke();

	};


} else {

if (x > 0) {
stg.beginPath();
stg.moveTo(x_n + 10, y_n + 16);		//右向き時　手
stg.lineTo(x_n , y_n + 18);
stg.moveTo(x_n + 10, y_n + 16);
stg.lineTo(x_n + 15, y_n + 22);
stg.closePath();
stg.stroke();

	if (wcc == 0) {
	stg.beginPath();
	stg.moveTo(x_n + 10, y_n + 28);		//足
	stg.lineTo(x_n + 2, y_n + 35);
	stg.moveTo(x_n + 10, y_n + 28);
	stg.lineTo(x_n + 14, y_n + 40);
	stg.closePath();
	stg.stroke();
	} else {
	stg.beginPath();
	stg.moveTo(x_n + 10, y_n + 28);		//足
	stg.lineTo(x_n + 5, y_n + 41);
	stg.closePath();
	stg.stroke();
	};


} else {
stg.beginPath();
stg.moveTo(x_n + 10, y_n + 16);		//右向き時　手
stg.lineTo(x_n + 4, y_n + 22);
stg.moveTo(x_n + 10, y_n + 16);
stg.lineTo(x_n + 20, y_n + 20);
stg.closePath();
stg.stroke();

	if (wcc == 0) {
	stg.beginPath();
	stg.moveTo(x_n + 10, y_n + 28);		//足
	stg.lineTo(x_n + 18, y_n + 35);
	stg.moveTo(x_n + 10, y_n + 28);
	stg.lineTo(x_n + 6, y_n + 40);
	stg.closePath();
	stg.stroke();
	} else {
	stg.beginPath();
	stg.moveTo(x_n + 10, y_n + 28);		//足
	stg.lineTo(x_n + 15, y_n + 41);
	stg.closePath();
	stg.stroke();
	};


};

};	//if wcc == 2 とじ

};

//-----------------------------------------------------------------------------------------------------------------

function gk(suji) {		//偶数(0)奇数(1)判定
return suji % 2;
};

//--------------------------------------------------ボス描画部分↓

let boss_char_gra = [

[" ∧_∧","(ﾟーﾟ*)","|U  U |","└───"],					//しぃ
["　　∧_∧","    (ﾟーﾟ*)","*͟͟͞͞⊂ |=͟͟͞͞  |","    └───"],
["　　∧_∧","    (ﾟーﾟ*)","=͟͟͞͞⊂ |-͟͟͞͞⊂  |","    └───"],
[" ∧_∧","(;ー;*)","|U  U |","└───"],
[" ∧∧","(ﾟ∀ﾟ)"," |　|"," |民|"," |主|"," |主|"," |義|"," |遂|"," |行|"," |マ|"," |ン|"," |＿|"],		//民主主義遂行マン
[" 　∧ ∧","　(ﾟДﾟ,)","　⊂　　⊃","　｜＿ |～","　 U　U"],			//ぎこ 5
[" 　∧ ∧","　(ﾟДﾟ,)","=⊂　　⊃","　｜＿ |ー","　 U　U"],
[" 　∧ ∧","　(,ﾟДﾟ)","　⊂　　⊃","～｜＿ |　","　 U　U"],
[" 　∧ ∧","　(,ﾟДﾟ)"," ⊂　　⊃=","ー｜＿ |　","　 U　U"],
["             　　　　　　 (·ω·`)"," ___________/￣￣|_____/￣|","└───────|___________|","  　　        /￣￣￣￣￣￣￣￣￣￣￣￣￣|"," 　　　　 <||_  _  _  _  _  _   _  _  _/","　   　     <j|_________________/"],
[" 　　 _/￣￣|","　　/ (·ω·`)	  /"," /￣￣| 　  |/￣￣￣/"," ￣ ￣| 神  |￣￣ ￣","  /　 |_____|   /","　　　　|||","　　　　^ ^"],		//ニートオブ　１０
[" 　　 _/￣￣|","　　/ (·ω·`)	  /"," /￣￣| 　  |/￣￣￣/"," ￣/￣| 神  |￣￣/￣","   　 |_____|","　　　　|||","　　　　 ^"],
[" 　　  _/￣|"," 　  / (·ω·`)	      /"," /￣￣| 　  |/￣￣￣/","  ￣ ￣| 神  |￣￣ ￣","   /    |___|   /","　　　　|||","　　　  ^ ^"],
[" 　　  _/￣|"," 　  / (·ω·`)	      /","/￣￣| 　   |/￣￣￣/","￣/ ￣| 神  |￣￣/￣","         |___|","　　　　|||","　　　    ^"],

];

let boss_b = 0;		//ボス戦の番号。0の場合は非ボス戦状態
let boss_b2 = 0;	//ボス戦の状況とかに使うやつ。会話中とか判定用
let boss_l = 0;		//ボス部分のループカウンター。

let boss_x = 800;	//ボス座標
let boss_y = 420;


function boss_edit_main() {

bsg.clearRect(0, 0, 800, 500);

if (boss_b == 1) {
si();
};
if (boss_b == 2) {
mins();
};
if (boss_b == 3) {
giko();
};
if (boss_b == 4) {
neos();
};


};

//------------------------------------------------------------

//しぃ

let si_counter = 30;
let sihp = [15, 15, 0];		//[現在HP,最大HP,無敵時間用]
let si_to_me = 0;
let si_at = 0;

function si() {

	if (boss_b2 == 0) {		//会話中の時
	boss_char_edit(0)	//ボス描画
		if (boss_x > 600) {
		boss_x--
		};
	};

	if (boss_b2 == 1) {		//メインパターン

		if (si_counter > -1) {		//si_counterが0より大きい（＝移動パターン）
			if (si_to_me == 0) {
			boss_x -= 3;
			boss_char_edit(0);
			} else {
			boss_x += 3;
			boss_char_edit(0);
			};

		};

		if (si_counter == 0) {		//移動終了後のやつ(1f)

		if (Math.abs(boss_x - (x_n + 10)) < 150) {
		
		si_at = 1;
		

		} else {
			if (boss_x < x_n) {
			si_to_me = 1;
			si_counter = 30;
			} else {
			si_to_me = 0;
			si_counter = 20;
			};
		};


		};
		
		if (si_at == 1) {	//攻撃モーション
		boss_char_edit(gk(si_counter) + 2);
		boss_x -= 1
		if (x_n + 20 > boss_x && x_n < boss_x + 50 && y_n > 400 && muteki_jikan < 1) {		//しぃ攻撃当たり判定！
		hp -= 6;
		muteki_jikan = 20
		x -= 6
		};

		if (si_counter < -20) {
		si_at = 0;
		si_counter = 50;

			if (boss_x < x_n) {
			si_to_me = 1;
			si_counter = 50;
			} else {
			si_to_me = 0;
			si_counter = 50;
			};
		};

		};


	si_counter--
	sihp[2] --;

	if (x_n + 20 > boss_x && x_n < boss_x + 57 && y_n + 40 > boss_y && sihp[2] < 1) {			//自機に踏まれたときの
	y = -20;
	sihp[2] = 20;
	sihp[0] --;

	if (sihp[0] < 1) {
	console.log("--しぃ撃破");
	boss_b2 = 2;
	si_at = 0;
	si_counter = 0;
	};

	};


	};

	if (boss_b2 == 2) {
	boss_char_edit(3);
	boss_y += 3;
	if (boss_y > 800) {
	boss_b = 0;
	boss_b2 = 0;
	};

	};


};

//民主主義遂行マン

let mins_counter = 0;

function mins() {

if (mins_counter > 100 && mins_counter <= 300) {		//上昇
boss_x = 480;
boss_y = 500 - (mins_counter - 100) * 2;
boss_char_edit(4)
mins_hit();
};

if (mins_counter > 300 && mins_counter < 700) {		//会話（一方的
boss_x = 480;
boss_y = 100;
boss_char_edit(4)
	if (mins_counter < 400) {
	bsg.fillText("< 民主主義に興味ある？", 530, 130);
	} else if (mins_counter < 500) {
	bsg.fillText("< え？誰やねんって？", 530, 130);
	} else if (mins_counter < 600) {
	bsg.fillText("< 妨害役に決まってるじゃないですか", 530, 130);
	} else {
	bsg.fillText("< これだから社会主義思想は", 530, 130);
	};
mins_hit();
};

if (mins_counter >= 700) {		//退場
boss_x = 480;
boss_y -= 2;
boss_char_edit(4);
bsg.fillText("< ちょっと帰りますよ", 530, boss_y + 30);
mins_hit();
};

if (mins_counter > 860) {		//終了
console.log("--民主主義遂行マン退場");
boss_b = 0;
boss_b2 = 0;
bostageno(1)
	boss_x = 500;
	boss_y = 300;
};

mins_counter++;

};

function mins_hit() {
	if (boss_x < x_n + 20 && boss_x + 30 > x_n && boss_y < y_n + 40 && boss_y + 185 > y_n && muteki_jikan < 1) {	//民主主義遂行マン判定
	muteki_jikan = 2;
	hp -= 3;
	x = 0;
	y = 0;
	};

};

//ぎこ

let giko_counter = 0;
let giko_hp = [20, 20, 0, 0];	//現、最大、無敵、攻撃の方向（0=左　1=右）
let giko_patt = 1;		//ぎこ行動パターン
let giko_shot = [];	//ぎこショット！[x,y,vx,vy]

function giko() {

if (boss_b2 == 0) {

if (boss_y < 380) {
boss_y += 4
} else {
boss_y = 380
};
boss_char_edit(5);

};

if (boss_b2 == 1) {		//行動パターン

	if (giko_patt == 1) {
	if (boss_x + 30 > x_n) {
	boss_x -= 2;
	boss_char_edit(5);
	} else {
	boss_x += 2;
	boss_char_edit(7);
	};

	};

	if (giko_counter > 100) {	//次の行動判定
	giko_counter = 0;
	if (Math.abs((boss_x + 30) - x_n) > 60) {	//レーザー
	giko_patt = 2;
	};
	if (Math.abs((boss_x + 30) - x_n) > 130) {	//弾
	giko_patt = 4;
	};
	if (Math.abs((boss_x + 30) - x_n) < 60) {	//回避
	giko_patt = 3;
	};

	};

	if (giko_patt == 2) {		//レーザー
	
	if (giko_counter <= 30) {	//予兆レーザー
		if (giko_counter == 0) {		//発射方向決め

			if (boss_x + 30 < x_n) {
			giko_hp[3] = 1;
			} else {
			giko_hp[3] = 0;
			};

		};


		if (giko_hp[3] == 0) {
		boss_char_edit(6);
		bsg.fillStyle = "#ffffff";
		bsg.fillRect(boss_x, 403 - (giko_counter / 8), -800, giko_counter / 4);
		} else if (giko_hp[3] == 1) {
		boss_char_edit(8);
		bsg.fillStyle = "#ffffff";
		bsg.fillRect(boss_x + 80, 403 - (giko_counter / 8), 800, giko_counter / 4);
		};
 
	};
	if (giko_counter > 30 && giko_counter < 60) {	//判定ありレーザー


		if (giko_hp[3] == 0) {
		boss_char_edit(6);
		bsg.fillStyle = "#3100ff";
		bsg.fillRect(boss_x, 403 - ((giko_counter - 30)), -800, 2 *(giko_counter - 30));
		if (boss_x > x_n && 403 - (giko_counter - 30) < y_n + 40 && muteki_jikan < 1) {
		muteki_jikan = 4;
		hp -= 3;
		x = 0;
		};
		} else if (giko_hp[3] == 1) {
		boss_char_edit(8);
		bsg.fillStyle = "#3100ff";
		bsg.fillRect(boss_x + 80, 403 - ((giko_counter - 30)), 800, 2 * (giko_counter - 30));
		if (boss_x + 80 > x_n + 20 && 403 - (giko_counter - 30) < y_n + 40 && muteki_jikan < 1) {
		muteki_jikan = 4;
		hp -= 3;
		x = 0;
		};
		};
 
	};
	if (giko_counter >= 60 && giko_counter < 80) {	//判定ありレーザー


		if (giko_hp[3] == 0) {
		boss_char_edit(6);
		bsg.fillStyle = "#3311ff";
		bsg.fillRect(boss_x, 403 - 32, -800, 64);

		if (boss_x > x_n && 371 < y_n + 40 && muteki_jikan < 1) {		//判定
		muteki_jikan = 80;
		hp -= 30;
		x -= 15;
		};

		} else if (giko_hp[3] == 1) {
		boss_char_edit(8);
		bsg.fillStyle = "#3311ff";
		bsg.fillRect(boss_x + 80, 403 - 32, 800, 64);

		if (boss_x + 80 < x_n + 20 && 371 < y_n + 40 && muteki_jikan < 1) {		//判定
		muteki_jikan = 80;
		hp -= 30;
		x += 15;
		};

		};

 
	};
	if (giko_counter >= 80) {
	giko_counter = 0;
	giko_patt = 1;
	};
	
	};

	if (giko_patt == 3) {		//回避
	boss_char_edit(5);
	boss_x += 7;
	if (giko_counter > 10 && giko_counter < 15) {
	giko_shot.push([boss_x, boss_y + 30, -10, 0.8]);
	giko_shot.push([boss_x, boss_y + 40, -10, 0.7]);
	};
		if (giko_counter > 30) {
		giko_counter = 0;
		giko_patt = 1;
		};
	};
	if (giko_patt == 4) {		//ぎこショット

	if (boss_x + 30 > x_n) {
	boss_char_edit(5);
	giko_shot.push([boss_x, boss_y + 20, -10, 0.5]);	//[x,y,vx,vy]追加
	} else {
	boss_char_edit(7);
	giko_shot.push([boss_x + 75, boss_y + 20, 10, 0.5]);	//[x,y,vx,vy]追加
	};
		if (giko_counter > 20) {
		giko_counter = 0;
		giko_patt = 1;
		};

	};

	if (giko_shot.length > 0) {		//ぎこショット描画
		for (let gsi = 0; gsi < giko_shot.length; gsi++) {
		bsg.fillStyle = "#0000ff";
		bsg.fillRect(giko_shot[gsi][0], giko_shot[gsi][1], 3, 3);
		giko_shot[gsi][0] += giko_shot[gsi][2];
		giko_shot[gsi][1] += giko_shot[gsi][3];

		if (giko_shot[gsi][0] < x_n + 15 && giko_shot[gsi][0] + 3 > x_n + 5 && giko_shot[gsi][1] < y_n + 35 && giko_shot[gsi][1] + 3 > y_n && muteki_jikan < 1) {		//	ぎこショット判定
		hp -= 8;
		muteki_jikan = 10;
		};

		if (giko_shot[gsi][0] < 0 || giko_shot[gsi][0] > 800) {
		giko_shot.splice(gsi, 1);
		};

		};
	};

	if (giko_hp[2] < 1 && boss_y + 5 < y_n + 40 && boss_x < x_n + 20 && boss_x + 70 > x_n && boss_y + 25 > y_n + 40) {		//踏み判定
	giko_hp[2] = 10;
	giko_hp[0]--;
	y = -20;
	if (giko_hp[0] < 1) {		//撃破判定
	giko_hp[0] = 0;
	y = -30;
	boss_b2 = 2;
	};
	
	};

	giko_hp[2]--;
	giko_counter++;

};			//boss_b2=1とじ

if (boss_b2 == 2) {
boss_y += 5;
boss_char_edit(5);
	if (boss_y > 800) {
	boss_b = 0;
	boss_b2 = 0;
	boss_y = 382;
	boss_x = 600;
	bsg.clearRect(0, 0, 800, 500);
	console.log("--ぎこ撃破");
	};
};


};		//functionとじ

let neos_hp = [20, 20, 0, 0];	//現在HP,最大HP,無敵時間,左（０）右（１）
let neos_pat = 1;		//形態（行動パターン）
let neos_counter = 0;
let neos_shot = [];		//砲撃・ショット用[x,y,vx,vy,種類]
function neos() {				//ニートオブムショーク
	if (boss_b2 == 0) {
	boss_char_edit(9);
	if (boss_x > 500) {
	boss_x--;
	};
	};

	if (boss_b2 == 1) {
		if (neos_pat == 1) {
		boss_char_edit(9);

			if (neos_counter > 50) {		//第一形態
			neos_counter = 0;
			neos_shot.push([boss_x + 10, boss_y + 18, -10, 0.2, 1]);		//砲撃
				if (boss_x + 60 < x_n) {
				neos_hp[3] = 1;
				} else {
				neos_hp[3] = 0;
				};
			};

			if (neos_hp[3] == 0) {
			boss_x--;
			} else {
			boss_x++;
				if (boss_x > 650) {
				boss_x = 650;
				};
			};
		neos_counter ++;
		};
	};

	if (neos_shot.length > 0) {
		for (let nesi = 0; nesi < neos_shot.length; nesi++) {
 
			if (neos_shot[nesi][4] == 1) {
			bsg.fillStyle = "#303030";
			circle(neos_shot[nesi][0], neos_shot[nesi][1], 6, 1);
			};
		neos_shot[nesi][0] += neos_shot[nesi][2];
		neos_shot[nesi][1] += neos_shot[nesi][3];
			if (neos_shot[nesi][0] < -20) {
			neos_shot.splice(nesi, 1);
			nesi--;
			};
			if (neos_shot[nesi][4] == 1) {
			if (neos_shot[nesi][0] - 10 < x_n + 20 && neos_shot[nesi][0] + 10 > x_n && neos_shot[nesi][1] - 10 < y_n + 38 && neos_shot[nesi][1] + 6 > y_n && muteki_jikan < 1) {
	
				muteki_jikan = 20;
				x -= 30;
				y -= 8;
				hp -= 15;
			};
			};

		};
	};

};


//-----------------------------------------------

function boss_char_edit(boss_pnum) {				//ボス描画部分（ボスデータ持ってくる）

bsg.font = "bold 15px sans-serif";
bsg.fillStyle = "#000000";

for (let bei = 0; bei < boss_char_gra[boss_pnum].length; bei++) {
bsg.fillText(boss_char_gra[boss_pnum][bei],boss_x, boss_y + (bei * 15));
};

};

function circle(sx, sy, sk, ss) {			//円描画(x,y,半径,スタイル（1=塗り2=枠3=両方)
		stg.beginPath();
		stg.arc(sx, sy, sk, 0, 2 * Math.PI);
		stg.closePath();
		if (ss == 1) {
		stg.fill();
		};
		if (ss == 2) {
		stg.stroke();
		};
		if (ss == 3) {
		stg.fill();
		stg.stroke();
		};
};

