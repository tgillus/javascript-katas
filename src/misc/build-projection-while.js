const buildProjection = fields => {
  const projection = {};

  fields.sort().forEach(field => {
    const splitFields = field.split('.');
    let reject = false;

    while (splitFields.length > 1) {
      splitFields.pop();

      if (projection[splitFields.join('.')]) {
        reject = true;
        break;
      }
    }

    if (!reject) projection[field] = 1;
  });

  return projection;
};

module.exports = { buildProjection };