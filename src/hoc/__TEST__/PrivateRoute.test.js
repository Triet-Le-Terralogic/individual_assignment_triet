import React from "react";
import { PrivateRoute } from "../PrivateRoute";
import Login from "../../pages/Login";
import { shallow } from "enzyme";

it("should return <Route/>", () => {
  const returned = shallow(
    <PrivateRoute component={Login} authenticated={true} />
  );
  expect(returned.find("Route")).toHaveLength(1);
});
