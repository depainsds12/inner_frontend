import "next-auth";
import { UserProfileParams } from "./user.types";
declare module "next-auth" {
  interface Session {
    user: UserProfileParams;
  }

  interface User extends UserProfileParams {}
}
