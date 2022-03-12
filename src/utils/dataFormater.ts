import { ExperienceDataType } from "../models/experienceData";

export const experienceFormatter = (data: ExperienceDataType[]) => {
  const response: ExperienceDataType[] = [];

  for (let value in data) {
    response.push(data[value]);
  }

  const compare = (a: ExperienceDataType, b: ExperienceDataType) => {
    if (a.count > b.count) return 1;
    if (b.count > a.count) return -1;
    return 0;
  };

  return response.sort(compare);
}
