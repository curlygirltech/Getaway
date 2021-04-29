import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'



// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';



// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

// export default function FormPropsTextFields() {
//   const classes = useStyles();

export default function Login(props) {
  const [formData, setFormData] = useState({
    username:'', 
    password:''
  })

  const { username, password } = formData
  const { handleLogin } = props
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
}

  return (
    // <form className={classes.root} noValidate autoComplete="off"></form>
    <>
      <form onSubmit={(e) => {
        e.preventDefault()
          handleLogin(formData)
      }}>
        <h3>Login</h3>
        <label>
          Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
          />        
        </label>
        <br/>
        <label>
          Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          />        
        </label>
        <Link to='/register' >Register</Link>
        <button>Submit</button>
      </form>

      
    </>
//     <div>
//         <TextField
//           required
//           id="outlined-required"
//           label="Required"
//           defaultValue="Hello World"
//           variant="outlined"
//         />
//         <TextField
//           disabled
//           id="outlined-disabled"
//           label="Disabled"
//           defaultValue="Hello World"
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-read-only-input"
//           label="Read Only"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true,
//           }}
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-number"
//           label="Number"
//           type="number"
//           InputLabelProps={{
//             shrink: true,
//           }}
//           variant="outlined"
//         />
//         <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
//         <TextField
//           id="outlined-helperText"
//           label="Helper text"
//           defaultValue="Default Value"
//           helperText="Some important text"
//           variant="outlined"
//         />
//       </div>
//     </form>
)
}
