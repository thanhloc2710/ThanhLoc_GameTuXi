import React, { Component } from 'react'
import './BaiTapThuKinh.css'

export default class BaiTapThuKinh extends Component {
    arrProduct = [
        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/g1.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/g2.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/g3.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 4, price: 30, name: 'DIOR D6005U', url: './img/g4.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 5, price: 30, name: 'PRADA P8750', url: './img/g5.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 6, price: 30, name: 'PRADA P9700', url: './img/g6.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 7, price: 30, name: 'FENDI F8750', url: './img/g7.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 8, price: 30, name: 'FENDI F8500', url: './img/g8.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 9, price: 30, name: 'FENDI F4300', url: './img/g9.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    ];

    renderPlastic = () => {
        return this.arrProduct.map((item, index) => {
            console.log(item)
            return (
                <img className="plastic-img" key={index} src={item.url} onClick={() => {
                    this.selectPlastic(item)
                }} alt={'hình' + (index + 1)} />
            )
        })
    }

    state = {
        kinh: {}
    }

    selectPlastic = (click) => {
        let contentClick = {
            id: click.id,
            price: click.price,
            name: click.name,
            url: click.url,
            desc: click.desc
        }
        this.setState({
            kinh: contentClick
        })
    }

    reselect = (click) => {
        let chon = './img/model.jpg';
        this.setState({
            kinh: chon
        })
    }

    render() {
        let model = './img/model.jpg';
        let { kinh } = this.state;
        return (
            <div className="background">
                <div className="backgroundblack"></div>
                <div className="use">
                    <p>TRY GLASSES APP ONLINE</p>
                </div>
                <div className="content">
                    <div className="image-model">
                        <div className="change-plastic">
                            <img className="modelLeft" src={model} alt="model" />
                            <img className="changeKinh" src={kinh.url} alt="" />
                            <div className="change-content">
                                <h5>{kinh.name}</h5>
                                <p>{kinh.desc}</p>
                            </div>
                        </div>
                        <img className="modelRight" onClick={() => { this.reselect() }} src={model} alt="model" />
                    </div>
                    <div className="plastic">
                        {this.renderPlastic()}
                    </div>
                </div>
            </div>
        )
    }
}
