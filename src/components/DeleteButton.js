import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from '@patternfly/react-core';
import ConfirmationDialog from './ConfirmationDialog';

import './DeleteButton.scss';

class DeleteButton extends Component {

    state = {
        dialogOpen: false
    };

    onButtonClicked = () => {
        this.setState({ dialogOpen: true });
    }

    onDialogClose = (result) => {
        this.setState({ dialogOpen: false });
        result && this.props.onDelete();
    }

    render() {

        const { dialogOpen } = this.state;

        return (
            <React.Fragment>
                <Button
                    className='ins-c-button__danger-link'
                    onClick={ this.onButtonClicked }
                    isDisabled={ this.props.isDisabled }
                    variant="link">
                    { this.props.label }
                </Button>
                {
                    dialogOpen &&
                    <ConfirmationDialog text={ this.props.dialogMessage } onClose={ this.onDialogClose } />
                }
            </React.Fragment>
        );
    }
};

DeleteButton.propTypes = {
    label: PropTypes.string,
    dialogMessage: PropTypes.string,
    isDisabled: PropTypes.bool,
    onDelete: PropTypes.func.isRequired
};

DeleteButton.defaultProps = {
    label: 'Delete'
};

export default DeleteButton;
