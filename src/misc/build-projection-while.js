const buildProjection = fields => {
  const projection = {};

  fields.sort().forEach(field => {
    const nestedFields = field.split('.');
    let rejectField = false;

    while (nestedFields.length > 1) {
      nestedFields.pop();

      if (projection[nestedFields.join('.')]) {
        rejectField = true;
        break;
      }
    }

    if (!rejectField) projection[field] = 1;
  });

  return projection;
};

module.exports = { buildProjection };