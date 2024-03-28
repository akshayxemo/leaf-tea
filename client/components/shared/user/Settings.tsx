import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";

const Settings = () => {
  return (
    <div>
      <form
        action=""
        method="post"
        className="grid grid-cols-2 grid-rows-3 gap-4"
      >
        <div className="col-span-1 row-span-1">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={"Akshay Kumar Das"}
            className="w-full"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={"akshaykrdas001@gmail.com"}
            className="w-full"
          />
        </div>
        <div className="col-span-1 row-span-2">
          <TextField
            id="outlined-multiline-static"
            label="Address"
            multiline
            rows={4}
            value="Default Value"
            className="w-full"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <TextField
            id="outlined-basic"
            label="Phone No."
            type="number"
            variant="outlined"
            // value={"9007998706"}
            className="w-full h-full"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <div className="flex w-full h-full gap-4 justify-between">
            <Button
              variant="contained"
              startIcon={<ChangeCircleIcon />}
              className="min-w-32"
              color="secondary"
            >
              Change Details
            </Button>
            <p className="self-center flex items-center justify-between gap-2">
              <span>
                <BuildCircleOutlinedIcon />
              </span>
              Change Password
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;
