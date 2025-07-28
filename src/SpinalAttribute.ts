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
  type Str,
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

    if (label === undefined) this.add_attr('label', label);
    if (value === undefined) this.add_attr('value', value);
    if (type === undefined) this.add_attr('type', type);
    if (unit === undefined) this.add_attr('unit', unit);
    this.add_attr('lastModificationDate', Date.now());
  }
}

spinalCore.register_models(SpinalAttribute);
