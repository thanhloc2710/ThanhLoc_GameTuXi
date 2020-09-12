import React, { Component } from 'react'
import { connect } from 'react-redux'

class LuaChonOanhTuXi extends Component {

    renderLuaChon = () => {
        let { mangOanhTuXi } = this.props;
        return mangOanhTuXi.map((item, index) => {
            return <img src={item.hinhAnh} key={index} onClick={() => {
                this.props.luaChon(item);
            }} alt="" width={70} />
        })
    }

    render() {
        let { luaChonHinh } = this.props;
        console.log(luaChonHinh)
        return (
            <div className="text-center mt-5 ml-5">
                <img src={luaChonHinh} width={70} alt="" /> <br />
                <img src="./img/imgOanhTuXi/player.png" width={200} height={200} alt="" />
                <div>
                    {this.renderLuaChon()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ma: state.gameOanhTuXiReducers.ma,
        luaChonHinh: state.gameOanhTuXiReducers.luaChon[0].hinhAnh,
        mangOanhTuXi: state.gameOanhTuXiReducers.mangOanhTuXi,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        luaChon: (ketQuaChon) => {
            const ketQuaChonUpdate = {
                hinhAnh: ketQuaChon.hinhAnh
            }
            dispatch({
                type: 'LUA_CHON',
                ketQuaChonUpdate
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LuaChonOanhTuXi)
