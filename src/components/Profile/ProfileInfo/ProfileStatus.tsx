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

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.state.status || '..........'}</span>
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