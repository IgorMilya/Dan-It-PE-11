export const generateSalt = () => {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  return Array.from(randomBytes)
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
}

export const hashPasswordWithSalt = async (password, salt) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + salt);
  const hash = crypto.subtle.digest('SHA-256', data);

  return Array.from(new Uint8Array(await hash))
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
}