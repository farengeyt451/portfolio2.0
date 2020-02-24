export interface SkillsData {
  [key: string]: {
    items: SkillItem[];
  };
}

export interface SkillItem {
  title: string;
  logo: string;
}
