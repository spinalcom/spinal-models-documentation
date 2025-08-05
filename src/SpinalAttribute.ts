/*
 * Copyright 2020 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 *
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 *
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */

import {
  FileSystem,
  spinalCore,
  Model,
  Str,
  type Val,
} from 'spinal-core-connectorjs';

export class SpinalAttribute extends Model {
  public label: Str;
  public value: Str;
  public lastModificationDate: Val;
  public type?: Str;
  public unit?: Str;

  constructor();
  constructor(label: string, value: string, type?: string, unit?: string);
  constructor(label?: string, value?: string, type?: string, unit?: string) {
    super();
    if (FileSystem._sig_server === false) return;

    if (label !== undefined) this.add_attr('label', label);
    if (value !== undefined) this.add_attr('value', value);
    if (type !== undefined) this.add_attr('type', type);
    if (unit !== undefined) this.add_attr('unit', unit);
    this.add_attr('lastModificationDate', Date.now());
  }

  public updateSpinalAttributeDate() {
    this.upgradeDate();
    this.lastModificationDate.set(Date.now());
  }
  public upgradeDate() {
    if (typeof this.date !== 'undefined') {
      this.rem_attr('date');
      this.add_attr('lastModificationDate', Date.now());
    } else if (typeof this.lastModificationDate === 'undefined') {
      this.add_attr('lastModificationDate', Date.now());
    }

    const type = this.type?.get();
    const unit = this.unit?.get();

    if (typeof type === 'undefined' && (type === '' || type === '-')) {
      this.rem_attr('type');
    }
    if (typeof unit === 'undefined' && (unit === '' || unit === '-')) {
      this.rem_attr('unit');
    }
  }

  public setValue(value: string) {
    if (this.value instanceof Str === false) {
      this.mod_attr('value', value);
      this.updateSpinalAttributeDate();
    } else if (this.value.set(value)) {
      this.updateSpinalAttributeDate();
    }
  }
  public setLabel(label: string) {
    if (this.label.set(label)) {
      this.updateSpinalAttributeDate();
    }
  }
  public setType(type: string) {
    if (typeof type === 'undefined' || type === '') return this.upgradeDate();
    if (this.type === undefined) {
      this.add_attr('type', type);
      this.updateSpinalAttributeDate();
    } else if (this.type.set(type)) {
      this.updateSpinalAttributeDate();
    }
  }
  public setUnit(unit: string) {
    if (typeof unit === 'undefined' || unit === '') return this.upgradeDate();
    if (this.unit === undefined) {
      this.add_attr('unit', unit);
      this.updateSpinalAttributeDate();
    } else if (this.unit.set(unit)) {
      this.updateSpinalAttributeDate();
    }
  }
}

spinalCore.register_models(SpinalAttribute);
