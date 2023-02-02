export type User = {
  username: string;
  about: string;
  password: string;
  email: string;
  designation: string;
  branch: string;
  passingYear: number;
  github: string | null;
  leetcode: string | null;
  linkedin: string | null;
};

export type UserStateData = {
  username: string;
  about: string;
  email: string;
  designation: string;
  branch: string;
  passingYear: number;
  github: string | null;
  leetcode: string | null;
  linkedin: string | null;
};
