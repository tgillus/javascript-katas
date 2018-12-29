const buildProjection = fields => {
  const projection = {};

  fields.sort().forEach(field => {
    const rejectField = getNestedFields(field).find((splitProp, index, nestedFields) => {
      return projection[nestedFields.slice(0, index + 1).join('.')];
    });

    if (!rejectField) projection[field] = 1;
  });

  return projection;
};

const getNestedFields = field => {
  const nestedFields = field.split('.');

  return nestedFields.length === 1 ? [] : nestedFields;
};


module.exports = { buildProjection };