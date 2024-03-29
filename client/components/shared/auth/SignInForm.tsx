"use client";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { signIn } from "next-auth/react";
import LoadingButton from "@mui/lab/LoadingButton";
import Link from "next/link";

interface LoginForm {
  email: string;
  password: string;
}

const SignInForm = () => {
  const initialData = {
    email: "",
    password: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);
  const [formData, setFormData] = useState<LoginForm>(initialData);
  const [loading, setLoading] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name === "email" && e.target.value !== "") {
      setEmptyEmail(false);
    }
    if (e.target.name === "password" && e.target.value !== "") {
      setEmptyPassword(false);
    }
  };
  const validate = () => {
    if (formData.email == "") {
      setEmptyEmail(true);
      return false;
    }
    if (formData.password == "") {
      setEmptyPassword(true);
      return false;
    }
    return true;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    if (validate()) {
      const res = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: true,
        callbackUrl: "/",
      });
      setFormData(initialData);
      if (res?.error) {
        setError(true);
      }
      console.log("Submitted...", res);
    }
    setLoading(false);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Email*"
        name="email"
        type="email"
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
        className="w-full"
        error={emptyEmail ? true : false}
      />
      {emptyEmail && <FormHelperText error>Email is required</FormHelperText>}
      <FormControl className="w-full" variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          name="password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
          value={formData.password}
          onChange={handleChange}
          error={emptyPassword ? true : false}
        />
      </FormControl>
      {emptyPassword && (
        <FormHelperText error>Password is required</FormHelperText>
      )}
      <LoadingButton
        size="small"
        type="submit"
        loading={loading}
        loadingPosition="end"
        variant="contained"
        sx={{
          padding: "1rem 1rem",
          backgroundColor: "rgb(54 83 20)",
          ":hover": { backgroundColor: "rgb(77 124 15)" },
        }}
      >
        <span>Login</span>
      </LoadingButton>
      <div>
        Dont have any account ?{" "}
        <Link
          href={"/signup"}
          className="text-blue-700 hover:underline hover:text-blue-500"
        >
          Register here
        </Link>
      </div>

      {error && (
        <p className="text-center text-red-600">Invalid email or password</p>
      )}
    </form>
  );
};

export default SignInForm;
