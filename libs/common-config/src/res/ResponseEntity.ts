import { Exclude, Expose } from 'class-transformer';
import { ResultType } from '@app/common-config/res/ResultType';

export class ResponseEntity<Data> {
  @Exclude() private readonly _resultType: string;
  @Exclude() private readonly _data: Data;

  private constructor(result: ResultType, data: Data) {
    this._resultType = ResultType[result];
    this._data = data;
  }

  static ok<Data>(data: Data): ResponseEntity<Data> {
    return new ResponseEntity<Data>(ResultType.SUCCESS, data);
  }

  static error(message: string): ResponseEntity<string> {
    return new ResponseEntity<string>(ResultType.ERROR, message);
  }

  @Expose()
  get result(): string {
    return this._resultType;
  }

  @Expose()
  get data(): Data {
    return this._data;
  }
}
