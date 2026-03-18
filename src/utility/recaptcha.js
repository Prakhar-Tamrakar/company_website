export async function verifyRecaptcha(token, action) {
  if (!token) return { success: false };

  const res = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: token,
      }),
    }
  );

  const data = await res.json();

  if (!data.success || data.score < 0.5) {
    return { success: false, data };
  }

  if (action && data.action !== action) {
    return { success: false, data };
  }

  return { success: true, data };
}