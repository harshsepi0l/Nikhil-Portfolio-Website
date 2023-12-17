import React from "react";

import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";

const Page = () => (
  <>
    <div className="flex">
      <Sidebar />
    </div>
    <div className=" text-right">
      <Main />
    </div>
  </>
);

export default Page;
