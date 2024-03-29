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
import LoadingButton from "@mui/lab/LoadingButton";
import Link from "next/link";
import { deepOrange } from "@mui/material/colors";
import axios from "axios";
import { useRouter } from "next/navigation";

interface LoginForm {
  name: string;
  email: string;
  phoneNo: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const router = useRouter();
  const initialData = {
    name: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowComfimPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);
  const [emptyConfirmPassword, setEmptyConfirmPassword] = useState(false);
  const [emptyName, setEmptyName] = useState(false);
  const [emptyPhone, setEmptyPhone] = useState(false);
  const [passwordError, setPasswordError] = useState<string>("");
  const [mismatch, setMismatch] = useState(false);
  const [formData, setFormData] = useState<LoginForm>(initialData);
  const [loading, setLoading] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowComfirmPassword = () =>
    setShowComfimPassword((show) => !show);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name === "name" && e.target.value !== "") {
      setEmptyName(false);
    }
    if (e.target.name === "email" && e.target.value !== "") {
      setEmptyEmail(false);
    }
    if (e.target.name === "phoneNo" && e.target.value !== "") {
      setEmptyPhone(false);
    }
    if (e.target.name === "password" && e.target.value !== "") {
      setEmptyPassword(false);
    }
    if (e.target.name === "confirmPassword" && e.target.value !== "") {
      setEmptyConfirmPassword(false);
    }
  };
  const validate = () => {
    if (formData.name == "") {
      setEmptyName(true);
      return false;
    }
    if (formData.email == "") {
      setEmptyEmail(true);
      return false;
    }
    if (formData.phoneNo == "") {
      setEmptyPhone(true);
      return false;
    }
    if (formData.password == "") {
      setEmptyPassword(true);
      return false;
    }
    if (formData.confirmPassword == "") {
      setEmptyConfirmPassword(true);
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    const regex = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (formData.password.length < 8) {
      setPasswordError("Password must be atleast 8 character long.");
      return false;
    } else if (formData.password.length > 12) {
      setPasswordError("Password should not exceed 12 characters.");
      return false;
    } else if (!regex.test(formData.password)) {
      setPasswordError(
        "Password must consist atleast one symbol, one number & one uppercase character."
      );
      return false;
    } else if (formData.password !== formData.confirmPassword) {
      setPasswordError("");
      setMismatch(true);
      return false;
    } else {
      setMismatch(false);
      setPasswordError("");
      return true;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    if (validate() && validatePassword()) {
      axios
        .post("/api/auth/signup", formData)
        .then((res) => {
          setFormData(initialData);
          console.log(res);
          setLoading(false);
          setErrorMsg("");
          router.push("/signin");
        })
        .catch((error) => {
          console.log(error);
          setError(true);
          setErrorMsg(error.response.data.error);
        });
    }
    setLoading(false);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Name*"
        name="name"
        type="text"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
        className="w-full"
        error={emptyName ? true : false}
      />
      {emptyName && <FormHelperText error>Name is required</FormHelperText>}
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
      <TextField
        id="outlined-basic"
        label="Phone No*"
        name="phoneNo"
        type="number"
        variant="outlined"
        value={formData.phoneNo}
        onChange={handleChange}
        className="w-full"
        error={emptyPhone ? true : false}
      />
      {emptyPhone && (
        <FormHelperText error>Phone No. is required</FormHelperText>
      )}
      <FormControl className="w-full" variant="outlined">
        <InputLabel
          htmlFor="outlined-adornment-password"
          error={emptyPassword || passwordError !== "" ? true : false}
        >
          Password*
        </InputLabel>
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
          error={emptyPassword || passwordError !== "" ? true : false}
        />
      </FormControl>
      {emptyPassword && (
        <FormHelperText error>Password is required</FormHelperText>
      )}
      {passwordError !== "" && (
        <FormHelperText error>{passwordError}</FormHelperText>
      )}

      <FormControl className="w-full" variant="outlined">
        <InputLabel
          htmlFor="outlined-adornment-password"
          error={emptyConfirmPassword || mismatch ? true : false}
        >
          Confirm Password*
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowComfirmPassword}
                edge="end"
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={emptyConfirmPassword || mismatch ? true : false}
        />
      </FormControl>
      {emptyConfirmPassword && (
        <FormHelperText error>Confirm Password is required</FormHelperText>
      )}
      {mismatch && (
        <FormHelperText error>Password dosen't match</FormHelperText>
      )}
      <LoadingButton
        size="small"
        type="submit"
        loading={loading}
        loadingPosition="end"
        variant="contained"
        sx={{
          padding: "1rem 1rem",
          backgroundColor: deepOrange[900],
          ":hover": { backgroundColor: deepOrange[700] },
        }}
      >
        <span>Sign Up</span>
      </LoadingButton>
      <div>
        Already have an account ?{" "}
        <Link
          href={"/signin"}
          className="text-blue-700 hover:underline hover:text-blue-500"
        >
          Login here
        </Link>
      </div>

      {error && (
        <p className="text-center text-red-600">
          {errorMsg !== "" ? errorMsg : "Something Went Wrong"}
        </p>
      )}
    </form>
  );
};

export default SignUpForm;
