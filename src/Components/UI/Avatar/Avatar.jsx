import React from "react"
import styled from 'styled-components'
import propTyps from 'prop-types'

const Wrapper = styled.div`
width: 10rem;
height: 10rem;
border-radius: ${(props) => (props.isSquare? '10px' : '50%')};
background-color: #777799;

    input {
        display: none;
      }
      label,
      label div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10rem;
        height: 10rem;
        cursor: pointer;
        border-radius: ${(props) => (props.isSquare ? '10px' : '50%')};
      }
`



const Avatar = ({isSquare}) => {
    const [selectedFile, setSelectedFile] = React.useState(null)
    const [preview, setPreview] = React.useState(null)

    React.useEffect(() => {
        const objectUrl = selectedFile && URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    return(
    <Wrapper isSquare = {isSquare}> 
        <input id="Avatar" type='file' value="" onChange = {(e) => setSelectedFile(e.target.files[0])}/>
        <label htmlFor="Avatar">
            {preview?
                <div style={{
                backgroundImage: `url(${preview})`,
                backgroundSize: 'cover' }} /> :
                "upload image"
            }
        </label>
    </Wrapper>
    )
}

Avatar.propTyps = {
    isSquare: propTyps.bool,
}

Avatar.defaultProps = {
    isSquare: false,
}

export default Avatar;