const mangLuaChon = [
    { ma: 1, hinhAnh: './img/imgOanhTuXi/bao.png' },
    { ma: 2, hinhAnh: './img/imgOanhTuXi/keo.png' },
    { ma: 3, hinhAnh: './img/imgOanhTuXi/bua.png' },
]

const stateDefault = {
    soBanThang: 0,
    tongSoBanChoi: 0,
    luaChon:[
        { ma: 1, hinhAnh: './img/imgOanhTuXi/bao.png' }
    ],
    mangOanhTuXi: [
        { ma: 1, hinhAnh: './img/imgOanhTuXi/bao.png' },
        { ma: 2, hinhAnh: './img/imgOanhTuXi/keo.png' },
        { ma: 3, hinhAnh: './img/imgOanhTuXi/bua.png' },
    ],
    hinhRandom: [
        { ma: 1, hinhAnh: './img/imgOanhTuXi/bao.png' },
    ],
}

export const gameOanhTuXiReducers = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LUA_CHON': {
            state.luaChon[0].hinhAnh = action.ketQuaChonUpdate.hinhAnh;
            return { ...state }
        }
        // case 'KET_QUA': {
        //     let hinhRandomUpdate = [];
        //     let soNgauNhien = Math.floor(Math.random() * 3);
        //     hinhRandomUpdate = mangLuaChon[soNgauNhien];
        //     state.hinhRandom = hinhRandomUpdate;
        //     console.log(hinhRandomUpdate);
        //     return { ...state }
        // }
        case 'KET_QUA': {
            let hinhRandomUpdate = [];
            let soNgauNhien = Math.floor(Math.random() * 3);
            let ketQuaNgauNhien = mangLuaChon[soNgauNhien];
            hinhRandomUpdate.push(ketQuaNgauNhien);
            state.hinhRandom = hinhRandomUpdate;
            state.tongSoBanChoi += 1;
            console.log(state.hinhRandom[0].ma);
            if(state.luaChon[0].ma === state.hinhRandom[0].ma){
                state.soBanThang += 1
            }
            return { ...state }

        }
        default: { return { ...state } }
    }
}