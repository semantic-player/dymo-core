import { VALUE } from '../globals/uris';
import { SuperDymoStore } from '../globals/types';

/**
 * A control actively changes its value.
 */
export class Control {

  private value: number;

  constructor(protected uri: string, private name: string, private type: string, protected store: SuperDymoStore) {
    this.store.addValueObserver(this.uri, VALUE, this);
  }

  getName() {
    return this.name;
  }

  getUri() {
    return this.uri;
  }

  getValue(): number {
    return this.value;
  }

  getType() {
    return this.type;
  }

  updateValue(newValue) {
    if (newValue != null) {
      this.setValue(newValue);
    }
  }

  protected resetValue() {
    this.value = undefined;
    this.store.setValue(this.uri, VALUE, null);
  }

  protected setValue(newValue): boolean {
    if (newValue != null) {
      if (this.value == undefined || Math.abs(newValue - this.value) > 0.000001) { //deal with floating point errors
        this.value = newValue;
        this.store.setValue(this.uri, VALUE, newValue);
        return true;
      }
    }
  }

  observedValueChanged(uri: string, _type: string, value: number | string) {
    if (uri === this.uri) {
      this.setValue(value);
    }
  }

}
