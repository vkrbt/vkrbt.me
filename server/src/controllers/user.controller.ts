import { post, requestBody, HttpErrors } from '@loopback/rest';
import { User } from '../models';
import { UserRepository } from '../repositories';
import { repository } from '@loopback/repository';
import { Credentials, JWT_SECRET, saltPassword } from '../auth';
import { promisify } from 'util';
import {randomBytes} from 'crypto';

const { sign } = require('jsonwebtoken');
const signAsync = promisify(sign);

export class UserController {
  constructor(
    @repository(UserRepository) private userRepository: UserRepository,
  ) { }

  @post('/users')
  async createUser(@requestBody() user: User): Promise<Partial<User>> {
    let salt = randomBytes(128).toString('base64');

    if (!user || !user.email || !user.password) {
      throw new HttpErrors.UnprocessableEntity('You should provide credentials');
    }

    const userWithEmail = await this.userRepository.findOne({ where: { email: user.email } });

    if (userWithEmail) {
      throw new HttpErrors.Conflict('User already exists');
    }

    let password = await saltPassword(user.password, salt);

    let storeUser = {
      ...user,
      password,
      salt,
    }

    let createdUser = await this.userRepository.create(storeUser);

    return {
      id: createdUser.id,
      email: createdUser.email,
    }
  }

  @post('/users/login')
  async login(@requestBody() credentials: Credentials) {
    if (!credentials.email || !credentials.password) throw new HttpErrors.BadRequest('Missing Username or Password');
    const user = await this.userRepository.findOne({ where: { email: credentials.email } });
    if (!user) throw new HttpErrors.Unauthorized('Invalid credentials');

    let hash = await saltPassword(credentials.password, user.salt);

    const isPasswordMatched = user.password === hash;
    if (!isPasswordMatched) throw new HttpErrors.Unauthorized('Invalid credentials');

    const tokenObject = { username: credentials.email };
    const token = await signAsync(tokenObject, JWT_SECRET);
    const { id, email } = user;

    return {
      token,
      id: id as string,
      email,
    };
  }
}