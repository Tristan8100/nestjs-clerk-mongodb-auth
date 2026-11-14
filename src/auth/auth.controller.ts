
import { Controller, Get, UseGuards } from '@nestjs/common';
import { ClerkAuthGuard } from './guards/clerk-auth/clerk-auth.guard';
import { CurrentUser } from './decorators/current-user/current-user.decorator';
import type { ClerkUser }  from './decorators/current-user/current-user.decorator';

@Controller('auth')
export class AuthController {
  @Get('me')
  @UseGuards(ClerkAuthGuard)
  getCurrentUser(@CurrentUser() user: ClerkUser) {
    return {
      message: 'Authenticated successfully',
      user,
    };
  }
}
