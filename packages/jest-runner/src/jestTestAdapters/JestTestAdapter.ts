import { JestRunResult } from '../jestTypes/JestRunResult';

export default interface JestTestAdapter {
  run(config: object, projectRoot: string, fileNameUnderTest?: string): Promise<JestRunResult>;
}
