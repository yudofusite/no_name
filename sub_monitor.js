//サブ画面（300x500)


function bg() {

sub.fillStyle = "#000020";
sub.fillRect(0, 0, 300, 500);
sub.strokeStyle = "#ffffff";
sub.strokeRect(2, 2, 296, 496);
};

let section_name = ["( ᐛ )城　入口","٩( ᐛ )و城　連絡トンネル","٩( ᐛ )و城　本館連絡橋","٩( ᐛ )و城　入口"];

setInterval(function() {
sub.clearRect(0, 0, 300, 500);
bg();

if (scene == 3) {
gage();
};

}, 1000/ 30);




function gage() {		//ゲージ類描画

sub.font = "bold 15px sans-serif";
sub.fillStyle = "#ffffff";
sub.fillText("SECTION" + now_section + " " + section_name[now_section - 1], 10, 23);

sub.font = "bold 10px serif";
sub.fillText("HP", 8, 72);
sub.fillStyle = "#000040";
sub.fillRect(8, 78, 254, 24); 
sub.fillStyle = "#00a8ff";
sub.fillRect(10, 80, 250 * (hp / 50), 20);		//HPバー

sub.fillText("POWER", 8, 142);
sub.fillStyle = "#000040";
sub.fillRect(8, 148, 254, 24); 
if (power < 1000) {
sub.fillStyle = "#a800ff";
} else {
sub.fillStyle = "#d8eae5";
};

sub.fillRect(10, 150, 250 * (power / 1000), 20);				//必殺技バー


if (boss_stage.includes(now_stage)) {		//ボスステージの場合（ボスHPバー）

sub.fillStyle = "#dd0000";
sub.fillText("ENEMY", 8, 222);
sub.fillStyle = "#400000";
sub.fillRect(8, 228, 254, 12);

sub.fillStyle = "#ff0000";

if (now_stage == 17) {		//しぃ
sub.fillRect(10, 229, 250 * (sihp[0] / sihp[1]),10);
};

if (now_stage == 27) {		//民主主義遂行マン
sub.fillStyle = "#000000";
sub.fillRect(10, 229, 250, 10);
};

if (now_stage == 36) {		//ぎこ
sub.fillRect(10, 229, 250 * (giko_hp[0] / giko_hp[1]),10);
};

if (now_stage == 40) {		//ニートオブムショーク
sub.fillRect(10, 229, 250 * (neos_hp[0] / neos_hp[1]),10);
};

};


sub.fillStyle = "#ffffff";
sub.font = "13px sans-serif";
	if (move_ok == 1) {
	sub.fillText("←→　移動", 10, 300);
	sub.fillText("↑　　ジャンプ", 10, 320);

	if (power == 1000) {
	sub.fillStyle = "#ff0000";
	sub.fillText("SPACE　必殺技発動！", 10, 350);
	};

	};
sub.fillStyle = "#dddddd";
sub.fillText("MAP " + (now_stage + 1), 10, 40);
};


