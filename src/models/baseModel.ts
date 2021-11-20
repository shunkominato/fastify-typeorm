import { validate } from 'class-validator';

export class BaseWriteModel {
  async validate({
    method,
    groups = [],
  }: {
    method?: 'CREATE' | 'UPDATE';
    groups?: string[];
  }) {
    const groupValue = [...groups];
    if (method) groupValue.push(method);

    const validationErrorObjs = await validate(this, {
      groups: groupValue,
      skipUndefinedProperties: true,
    });

    if (validationErrorObjs.length) return true;

    return false;
  }
}
