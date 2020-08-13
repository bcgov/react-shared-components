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

export const Default = () => {
  return (
    <State store={store}>
      {(state) => [
        <DatePick
          key="datepick"
          selectedDate={state.selectedDate}
          setSelectedDate={setSelectedDate}
        />,
      ]}
    </State>
  );
};

export const WithLabel = () => {
  return (
    <State store={store}>
      {(state) => [
        <DatePick
          key="datepick"
          label="Select date"
          isRequired
          selectedDate={state.selectedDate}
          setSelectedDate={setSelectedDate}
        />,
      ]}
    </State>
  );
};

export const Mobile = () => (
  <State store={store}>
    {(state) => [
      <DatePick
        key="datepick"
        selectedDate={state.selectedDate}
        setSelectedDate={setSelectedDate}
      />,
    ]}
  </State>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};
