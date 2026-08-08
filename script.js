<script>
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// 固定の物体（例: 障害物）
const target = {
x: 55,
y: 50,
width: 25,
height: 580
};

const target2 = {
x: 600,
y: 500,
width: 50,
height: 50
};

const target3 = {
x: 130,
y: 300,
width: 50,
height: 50,
speedY: 25,
};

const target4 = {
x: 300,
y: 200,
width: 25,
height: 25,
speedX: 25,
};

const target5 = {
x: 300,
y: 450,
width: 25,
height: 25,
speedX: 30,
};

const target6 = {
x: 600,
y: 50,
width: 25,
height: 25,
speedY: 5,
};


// 動かす物体（プレイヤー）
let player = {
x: 0,
y: 0,
width: 40,
height: 40,
speed: 2
};


// キーの状態管理
const keys = {};

window.addEventListener('keydown', e => keys[e.key] = true);
window.addEventListener('keyup', e => keys[e.key] = false);

function isColliding(a, b) {
return !(
a.x + a.width < b.x || // aがbの左側
a.x > b.x + b.width || // aがbの右側
a.y + a.height < b.y || // aがbの上側
a.y > b.y + b.height // aがbの下側
);
}

function gameLoop() {
// 移動処理
if (keys['ArrowRight'] || keys['d']) player.x += player.speed;
if (keys['ArrowLeft'] || keys['a']) player.x -= player.speed;
if (keys['ArrowDown'] || keys['s']) player.y += player.speed;
if (keys['ArrowUp'] || keys['w']) player.y -= player.speed;

//ターゲット３の処理
target3.y += target3.speedY
if (target3.y >= 800 - target3.height >0){
target3.y = 800-target3.height;
target3.speedY =-25}
if (target3.y <= 0 - target3.height >0){
target3.y = 0-target3.height;
target3.speedY =25}

//ターゲット4の処理
target4.x += target4.speedX
if (target4.x >= 800 - target4.height >0){
target4.x = 800-target4.height;
target4.speedX =-25}
if (target4.x <= 0 - target4.height >0){
target4.x = 0-target4.height;
target4.speedX =25}

//ターゲット5の処理
target5.x += target5.speedX
if (target5.x >= 800 - target5.height >0){
target5.x = 800-target5.height;
target5.speedX =-29}
if (target5.x <= 200 - target5.height >0){
target5.x = 200-target5.height;
target5.speedX =29}

//ターゲット6の処理
target6.y += target6.speedY
if (target6.y >= 800 - target6.height >0){
target6.y = 800-target6.height;
target6.speedY =-(target6.speedY*1.2)}
if (target6.y <= 0 - target6.height >0){
target6.y = 0-target6.height;
target6.speedY =-(target6.speedY*1.2)}

if (target6.speedY>50){target6.speedY=50;}





// 壁との衝突（簡易）
player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));


// 描画
ctx.clearRect(0, 0, canvas.width, canvas.height);

// 対象物体（赤）
ctx.fillStyle = 'red';
ctx.fillRect(target.x, target.y, target.width, target.height);

ctx.fillStyle = 'red';
ctx.fillRect(target2.x, target2.y, target2.width, target2.height);

ctx.fillStyle = 'green';
ctx.fillRect(target3.x, target3.y, target3.width, target3.height);

ctx.fillStyle = 'orange';
ctx.fillRect(target4.x, target4.y, target4.width, target4.height);

ctx.fillStyle = 'orange';
ctx.fillRect(target5.x, target5.y, target5.width, target5.height);

ctx.fillStyle = 'green';
ctx.fillRect(target6.x, target6.y, target6.width, target6.height);


// プレイヤー（青）
ctx.fillStyle = 'blue';
ctx.fillRect(player.x, player.y, player.width, player.height);



// 当たり判定チェック
if (isColliding(player, target)) {
player.x=0,
player.y=0
}

if (isColliding(player, target2)) {
player.x=0,
player.y=0
}

if (isColliding(player, target3)) {
player.x=0,
player.y=0
}

if (isColliding(player, target4)) {
player.x=0,
player.y=0
}
if (isColliding(player, target5)) {
player.x=0,
player.y=0
}if (isColliding(player, target6)) {
player.x=0,
player.y=0
}



if ( player.x >= 550 && player.y >=550){
alert("ゲームクリア");}


requestAnimationFrame(gameLoop);
}
gameLoop();
</script>
