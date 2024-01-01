import { ValueTransformer } from 'typeorm';
import { LocalDateTime } from 'js-joda';
import { DateTimeUtils } from '@app/datasource/util/time/DateTimeUtils';

export class LocalDateTimeTransformer implements ValueTransformer {
  from(entityTime: LocalDateTime): Date {
    return DateTimeUtils.toDate(entityTime);
  }

  to(databaseTime: any): LocalDateTime {
    return DateTimeUtils.toLocalDateTime(databaseTime);
  }
}
