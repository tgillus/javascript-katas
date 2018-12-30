const buildProjection = fields => {
  const projection = {};

  fields.sort().forEach(field => {
    const nestedFields = deconstruct(field);
    let rejectField = false;

    while (nestedFields.length > 1) {
      nestedFields.pop();

      const reconstructedPortionOfField = reconstruct(nestedFields);

      if (projectionContainsField(projection, reconstructedPortionOfField)) {
        rejectField = true;
        break;
      }
    }

    if (!rejectField) projection[field] = 1;
  });

  return projection;
};

const deconstruct = field => {
  const nestedFields = field.split('.');

  return nestedFields.length === 1 ? [] : nestedFields;
};

const reconstruct = (nestedFields) => {
  return nestedFields.join('.');
};

const projectionContainsField = (projection, field) => {
  return projection[field];
};

module.exports = { buildProjection };