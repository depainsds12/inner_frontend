export type LoginUserParams = {
  email: string;
  password: string;
};

export type UserProfileParams = {
  id: string;
  email: string;
  fullName: string;
  role: string[];
  inspiration_text: string;
  introduction_text: string;
  linkedIn: string;
  rank: number;
  title: string;
  website: string;
};
