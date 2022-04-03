import React from 'react';


type ProfileStatusPropsType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType>{
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState ({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState ({
            editMode: false
        }) 
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deActivateEditMode} type='text' value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus