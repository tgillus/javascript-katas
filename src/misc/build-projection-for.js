const buildProjection = fields => {
  const projection = {};

  fields.sort().forEach(field => {
    const nestedFields = field.split('.');
    let rejectField = false;

    for (let index = 0; index < nestedFields.length; index++) {
      if (projection[nestedFields.slice(0, index + 1).join('.')]) {
        rejectField = true;
        break;
      }
    }

    if (!rejectField) projection[field] = 1;
  });

  return projection;
};

module.exports = { buildProjection };