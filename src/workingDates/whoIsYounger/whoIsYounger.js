export function whoIsYounger(d1, d2) {
  if (d1 || d2 || new Date(d1) !== 'Invalid Date' || new Date(d2) !== 'Invalid Date') {
    const dt1 = new Date(d1).getTime();
    const dt2 = new Date(d2).getTime();

    if (dt1 < 0 && d2 < 0) {
      if (dt1 > dt2) {
        return d1.toDateString();
      } else {
        return d2.toDateString();
      }
    } else if (dt1 < 0 && d2 > 0) {
      return d2.toDateString();
    } else if (dt1 > 0 && d2 < 0) {
      return d1.toDateString();
    } else if (dt1 > 0 && d2 > 0) {
      if (dt1 < dt2) {
        return d2.toDateString();
      } else {
        return d1.toDateString();
      }
    }
  } else {
    return undefined;
  }
}
