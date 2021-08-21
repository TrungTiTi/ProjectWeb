import React, { useCallback, useEffect} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../redux/hooks/User";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: '100px',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  // customContainer: {
  //   position: "relative",
  // },
  customSpin: {
    position: "absolute",
    zIndex: 2,
    width: "100%",
    height: "100%",
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "5px",
    paddingRight: "50px",
  },
}));

const schemaSignUp = yup.object().shape({
  firstName: yup.string().required("This is required!"),
  lastName: yup.string().required("This is required!"),
  userName: yup.string().required("This is required!"),
  password: yup
    .string()
    .required("This is required!")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password not strong!"
    ),
});

const SignUp = () => {
  const classes = useStyles();
  const { user, actionss } = useUser();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSignUp),
  });

  let arr = [];
  const tep = useCallback(() => {
    actionss.getUsers();
  },[user,arr]);

  useEffect(() => {
    tep()
  },[])
  const submit = (data) => {
    const inforUser = document.getElementById('email').value
    actionss.getUsers();
    if((user.userList) && (user.userList.length===0)){
      actionss.registerUser(data); 
      alert('Đăng ký thành công') ;
     
    }else if((user.userList) && (user.userList.length>0)){
      for(let i=0; i < user.userList.length; i++){
        arr.push(user.userList[i].userName)
      }
 
      if(!arr.includes(inforUser)){
        actionss.registerUser(data);
        alert('Đăng ký thành công') ;

      }else{
        alert('Tài khoản đã có')
        window.location.reload()
      }
    }

  };
  
  return (
    <div className="signIn-paper">
    <Container
      component="main"
      maxWidth="xs"
      
    >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng Ký
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(submit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Tên"
                autoFocus
                {...register("firstName")}
                error={!!errors?.firstName}
                helperText={errors?.firstName?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Họ"
                name="lastName"
                autoComplete="lname"
                {...register("lastName")}
                error={!!errors?.lastName}
                helperText={errors?.lastName?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Tên Tài Khoản"
                name="userName"
                {...register("userName")}
                error={!!errors?.userName}
                helperText={errors?.userName?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Mật Khẩu"
                type="password"
                id="password"
                {...register("password")}
                error={!!errors?.password}
                helperText={errors?.password?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Tôi chấp nhận các điều khoản"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Đăng Ký
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/sign-in" variant="body2">
                Đã sẵn có tài khoản? Đăng Nhập
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

      {
        user.loading && 
        (<div className={classes.customSpin}>
          <CircularProgress color="secondary" />
        </div>)
      }
    </Container>
    </div>
  );
};

export default SignUp;
