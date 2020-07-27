import React from "react";
import { MdPerson, MdDescription } from "react-icons/md";
import mdx from "./DisplayBox.mdx";

import { DisplayBox } from "./DisplayBox";
import { Table } from "../table/Table";
import { getTestTable } from "../../modules/displayBoxTestData";

export default {
  title: "DisplayBox",
  component: DisplayBox,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const elements = [
  {
    name: (
      <p style={{ width: "80%" }}>
        This is the content on the left of the display box. Maybe there will be
        other content on the right too.
      </p>
    ),
    value: (
      <p style={{ width: "80%" }}>
        This is the content on the right of the display box. There already is
        content on the left side of the box.
      </p>
    ),
    isSideBySide: true,
  },
];

const fileData = [
  {
    name: "Description:",
    value: "some file description",
    isValueBold: true,
  },
  {
    name: "Statutory Fee:",
    value: "$10.00",
    isValueBold: true,
  },
];

const generateTableData = () => {
  return [
    {
      name: (
        <div style={{ width: "80%" }}>
          <span>file name</span>
        </div>
      ),
      value: <Table elements={fileData} />,
    },
  ];
};

const table = getTestTable();

const icon = <MdPerson size={32} />;

const documentIcon = (
  <div style={{ color: "rgb(252, 186, 25)" }}>
    <MdDescription size={32} />
  </div>
);

export const WithoutIcon = () => <DisplayBox element={table} />;

export const WithSideBySideContent = () => (
  <DisplayBox
    styling="display-left-element"
    element={<Table elements={elements} />}
  />
);

export const WithIcon = () => <DisplayBox icon={icon} element={table} />;

export const WithBlueBackground = () => (
  <DisplayBox styling="blue-background" icon={icon} element={table} />
);

export const WithBorder = () => (
  <DisplayBox styling="border-background" icon={icon} element={table} />
);

export const WithFileData = () => (
  <DisplayBox
    styling="border-background display-file"
    icon={documentIcon}
    element={
      <Table
        elementStyles={{
          columnStyle: "bcgov-vertical-middle bcgov-fill-width",
        }}
        elements={generateTableData()}
      />
    }
  />
);

export const Mobile = () => (
  <DisplayBox styling="blue-background" icon={icon} element={table} />
);

const mobileViewport = {
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};

Mobile.story = mobileViewport;
