import type * as React from "react";

export type InformationType = {
  category: string;
  value: string;
  information: string;
  percent: string;
  gauge: React.ReactElement | string;
};

export type RecommendationsType = {
  emojie: string;
  title: string;
  subtitle: string;
  description: string;
  result: string;
};

export type ConsiderType = {
  point: string;
};
