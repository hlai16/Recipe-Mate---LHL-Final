export const readCookie = () => {
  const cookie = document.cookie;
  let userId = "";
  if (cookie) {
    const userIdCookie = document.cookie.split("=");
    if (userIdCookie.length > 0) {
      userId = userIdCookie[1];
    }
  }
  return userId;
};
