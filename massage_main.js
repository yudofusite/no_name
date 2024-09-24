let massage_func_t = [0, 12, 19, 28];			//表示待ちのメッセージ番号
let massage_talk_t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let bg_func_t = [12, 17, 19, 27, 28];				//背景変更待ちのマップ番号
let massage_func_f = 0;				//メッセージ表示終了検知用

let boss_func_f = [17, 27, 36, 40];			//ボス出す奴



//--------------------------------------------

function massage_func() {

let massage_timer = setInterval(function() {			//現在地のやつ

print_mas("SECTION1　( ᐛ )城（ぱぁしろ）入り口　庭", 0);		//("セクション名",MAP番号（メッセージ番号でもある）);

print_mas("SECTION2　( ᐛ )城　連絡通路トンネル", 12);

print_mas("SECTION3　( ᐛ )城　本館連絡橋", 19);

print_mas("SECTION4　( ᐛ )城　本館入口", 28);

bg_ch(1, 12);
bg_ch(1.5, 17);
bg_ch(2, 19);
bg_ch(2.5, 27);
bg_ch(3, 28);

boss_das(1, 17);		//ボス出すやつ　（ボス番号,マップ番号）
boss_das(2, 27);
boss_das(3, 36);
boss_das(4, 40);

print_talk("٩( ᐛ )و城の門番やで", 17, 1, 1);				//("セリフ", map番号, メッセージ番号, 移動可不可(不可1、可2);
print_talk("よわそうな棒人間やね", 17, 2, 1);
print_talk("じゃけん削除しましょうねー^^", 17, 3, 1);
print_talk2("あぼーん(敗北)", 17, sihp[0], 0, 1, 4, 0);		//セリフ　map番号　条件１　条件２　うごけるか(可1不可0)　メッセージ番号　任意でボスステージ消去用

print_talk("たまげたなぁ・・・", 36, 6, 1);
print_talk("棒人間の分際でどう？恥ずかしくないの？", 36, 7, 1);
print_talk("・・・・・・", 36, 8, 1);
print_talk("いいよ！来いよ！", 36, 9, 1);
print_talk2("逝ってヨシ！！！", 36, giko_hp[0], 0, 1, 10, 2);

print_talk("見かけない顔だね", 40, 12, 1);
print_talk("ちょっとそこどいてくれる？", 40, 13, 1);

boss_sen(1, massage_talk_t[0], 4, 0);		//ボス戦況（boss_b2）変更用。（boss_b2の数値, 条件1,条件2, boss_b2を変えるとき（変える前）のboss_b2の値）
boss_sen(1, massage_talk_t[0], 10, 0);		//ぎこ開始
boss_sen(1, massage_talk_t[0], 14, 0);		//ニートオブムーショック開始

},1000 / 60);

};



//----------------------------------------------------------------

let bostageno = new Function("bstg", "boss_stage[bstg] = 0");

function print_talk2(naiyo2, mapnum, sw_1, sw_2, move_option_pt2, talk2number, kansu) {
	if (now_stage == mapnum && sw_1 == sw_2 && massage_talk_t.includes(talk2number)) {
	massage_talk_t.splice(0, 1);
	talk_edit(naiyo2, 1, move_option_pt2);
	if (kansu !== "") {
	bostageno(kansu);
	};
	};

};

function boss_sen(b2num, sw1, sw2, b2nums) {
	if (sw1 == sw2) {
	if (boss_b2 == b2nums) {
	boss_b2 = b2num;
	};
	};
};


function boss_das(boss_numb,mnboss) {
	if (now_stage == mnboss && boss_b == 0 && boss_func_f.includes(mnboss)) {
	boss_b = boss_numb;
	boss_func_f.splice(0, 1);
	};
};




function print_talk(naiyo_t, men_t, mas_num, move_option_pt) {
if (now_stage == men_t && massage_talk_t[0] == mas_num) {
talk_edit(naiyo_t,1, move_option_pt);
							};

};

