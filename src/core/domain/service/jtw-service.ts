export interface JwtService {
  signAsync(payload: any): Promise<string>;
}

export const IJwtService = Symbol('IJwtService')
