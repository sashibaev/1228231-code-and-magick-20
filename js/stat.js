'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = -150;
var DISTANCE_BETWEEN_COLUMNS = 50;
var BAR_LEFT_INDENT = 40;
var TEXT_LEFT_INDENT = 20;
var TEXT1_TOP_INDENT = 40;
var TEXT2_TOP_INDENT = 60;
var BOTTOM_INDENT = 260;
var BAR_BOTTOM_INDENT = 240;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = 'normal 16px PT Mono';
  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_LEFT_INDENT, TEXT1_TOP_INDENT);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_LEFT_INDENT, TEXT2_TOP_INDENT);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var randomSaturation = Math.floor(Math.random() * 100);
      ctx.fillStyle = 'hsl(240,' + randomSaturation + '%, 50%)';
    }

    ctx.fillRect(CLOUD_X + BAR_LEFT_INDENT + (BAR_WIDTH + DISTANCE_BETWEEN_COLUMNS) * i, BAR_BOTTOM_INDENT, BAR_WIDTH, (BAR_MAX_HEIGHT * times[i]) / maxTime);

    ctx.fillStyle = '#000';

    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_LEFT_INDENT + (BAR_WIDTH + DISTANCE_BETWEEN_COLUMNS) * i, BAR_MAX_HEIGHT * times[i] / maxTime + BAR_BOTTOM_INDENT - GAP);
    ctx.fillText(players[i], CLOUD_X + BAR_LEFT_INDENT + (BAR_WIDTH + DISTANCE_BETWEEN_COLUMNS) * i, BOTTOM_INDENT);
  }
};
