"use client";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { deepOrange, purple } from "@mui/material/colors";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { getInitials } from "@/utils";

const AccountSettings = () => {
  const { data: Session } = useSession({
    required: false,
  });

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  useEffect(() => {
    console.log("Session :", Session);
  }, []);
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLogOut = async () => {
    await signOut();
  };
  return (
    <div>
      {/* <Button title="" icon="account_circle" href="/signup" /> */}
      <Tooltip title="Account Settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          {Session ? (
            <Avatar
              alt={Session.user?.name ? Session.user.name : ""}
              src={Session.user?.image ? Session.user.image : ""}
              sx={{ width: "30px", height: "30px", bgcolor: purple[400] }}
            >
              {Session.user?.name && Session.user.name.charAt(0).toUpperCase()}
            </Avatar>
          ) : (
            <Avatar
              alt="Logged Out User"
              src=""
              sx={{ width: "30px", height: "30px" }}
            />
          )}
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {Session ? (
          <div className="px-3 min-w-48">
            <p className="font-bold tracking-tight">{Session.user?.name}</p>
            <p className="text-body mb-3 text-sm">{Session.user?.email}</p>
            <Divider component="li" />
            <div className="flex flex-col gap-3 py-3">
              <Link
                href={`/dashboard/u/${Session.user?.id}`}
                className=" flex items-center w-full justify-start gap-2 hover:font-semibold hover:text-lime-700 cursor-pointer"
                onClick={handleCloseUserMenu}
              >
                <SpaceDashboardOutlinedIcon />
                <p>Dashboard</p>
              </Link>
              <p
                className=" flex items-center w-full justify-start gap-2 hover:font-semibold hover:text-lime-700 cursor-pointer"
                onClick={handleLogOut}
              >
                <ExitToAppOutlinedIcon /> <span>Logout</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="px-3 min-w-48">
            <p className="text-body mb-3">You are not Signed In</p>
            <Button
              title="Sign in"
              containerStyles="bg-gray-100 w-full"
              href="/signin"
            />
          </div>
        )}
      </Menu>
    </div>
  );
};

export default AccountSettings;
