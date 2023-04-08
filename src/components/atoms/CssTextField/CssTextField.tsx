import { styled, TextField } from '@mui/material'

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#0074a6',
    },
    '& label': {
        color: 'white',
    },
    '&:hover label': {
        color: '#0074a6',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#0074a6',
    },
    '& .MuiOutlinedInput-root': {
        color: 'white',
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: '#0074a6',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#0074a6',
        }
    },
})

export default CssTextField
