const buildProjection = fields => {
  return fields.sort().reduce(projection, {});
};

const projection = (projection, field) => {
  const rejectField = decontruct(field).find((nestedField, index, nestedFields) => {
    const reconstructedPortionOfField = reconstructPortion(nestedFields, index + 1);

    return projectionContainsField(projection, reconstructedPortionOfField);
  });

  return rejectField ? projection : Object.assign({}, projection, { [field]: 1 });
};

const decontruct = field => {
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