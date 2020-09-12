import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaOanhTuXi extends Component {

    render() {
        const { hinhRandom } = this.props;
        return (
            <div className="text-center mt-5 mr-5">
                <img src={hinhRandom[0].hinhAnh} width = {70} alt="" /> <br />
                <img src="./img/imgOanhTuXi/playerComputer.png" width={200} height={200} alt="" />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        hinhRandom: state.gameOanhTuXiReducers.hinhRandom
    } 
}

export default connect(mapStateToProps)(KetQuaOanhTuXi)
