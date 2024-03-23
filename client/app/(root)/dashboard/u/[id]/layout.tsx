import Avatar from "@mui/material/Avatar";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Button from "@/components/ui/Button";
const layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  return (
    <div className="w-full">
      <div className="w-full pb-5 flex justify-between gap-4 items-center flex-wrap">
        {/* avatar............ */}
        <div className="flex justify-start gap-4 items-center flex-wrap text-orange-">
          <Avatar
            alt="Remy Sharp"
            src="/images/2.jpg"
            sx={{ width: 100, height: 100, fontSize: "3rem" }}
          >
            R
          </Avatar>
          <div className="">
            <h1 className="text-3xl flex flex-wrap items-center gap-1 font-semibold">
              Akshay Kumar Das{" "}
              <span className="text-base text-body italic font-light">
                (user: {params.id})
              </span>
            </h1>
            <p className="text-body flex items-center flex-nowrap gap-2">
              <MailOutlineIcon style={{ fontSize: "1.2rem" }} />{" "}
              remysharp03@gmail.com
            </p>
          </div>
        </div>

        {/* Logout options............... */}
        <Button
          title="logout"
          icon="logout"
          containerStyles="text-red-500 hover:scale-105"
        />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
