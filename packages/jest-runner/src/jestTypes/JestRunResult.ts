import { Config } from '@jest/types';
import { AggregatedResult } from '@jest/test-result';

export interface JestRunResult {
  results: AggregatedResult;
  globalConfig: Config.GlobalConfig;
}
