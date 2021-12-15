import { ExperienceDataType } from "../models/experienceData";
import { ProjectDataType } from './../models/projectsData';

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

export const projectsDataFormatter = (data: ProjectDataType[]) => {
  const response: ProjectDataType[] = []; 
  
  for (let value in data) {
    response.push({ ...data[value], id: value });
  }

  return response;
}

