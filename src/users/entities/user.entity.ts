import { Field, ObjectType } from '@nestjs/graphql';
import { Favorite } from 'src/favorites';

@ObjectType()
export class User {
  @Field({ description: 'User unique identification' })
  id: string;

  @Field({ description: 'User unique login email' })
  email: string;

  @Field({ description: 'User password' })
  password: string;

  @Field({ description: 'User name' })
  name: string;

  @Field(() => [Favorite], { description: 'User favorite characters' })
  favorites: Favorite[];

  @Field({
    description: 'User autogenerated datetimetz last login',
    nullable: true,
  })
  lastLogin: string;

  @Field({
    description: 'User autogenerated datetimetz updated at',
    nullable: true,
  })
  updatedAt: string;

  @Field({
    description: 'User autogenerated datetimetz created at',
    nullable: true,
  })
  createdAt: string;
}
