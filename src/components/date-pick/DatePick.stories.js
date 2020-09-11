import React from "react";
import { State, Store } from "@sambego/storybook-state";
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

const store = new Store({
  selectedDate: new Date("August 19, 1975 23:15:30"),
});

const setSelectedDate = (date) => store.set({ selectedDate: date });

const basicDatePickState = (label) => (
  <State store={store}>
    {(state) => [
      <DatePick
        key="datepick"
        label={label}
        selectedDate={state.selectedDate}
        setSelectedDate={setSelectedDate}
      />,
    ]}
  </State>
);

export const Default = () => basicDatePickState();

export const WithLabel = () => basicDatePickState("Select date");

export const Mobile = () => basicDatePickState();

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};
