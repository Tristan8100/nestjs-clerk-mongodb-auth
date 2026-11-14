
import { Module } from '@nestjs/common';
import { ClerkAuthGuard } from './guards/clerk-auth/clerk-auth.guard';

@Module({
  providers: [ClerkAuthGuard],
  exports: [ClerkAuthGuard],
})
export class AuthModule {}
