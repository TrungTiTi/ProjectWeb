import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUser } from '../../redux/hooks/User';
import { useHistory } from 'react-router-dom';
// import FacebookLogin from 'react-facebook-login';
const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));

const schemaSignIn = yup.object().shape({
  userName: yup.string().required('Điều này là bắt buộc!'),
  password: yup.string().required('Điều này là bắt buộc!')
})

const SignIn = () => {
  const classes = useStyles();
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schemaSignIn)
  })
  // so sánh để đăng nhập
  const [infoUser, setInfoUser] = useState({
    userName: '',
    password: ''
  })
  const { user, actionss } = useUser()
  const history = useHistory()


  // const[faceState,setFaceState] = useState({
  //   auth:false,
  //   name:'',
  //   picture:''
  // })
  // const [faceS, setFaceS] = useState();
  // const [faceImg, setFaceImg] = useState();
  // const componentClicked = () => {
  //   localStorage.setItem('users', JSON.stringify(faceS));
  //   localStorage.setItem('usersImg', JSON.stringify(faceImg));
  //     history.push('/')
      
  // }
  // const responseFacebook = (response) => {
  //   setFaceS(response.name);
  //   setFaceImg(response.picture.data.url)
  // }

  useEffect(() => {
    if (user.userList.some(u => u.userName === infoUser.userName && u.password === infoUser.password)) {
      localStorage.setItem('users', JSON.stringify(infoUser.userName))
      history.push('/')
    }
  }, [user.userList, infoUser, history])

  const submit = (data) => {
    setInfoUser(() => data)
    actionss.getUsers()
  }

    return (
      <div  className="signIn-paper">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng Nhập
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit(submit)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Tên Tài Khoản"
              name="userName"
              {...register('userName')}
              autoComplete="email"
              autoFocus
              error={!!errors?.userName}
              helperText={errors?.userName?.message}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật Khẩu"
              type="password"
              id="password"
              {...register('password')}
              autoComplete="current-password"
              error={!!errors?.password}
              helperText={errors?.password?.message}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Ghi Nhớ"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Đăng Nhập
            </Button>

              {/* {
                faceState.auth ? (<>hi</>) : (
                  <FacebookLogin
                appId="679994549624547"
                autoLoad={true}
                fields="name,picture"
                onClick={componentClicked}
                callback={responseFacebook} />
                )
              } */}
            <Grid container>
              <Grid item xs>

              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Chưa có tài khoản? Đăng Ký"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
    </Container>
    </div>
    );
};

export default SignIn;