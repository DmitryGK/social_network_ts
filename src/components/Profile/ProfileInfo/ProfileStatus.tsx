import React, { ChangeEvent } from 'react';


type ProfileStatusPropsType = {
    status: string
    updateStatusTC: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType>{
    
    state = {
        editMode: false,
        status: this.props.status
    }

    

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusTC(this.state.status)
    }
    onStatusChanged = (e: ChangeEvent<HTMLInputElement>) => {
       this.setState ({
           status: e.currentTarget.value
       })
    }
    componentDidUpdate = (prevProps: ProfileStatusPropsType, prevState: {editMode: boolean, status: string}) => {
            if (prevProps.status !== this.props.status) {
                this.setState({
                    status: this.props.status
                })
            }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '..........'}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input
                            onChange={this.onStatusChanged}
                            autoFocus={true}
                            onBlur={this.deActivateEditMode}
                            value={this.state.status}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus