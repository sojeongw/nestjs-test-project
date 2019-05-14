import {
  BadRequestException,
  ArgumentMetadata,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  // Every pipe has to provide the transform() method.
  // value: the currently processed argument (before it is received by the route handling method)
  // metadata: its metadata
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    // plainToClass() to transform our plain JavaScript argument object
    // into a typed object so that we can apply validation
    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }

  toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
