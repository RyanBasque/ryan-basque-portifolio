import { ExperienceData } from "../models/experienceData";

export const experienceFormatter = (data: ExperienceData[]) => {
  const response: ExperienceData[] = [];

  for (let value in data) {
    response.push(data[value]);
  }

  const compare = (a: ExperienceData, b: ExperienceData) => {
    if (a.count > b.count) return 1;
    if (b.count > a.count) return -1;
    return 0;
  };

  return response.sort(compare);
}