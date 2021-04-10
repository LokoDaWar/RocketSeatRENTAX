import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserCase } from "./AuthenticateUserCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserCase = container.resolve(AuthenticateUserCase);

    const token = await authenticateUserCase.execute({
      email,
      password,
    });

    return response.json(token);
  }
}

export { AuthenticateUserController };
