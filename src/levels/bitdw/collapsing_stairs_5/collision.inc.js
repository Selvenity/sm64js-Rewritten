// Bitdw

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT, SURFACE_VERY_SLIPPERY
} from "../../../include/surface_terrains"

// 0x0700FD9C - 0x0700FE30
export const bitdw_seg7_collision_0700FD9C = [
    COL_INIT(),
    COL_VERTEX_INIT(0xC),
    COL_VERTEX(-101, 768, 307),
    COL_VERTEX(-101, 768, -306),
    COL_VERTEX(-409, 512, -306),
    COL_VERTEX(-409, 512, 307),
    COL_VERTEX(-716, 256, -306),
    COL_VERTEX(-716, 256, 307),
    COL_VERTEX(205, 1024, 307),
    COL_VERTEX(205, 1024, -306),
    COL_VERTEX(-1023, 0, -306),
    COL_VERTEX(-1023, 0, 307),
    COL_VERTEX(-1637, 0, -306),
    COL_VERTEX(-1637, 0, 307),
    COL_TRI_INIT(SURFACE_DEFAULT, 2),
    COL_TRI(9, 8, 10),
    COL_TRI(9, 10, 11),
    COL_TRI_INIT(SURFACE_VERY_SLIPPERY, 8),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 2, 3),
    COL_TRI(2, 4, 5),
    COL_TRI(2, 5, 3),
    COL_TRI(6, 1, 0),
    COL_TRI(6, 7, 1),
    COL_TRI(5, 4, 8),
    COL_TRI(5, 8, 9),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-05-28 06:03:18 -0700 (Convert.rb 2021-05-28 06:02:15 -0700)