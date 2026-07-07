/** Yagona client (SPA) manzili — login/register sahifalari shu yerda. */
export const CLIENT_URL =
  process.env.NEXT_PUBLIC_CLIENT_URL ??
  process.env.NEXT_PUBLIC_COMPANY_PANEL_URL ??
  "http://localhost:5173";

export const REGISTER_URL = `${CLIENT_URL}/register`;
export const LOGIN_URL = `${CLIENT_URL}/login`;
