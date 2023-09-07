import { Space, Spin } from "antd";
import React from "react";

const Loader = () => {
  return (
    <div className="loading">
      <p>Loading... please wait...</p>
      <Space size={"large"}>
        <Spin size="large" />
      </Space>
    </div>
  );
};

export default Loader;
