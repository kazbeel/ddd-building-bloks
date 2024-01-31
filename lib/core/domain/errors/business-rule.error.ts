import { BusinessRule } from '../business-rule.interface';

export class BusinessRuleError extends Error {
  constructor(public readonly brokenRule: BusinessRule) {
    super(brokenRule.message);
  }
}
