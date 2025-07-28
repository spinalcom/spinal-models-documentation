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
} from 'spinal-core-connectorjs';

export class SpinalFile extends Model {
  public id: Str;
  public name: Str;

  constructor();
  constructor(id: string, name: string);
  constructor(id?: string, name?: string) {
    super();
    if (FileSystem._sig_server === false) return;
    if (id === undefined) this.add_attr('id', id);
    if (name === undefined) this.add_attr('name', name);
  }
}

spinalCore.register_models(SpinalFile);
