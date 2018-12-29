class ProjectionBuilder {
  static projection(fields) {
    return fields.sort().reduce(buildProjection, {});
  }
}

const buildProjection = (projection, field) => {
  const rejectField = getNestedFields(field).find((nestedField, index, nestedFields) => {
    return projection[nestedFields.slice(0, index + 1).join('.')];
  });

  return Object.assign(projection, rejectField ? {} : { [field]: 1 });
};

const getNestedFields = field => {
  const splitFields = field.split('.');

  return splitFields.length === 1 ? [] : splitFields;
};

module.exports = { ProjectionBuilder };