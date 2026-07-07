import { RAW_CLIENT_URL } from "./env";

/** Yagona client (SPA) manzili — login/register sahifalari shu yerda (.env: NEXT_PUBLIC_CLIENT_URL). */
export const CLIENT_URL = RAW_CLIENT_URL;

export const REGISTER_URL = `${CLIENT_URL}/register`;
export const LOGIN_URL = `${CLIENT_URL}/login`;
