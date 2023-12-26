import { convert, DateTimeFormatter, LocalDate, LocalDateTime } from 'js-joda';

/**
 * DateTimeUtils class
 */
export class DateTimeUtils {
  private static DATE_FORMATTER: DateTimeFormatter =
    DateTimeFormatter.ofPattern('yyyy-MM-dd');
  private static DATE_TIME_FORMATTER: DateTimeFormatter =
    DateTimeFormatter.ofPattern('yyyy-MM-dd HH:mm:ss');

  /**
   * toDate
   * @param localDate (LocalDate | LocalDateTime) 현재 날짜
   */
  static toDate(localDate: LocalDate | LocalDateTime): Date {
    if (!localDate) {
      return null;
    }
    return convert(localDate).toDate();
  }
}
