export type InformationItem = {
  category: string;
  value: string;
  information: string;
  percent: [number, number];
  gauge: boolean;
};

export type InformationType = {
  dashboard: InformationItem[];
  finance: InformationItem[];
  habits: InformationItem[];
  health: InformationItem[];
  timeManagement: InformationItem[];
};

export type ArrayInfo = { informationArray: InformationItem };

export type RecommendationsItemType = {
  emojie: string;
  title: string;
  subtitle: string;
  description: string;
  result: string;
};

export type RecommendationsType = {
  dashboard: RecommendationsItemType[];
  finance: RecommendationsItemType[];
  habits: RecommendationsItemType[];
  health: RecommendationsItemType[];
  timeManagement: RecommendationsItemType[];
};

export type ArrayRecommendations = {
  recommendationsArray: RecommendationsItemType;
};

export type ConsiderType = {
  dashboard: ConsiderItemType[];
  finance: ConsiderItemType[];
  habits: ConsiderItemType[];
  health: ConsiderItemType[];
  timeManagement: ConsiderItemType[];
};

export type ConsiderItemType = {
  point: string;
};

export type ContentType = {
  recommendations: RecommendationsType;
  information: InformationType;
  pointsToConsider: ConsiderType;
};
