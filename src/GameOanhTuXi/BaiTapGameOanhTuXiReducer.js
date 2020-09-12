import React, { Component } from 'react'
import LuaChonOanhTuXi from './LuaChonOanhTuXi'
import TongKetQuaOanhTuXi from './TongKetQuaOanhTuXi'
import KetQuaOanhTuXi from './KetQuaOanhTuXi'
import './styleOanhTuXi/styleOanhTuXi.css'

export default class BaiTapGameOanhTuXiReducer extends Component {
    render() {
        return (
            <div className="bgGame">
                <div className="row">
                    <div className="col-3">
                        <LuaChonOanhTuXi />
                    </div>
                    <div className="col-6">
                        <TongKetQuaOanhTuXi />
                    </div>
                    <div className="col-3">
                        <KetQuaOanhTuXi />
                    </div>
                </div>
            </div>
        )
    }
}
