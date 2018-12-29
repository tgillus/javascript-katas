const buildProjection = fields => {
  return fields.sort().map(projectField).reduce(projectAccumulatedFields, {});
};

const projectField = field => {
  return { [field]: 1 };
};

const projectAccumulatedFields = (projection, fieldProjection) => {
  const field = Object.keys(fieldProjection)[0];
  const reject = getNestedFields(field).find((nestedField, index, nestedFields) => {
    return projection[nestedFields.slice(0, index + 1).join('.')];
  });

  return Object.assign({}, projection, reject ? {} : fieldProjection);
};

const getNestedFields = field => {
  const nestedFields = field.split('.');

  return nestedFields.length === 1 ? [] : nestedFields;
};

module.exports = { buildProjection };
