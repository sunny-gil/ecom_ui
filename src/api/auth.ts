const API_URL = import.meta.env.VITE_API_URL;

export interface RegisterDto {
  name: string;
  email: string;
  password: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  success?: boolean;
  message?: string;
  data?: {
    id: string;
    email: string;
  };
  access_token?: string;
}

export const registerUser = async (
  data: RegisterDto
): Promise<AuthResponse> => {
  const res = await fetch(`${API_URL}/v1/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const loginUser = async (
  data: LoginDto
): Promise<AuthResponse> => {
  const res = await fetch(`${API_URL}/v1/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};