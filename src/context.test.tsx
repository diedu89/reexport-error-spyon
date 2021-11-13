import * as UserContext from "./context";

it("should render complete navigation when user is logged in", () => {
  jest.spyOn(UserContext, "useUser").mockReturnValue({
    user: {},
    update: (user) => null,
    initialized: true
  });
});
