import React from "react";
import useState from "storybook-addon-state";
import mdx from "./DatePick.mdx";

import { DatePick } from "./DatePick";

export default {
  title: "Date Pick",
  component: DatePick,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const BasicDatePickState = (label) => {
  const [selectedDate, setSelectedDate] = useState(
    "date",
    new Date("August 19, 1975 23:15:30")
  );

  return (
    <DatePick
      key="datepick"
      label={label}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    />
  );
};

export const Default = () => BasicDatePickState();

export const WithLabel = () => BasicDatePickState("Select date");

export const Mobile = () => BasicDatePickState();

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};
