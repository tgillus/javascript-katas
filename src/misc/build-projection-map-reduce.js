const buildProjection = fields => {
  return fields.sort().map(projectField).reduce(projectAccumulatedFields, {});
};

const projectField = field => {
  return { [field]: 1 };
};

const projectAccumulatedFields = (projection, fieldProjection) => {
  const field = Object.keys(fieldProjection)[0];
  const rejectField = deconstruct(field).find((nestedField, index, nestedFields) => {
    const reconstructedPortionOfField = reconstructPortion(nestedFields, index + 1);

    return isFieldInProjection(projection, reconstructedPortionOfField);
  });

  return rejectField ? projection : Object.assign({}, projection, fieldProjection);
};

const deconstruct = field => {
  const nestedFields = field.split('.');

  return nestedFields.length === 1 ? [] : nestedFields;
};

const reconstructPortion = (nestedFields, end) => nestedFields.slice(0, end).join('.');

const isFieldInProjection = (projection, field) => !!projection[field];

module.exports = { buildProjection };
