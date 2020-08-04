import React from "react";
import { PublicRoute } from "../PublicRoute";
import Login from "../../pages/Login";
import { shallow } from "enzyme";

it("should return <Route/>", () => {
  const returned = shallow(
    <PublicRoute component={Login} authenticated={true} />
  );
  expect(returned.find("Route")).toHaveLength(1);
});