function print_mas(naiyo_m, men_m) {
if (now_stage == men_m && massage_func_t.includes(men_m)) {
massage_func_t.splice(0,1);
mas_edit(naiyo_m);
							};

};

//----------------------------------------------------------------


function mas_edit(f_mas) {
	massage_func_f = 0;
	mas.fillStyle = "#000000";
	let mas_edit_timer = setInterval(function() {
	if (massage_func_f < 25) {
	massage.setAttribute("height", 20 + massage_func_f +"px");
	};
	if (massage_func_f > 150) {
	massage.setAttribute("height", 180 - massage_func_f +"px");
	};


	mas.clearRect(0, 0, 800, 600);
	mas.font = "bold 25px sans-serif";
	mas.fillText(f_mas, 40, 40);
	massage_func_f++

	if (massage_func_f > 181) {
	clearInterval(mas_edit_timer);
	mas.clearRect(0, 0, 800, 500);
	massage.setAttribute("height", "0px");
	};

	}, 1000 / 60);

};



function talk_edit(f_talk,f_t_er,f_t_move) {
if (f_t_move == 1) {
move_ok = 0;
};

	massage_func_f = 0;

		if (f_t_er == 1) {
		massage_talk_t[0] = "--";
		};


	let mas_edit_timer = setInterval(function() {
	if (massage_func_f < 25) {
	massage.setAttribute("height", 20 + massage_func_f +"px");
	};
	if (massage_func_f > 160) {
	massage.setAttribute("height", 200 - massage_func_f +"px");
	};

	mas.clearRect(0, 0, 800, 600);
	mas.fillStyle = "#00002060";
	mas.fillRect(35, 20, 730, 45);
	mas.fillStyle = "#eeeeee";
	mas.font = "bold 20px serif";
	mas.fillText(f_talk, 390 - (f_talk.length / 2 * 20), 40);
	massage_func_f += 2

	if (massage_func_f > 192) {
	clearInterval(mas_edit_timer);
	mas.clearRect(0, 0, 800, 500);
	massage.setAttribute("height", "0px");
	move_ok = 1;

if (f_t_move == 2) {
move_ok = 1;
};


		if (f_t_er == 1) {				//重複防止
		massage_talk_t.splice(0,1);
		};

	};

	}, 1000 / 30);

};


function bg_ch(bg_pat, bg_num, mas_num) {

if (now_stage == bg_num && bg_func_t.includes(bg_num)) {
bg_func_t.splice(0, 1);
bg_p = bg_pat;
bg_edit();
};

};


//------------------------------------------------




let bg_p = "";						//背景描画部分


function bg_edit() {

if (bg_p == 0) {		//section1
bgf.clearRect(0, 0, 800, 500);
bgf.fillStyle = "#006ba8";
bgf.fillRect(0, 0, 800, 500);
bgf.fillStyle = "#005b98";
bgf.fillRect(0, 0, 800, 100);
};

if (bg_p == 1) {		//section2
now_section = 2;
bgf.clearRect(0, 0, 800, 500);
bgf.fillStyle = "#555555";
bgf.fillRect(0, 0, 800, 500);

};

if (bg_p == 1.5) {		//section2　ボス前
bgf.clearRect(0, 0, 800, 500);
bgf.fillStyle = "#666666";
bgf.fillRect(0, 0, 800, 500);

};

if (bg_p == 2) {		//section3
now_section = 3;
bgf.clearRect(0, 0, 800, 500);
bgf.fillStyle = "#00317b";
bgf.fillRect(0, 0, 800, 500);
bgf.fillStyle = "#002e64";
bgf.fillRect(0, 0, 800, 100);
};

if (bg_p == 2.5) {		//section3 boss
bgf.clearRect(0, 0, 800, 500);
bgf.fillStyle = "#cccccc";
bgf.fillRect(0, 0, 800, 500);
};

if (bg_p == 3) {		//section4
now_section = 4;
bgf.clearRect(0, 0, 800, 500);
bgf.fillStyle = "#777777";
bgf.fillRect(0, 0, 800, 500);
};



};

bg_edit();

//------------------------------------------------






