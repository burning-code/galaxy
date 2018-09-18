import React, { Component } from 'react'

/*
 * TODO refactoring
 */
class Popup extends Component {
    render() {
        let { title, children, closeButtonText, saveButtonText, className } = this.props;

        return (
            <div className={className}>
                <div className="modal-backdrop fade in " onClick={e => this.close()} />
                <div className="modal fade in" style={{display: 'block'}} tabIndex="-1" role="dialog" >

                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" onClick={e => this.close()} data-dismiss="modal" aria-label="Close"><span
                                    aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">{title}</h4>
                            </div>
                            <div className="modal-body">
                                {children}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default btn-xs"  onClick={e => this.close()} data-dismiss="modal">{closeButtonText}</button>
                                <button type="button" className="btn btn-primary btn-xs" onClick={e => this.save()}>{saveButtonText}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    save = () => {
        this.props.save()
    };

    close = () => {
        console.log(this.props.cancel);
        this.props.cancel()
    }
}

export default Popup