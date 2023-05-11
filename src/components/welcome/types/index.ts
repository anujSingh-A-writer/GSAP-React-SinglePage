import { BaseType } from "../../../utils/types";

export type WelcomeCardProps = {
  title: string;
  description: string;
  addToRefs: (el: any) => void;
};

export interface WelcomeProps extends BaseType {}
