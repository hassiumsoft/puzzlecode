/**
 * Copyright 2013 Michael N. Gagnon
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Holds all top-level variables, function invocations etc.
 */

// [animationDuration, delayDuration, description, easing]
PlaySpeed = {
  SUPER_SLOW: [2000, 4000, "Super slow", "cubic-in-out"],
  SLOW: [750, 1500, "Slow", "cubic-in-out"],
  NORMAL: [400, 800, "Normal", "cubic-in-out"],
  FAST: [150, 150, "Fast", "linear"],
  SUPER_FAST: [0, 0, "Super fast", "linear"]
}

PlayStatus = {
  PAUSED: 0,
  PLAYING: 1
}

var ccx = 9, // cell count x
    ccy = 7, // cell count y
    cw = 32, // cellWidth
    ch = 32,  // cellHeight
    vis = null,
    bots = null,
    animateInterval = null,
    playStatus = PlayStatus.PLAYING,
    initPlaySpeed = PlaySpeed.NORMAL,
    ANIMATION_DUR = initPlaySpeed[0]
    CYCLE_DUR = initPlaySpeed[1],
    EASING = initPlaySpeed[3],
    BOT_PHASE_SHIFT = 0,
    initialProgram = "\nstart:\nmove\nmove\nturn left\ngoto start\n",
    codeMirrorBox = null,
    pausePlay = null

window.onload = windowOnLoad
createBoard()
drawCells()
