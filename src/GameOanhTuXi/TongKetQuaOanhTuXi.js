import React, { Component } from 'react'
import { connect } from 'react-redux'

class TongKetQuaOanhTuXi extends Component {
    render() {
        const {soBanThang,tongSoBanChoi} = this.props;
        return (
            <div className="container text-center mt-5">
                <div className="display-4 text-warning">
                    Im' iron man, i love
                    you 3000 !!
                </div>
                <div className="display-4 text-success">
                    <div className="my-4">Số bàn thắng: <span className="text-warning"> {soBanThang} </span></div>
                    <div>Số bàn chơi: <span className="text-warning"> {tongSoBanChoi} </span></div>
                </div>
                <button className="btn btn-success mt-5" onClick={()=>{
                    this.props.ketQua()            
                }}>PLayGame</button>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        soBanThang: state.gameOanhTuXiReducers.soBanThang,
        tongSoBanChoi: state.gameOanhTuXiReducers.tongSoBanChoi
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        ketQua: () => {
            dispatch({
                type: 'KET_QUA',
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TongKetQuaOanhTuXi)