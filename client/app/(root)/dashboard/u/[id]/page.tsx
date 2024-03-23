"use client";
import Tabs from "@mui/material/Tabs";
import Tab, { TabProps } from "@mui/material/Tab";
import SettingsIcon from "@mui/icons-material/Settings";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "rgb(194 65 12)",
  },
});

const AntTab = styled((props: TabProps) => <Tab {...props} />)(({ theme }) => ({
  "&:hover": {
    color: "rgb(234 88 12)",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "rgb(194 65 12)",
    fontWeight: theme.typography.fontWeightMedium,
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <div className="py-10 px-5">{children}</div>}
    </div>
  );
}

const dashboard = ({ params }: { params: { id: string } }) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="border-y px-2">
        <AntTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <AntTab
            icon={<SettingsIcon />}
            iconPosition="start"
            aria-label="settings"
            label="Settings"
            value={0}
          />
          <AntTab
            icon={<FactCheckOutlinedIcon />}
            iconPosition="start"
            aria-label="Orders"
            label="My Orders"
            value={1}
          />
          <AntTab
            icon={<QuestionAnswerOutlinedIcon />}
            iconPosition="start"
            aria-label="Feedbacks"
            label="Feedbacks"
            value={2}
          />
        </AntTabs>
      </div>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
};

export default dashboard;
