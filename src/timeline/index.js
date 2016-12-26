// 粒子总数
var COUNT = 500;
// 重力
var G = -0.1;
// 摩擦力
var F = -0.04;

var objects = [];

function init() {
    for (var i = 0; i < COUNT; i++) {
        var d = Math.random() * 2 * Math.PI;
        var v = Math.random() * 5;
        var vx = v * Math.cos(d);
        var vy = v * Math.sin(d);

        var circle = $('<div id="circle-' + i + '" class="circle"></div>');
        circle.appendTo($('.main'));

        objects.push({
            x: 250,
            y: 250,
            vx: vx,
            vy: vy
        });
    }
}

function updateCircle() {
    for (var i = 0; i < COUNT; i++) {

        var x = objects[i].x;
        var y = objects[i].y;
        var vx = objects[i].vx;
        var vy = objects[i].vy;

        var v = Math.sqrt(vx * vx + vy * vy);
        if (Math.abs(vx) < 1e-9) vx = 0;
        // 速度分量改变
        vx += F * vx / v;
        vy += F * vy / v + G;
        x += vx;
        y += vy;

        objects[i].x = x;
        objects[i].y = y;
        objects[i].vx = vx;
        objects[i].vy = vy;
        $('#circle-' + i).css({'top': 400 - y, 'left': x});
    }
}

var interval = null;

function showAnimation() {
    if (interval) clearInterval(interval);
    objects = [];
    $('.main').html('');
    init();
    interval = setInterval(updateCircle, 1000 / 60);
}