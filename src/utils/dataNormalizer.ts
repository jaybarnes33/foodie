export const normalizeGoogleData = async (data: any) => {
  return {
    email: data.email,
    fullName: data.name,
    authProvider: data.googleId && "GOOGLE",
  };
};

export const normalizeFacebookData = async (data: Record<string, any>) => {
  return {
    fullName: data.name,
    authProvider: String(data.graphDomain).toUpperCase(),
    email: data.email,
  };
};
