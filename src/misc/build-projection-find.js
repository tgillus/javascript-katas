const buildProjection = fields => {
  const projection = {};

  fields.sort().forEach(field => {
    const rejectField = deconstruct(field).find((nestedField, index, nestedFields) => {
      const reconstructedPortionOfField = reconstructPortion(nestedFields, index + 1);

      return isFieldInProjection(projection, reconstructedPortionOfField);
    });

    if (!rejectField) projection[field] = 1;
  });

  return projection;
};

const deconstruct = field => {
  const nestedFields = field.split('.');

  return nestedFields.length === 1 ? [] : nestedFields;
};

const reconstructPortion = (nestedFields, end) => nestedFields.slice(0, end).join('.');

const isFieldInProjection = (projection, field) => !!projection[field];

module.exports = { buildProjection };
