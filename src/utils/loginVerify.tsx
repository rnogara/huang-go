'use server';
const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

export const loginVerify = async (data: { email: string; password: string }) => {
  if (data.email === adminEmail && data.password === adminPassword) {
    return true;
  }
  return false;
};