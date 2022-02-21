import React, { Component } from 'react';
import Axios from 'axios';


// const myImage = '手燈' ///取得classNAME
// let NewImage = require('../imag/Japan/' + myImage + '.jpg');

class Test extends Component {
    state = {
        product: [
            // { classID: '1', className: 'AAA' },
            // { classID: '2', className: 'BBB' },
            // { classID: '3', className: 'CCC' }
        ]
    }
    async componentDidMount() {
        var result = await Axios.get("http://localhost:8000/nation/Japan");
        this.state.product = result.data;
        // console.log((this.state.product));
        this.setState({});
        // this.setState({
        //     product: result.data
        // })
    }
    render() {
        return (
            <div>

                {
                    this.state.product.map((item, index) =>

                        <div key={index}>
                            <div>
                                {console.log(item.productName)}
                                <img src={require('../imag/Japan/' + item.productName + '.jpg')} />
                            </div>

                        </div>

                    )
                }


            </div>
        );
    }
}

export default Test;
