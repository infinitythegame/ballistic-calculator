'use strict';

import Band from '/js/src/Range/Band.js';

const short = Symbol('short');
const medium = Symbol('medium');
const long = Symbol('long');
const max = Symbol('max');

export default class Range {
  static fromValues(...bands) {
    let start = 0;
    return new Range(bands.map((band) => {
      let end = band[0];
      band = new Band(start, end, band[1]);
      start = end;
      return band;
    }));
  }

  static fromBands(...bands) {
    return new Range(bands);
  }

  constructor(bands) {
    bands.forEach((band, index, ranges) => {
      let noClash = ranges.filter((b, i) => {
         return (index != i);
      }).every((b) => {
          return !b.in(band.start);
      });
      if (!noClash) {
        throw new RangeException('Bands clash!');
      }
    });

    bands.sort((bandA, bandB) => {
      return bandA.start - bandB.start;
    });

    [short, medium, long, max].forEach((band, index) => {
      this[band] = (bands[index] instanceof Band) ? bands[index] : null;
    });
  }

  *[Symbol.iterator]() {
    yield* this.bands;
  }

  get bands() {
    return new Map([
      ['short', this.short],
      ['medium', this.medium],
      ['long', this.long],
      ['max', this.max]
      ].filter((band) => {
      return (band[1] instanceof Band);
    }));
  }

  get short() {
    return this[short];
  }

  get medium() {
    return this[medium];
  }

  get long() {
    return this[long];
  }

  get max() {
    return this[max];
  }

  in(distance) {
    return Array.from(this.bands.values()).find((band) => {
      if (band.in(distance)) {
        return band;
      }
    }) || false;
  }

  toString() {
    let start = 0;
    let end   = 0;
    this.bands.forEach((band) => {
      start = (band.start > start) ? start : band.start;
      end   = (band.end > end) ? band.end : end;
    });
    return start + '-' + end;
  }
}
