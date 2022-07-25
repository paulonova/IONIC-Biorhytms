import { calculateBiorhytms } from "./calculations";

it("calculates the physical biorhytm", () => {
  const { physical } = calculateBiorhytms("1995-01-01", "2020-02-18");
  expect(physical).toBeCloseTo(0.5196);
});

it("calculates the emotional biorhytm", () => {
  const { emotional } = calculateBiorhytms("1995-01-01", "2020-02-18");
  expect(emotional).toBeCloseTo(-0.901);
});

it("calculates the intellectual biorhytm", () => {
  const { intellectual } = calculateBiorhytms("1995-01-01", "2020-02-18");
  expect(intellectual).toBeCloseTo(0.8146);
});
