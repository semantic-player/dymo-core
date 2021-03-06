import * as _ from 'lodash';
import { ConstraintGhost, BoundVariableGhost } from '../globals/types';
import { DymoStore } from './dymostore';
import { Constraint } from '../model/constraint';
import { ConstraintWriter } from './constraintwriter';
import { ConstraintLoader } from './constraintloader';

export class SuperStore extends DymoStore {

  private constraintWriter = new ConstraintWriter(this);
  private constraintLoader = new ConstraintLoader(this);
  private activeConstraints = new Map<string,Constraint>();

  addConstraint(ownerUri: string, constraint: ConstraintGhost): string {
    return this.constraintWriter.addConstraint(ownerUri, constraint);
  }

  addVariable(variable: BoundVariableGhost): string {
    return this.constraintWriter.addVariable(variable);
  }

  activateNewConstraints(constraintUris: string[]): string[] {
    let unloadedUris = _.difference(constraintUris, [...this.activeConstraints.keys()]);
    let constraints = this.constraintLoader.loadConstraints(unloadedUris);
    constraints.forEach(c => c.maintain(this));
    unloadedUris.forEach((u,i) => this.activeConstraints.set(u, constraints[i]));
    return unloadedUris;
  }

  deactivateConstraints(constraintUris: string[]) {
    let constraints = constraintUris.map(c => this.activeConstraints.get(c));
    constraints.forEach(c => c ? c.stopMaintaining() : null);
    constraintUris.forEach(c => this.activeConstraints.delete(c));
  }

  getActiveConstraintCount() {
    return this.activeConstraints.size;
  }

}