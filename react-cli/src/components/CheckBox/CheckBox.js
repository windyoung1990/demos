import React, { Component } from 'react';
// class CheckBox extends Component {
//     render() {
//         return (
//             <label>
//                 <input type="checkbox" />
//                 {/* 实现label的可配置 */}
//                 {this.props.children !== undefined ? this.props.children : null}
//             </label>
//         )
//     }
// }
// export default CheckBox
// 实现可控组件及获值


class CheckBox extends Component {
    constructor(props){
        super(props);
        console.log('props:',props);
        this.checkCheckBox = this.checkCheckBox.bind(this);
        this.state = {
            is_checked: props.checked || false,
            value: props.value || ''
        };
    }
    componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            console.log('nextProps')
            this.setState({
                is_checked: nextProps.checked || false
            });
        }
    }
    checkCheckBox() {
        const onChange = this.props.onChange;
        const value = this.props.value;
        console.log('click')
        if (onChange) {
            onChange(value);
        }
    }

    render(){
        let { is_checked, value } = this.state;
        console.log(is_checked)
        return(
            <label>
                <input type="checkbox" value={value} onClick={this.checkCheckBox} checked={is_checked}/>
                {this.props.children !== undefined ? this.props.children : null}
            </label>
        )
    }
}
export default CheckBox;
