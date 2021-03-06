/**
 * This is free and unencumbered software released into the public domain.
 * See UNLICENSE.
 */

var TEST_FILENAME = "js_test/simulator/test_tryMove.js"

var board = {
  blocks : [{x:5,y:5}],
  bots : [{cellX: 7, cellY: 7}]
}

var bot = {facing: "any"}
var testTryMove = {
  "move blocked by block": {board: board, bot: bot, x: 5, y: 5, expected: false},
  "move blocked by bot": {board: board, bot: bot, x: 7, y: 7, expected: false},
  "move succeed #1": {board: board, bot: bot, x: 5, y: 6, expected: true},
  "move succeed #2": {board: board, bot: bot, x: 6, y: 5, expected: true},
  "move succeed #3": {board: board, bot: bot, x: 6, y: 6, expected: true}
}

for (TC_NAME in testTryMove) {
  var TC = testTryMove[TC_NAME]
  var RESULT = tryMove(TC.board, TC.bot, TC.x, TC.y)
  test(_.isEqual(RESULT, TC.expected))
}
