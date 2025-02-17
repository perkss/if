import {ArgumentConfig} from 'ts-command-line-args';

import {impactProcessArgs} from '../types/process-args';

export const CONFIG = {
  impact: {
    ARGS: {
      impl: {
        type: String,
        optional: true,
        alias: 'i',
        description: 'Path to an input IMPL file.',
      },
      ompl: {
        type: String,
        optional: true,
        description:
          'Path to the output IMPL file where the results as saved, if none is provided it prints to stdout.',
      },
      format: {
        type: String,
        optional: true,
        description:
          'The output file format. default to yaml but if csv is specified then it formats the outputs as a csv file for loading into another program.',
        defaultValue: 'yaml',
      },
      verbose: {
        type: Boolean,
        optional: true,
        description:
          'How much information to output about the calculation to aid investigation and debugging.',
      },
      help: {
        type: Boolean,
        optional: true,
        alias: 'h',
        description: 'Prints this usage guide.',
      },
    } as ArgumentConfig<impactProcessArgs>,
    HELP: `impact 
  -impl [path to the input impl file]
  -ompl [path to the output impl file]
  -format [yaml|csv] 
  -verbose
  -help 
  impl: path to an input IMPL file
  ompl: path to the output IMPL file where the results as saved, if none is provided it prints to stdout.
  format: the output file format. default to yaml but if csv is specified then it formats the outputs as a csv file for loading into another program.
  verbose: how much information to output about the calculation to aid investigation and debugging.
  help: prints out the above help instruction.
  `,
  },
  GITHUB_PATH: 'https://github.com',
  NATIVE_MODEL: 'if-models',
};
