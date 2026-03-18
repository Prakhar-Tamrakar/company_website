const ipStore = new Map();

export function rateLimit(ip, limit = 10, windowMs = 60000) {
  const now = Date.now();

  if (!ipStore.has(ip)) {
    ipStore.set(ip, { count: 1, time: now });
    return true;
  }

  const data = ipStore.get(ip);

  if (now - data.time > windowMs) {
    ipStore.set(ip, { count: 1, time: now });
    return true;
  }

  if (data.count >= limit) return false;

  data.count++;
  return true;
}