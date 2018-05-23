import React, { Component } from 'react'

export default class Dialog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            time: undefined,
            loaded: false,
            visible: props.visible
        }

        this.closeDialog = this.closeDialog.bind(this)
        this.alinhar = this.alinhar.bind(this)
    }

    componentDidMount() {
        this.setState({
            time: setTimeout(this.alinhar, 4000)
        })
    }

    componentWillUnmount() {
        clearTimeout(this.state.time)
    }

    alinhar() {
        const v = $('.dialog-modal .dialog-content')
        v.css({
            'margin-left': (v.outerWidth() / 2) * -1,
        })
        $('.dialog-modal .showbox').fadeOut()
        $('.dialog-modal .dialog-content').fadeIn()
    }

    closeDialog() {
        this.props.closeDialog()
    }

    render() {
        return (
            <div className="dialog-modal" style={this.props.visible ? { display: 'block' } : { display: 'none' }}>
                <div className="showbox">
                    <div className="loader">
                        <svg className="circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
                        </svg>
                    </div>
                </div>
                <div className="dialog-content" style={{ display: this.state.loaded ? 'block' : 'none' }}>
                    <div className="dialog-title">{this.props.title}
                        <span className="dialog-close" onClick={this.closeDialog}><i className="fa fa-times"></i></span>
                    </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}