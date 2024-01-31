export interface BusinessRule {
  isBroken(): boolean;

  get message(): string;
}
