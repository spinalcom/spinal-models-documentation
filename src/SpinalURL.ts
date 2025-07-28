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
  type Val,
  type Str,
} from 'spinal-core-connectorjs';

export class SpinalURL extends Model {
  date: Val;
  URL: Str;
  name: Str;

  constructor();
  constructor(name: string, url: string);
  constructor(name?: string, url?: string) {
    super();
    if (FileSystem._sig_server === false) return;

    this.add_attr({
      date: Date.now(),
      URL: url,
      name: name,
    });
  }
}

spinalCore.register_models(SpinalURL);
