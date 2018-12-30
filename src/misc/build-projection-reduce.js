const buildProjection = fields => {
  return fields.sort().reduce(projection, {});
};

const projection = (projection, field) => {
  const rejectField = getNestedFields(field).find((nestedField, index, nestedFields) => {
    return projection[nestedFields.slice(0, index + 1).join('.')];
  });

  return rejectField ? projection : Object.assign({}, projection, { [field]: 1 });
};

const getNestedFields = field => {
  const nestedFields = field.split('.');

  return nestedFields.length === 1 ? [] : nestedFields;
};

module.exports = { buildProjection };