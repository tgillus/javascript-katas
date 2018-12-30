const buildProjection = fields => {
  const projection = {};

  fields.sort().forEach(field => {
    const rejectField = deconstruct(field).find((nestedField, index, nestedFields) => {
      const reconstructedPortionOfField = reconstructPortion(nestedFields, index + 1);

      return projectionContainsField(projection, reconstructedPortionOfField);
    });

    if (!rejectField) projection[field] = 1;
  });

  return projection;
};

const deconstruct = field => {
  const nestedFields = field.split('.');

  return nestedFields.length === 1 ? [] : nestedFields;
};

const reconstructPortion = (nestedFields, end) => {
  return nestedFields.slice(0, end).join('.');
};

const projectionContainsField = (projection, field) => {
  return projection[field];
};

module.exports = { buildProjection };