import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredencialDTO } from './dto/auth-credentials.dto';
import { UserRepository } from './repository/users.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  /**
   *
   */
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  async singUp(authCredentialsDto: AuthCredencialDTO): Promise<void> {
    return this.userRepository.createUser(authCredentialsDto);
  }

  async signIn(authCredentialsDto: AuthCredencialDTO): Promise<{accessToken: string}> {
    const { username, password } = authCredentialsDto;

    const user = await this.userRepository.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { username };
      const accessToken: string = await this.jwtService.sign(payload);
    
      return { accessToken }

    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }
}
