const buildProjection = (fields) => {
  const projection = {};

  fields.sort().forEach((field) => {
    const nestedFields = deconstruct(field);
    let rejectField = false;

    while (nestedFields.length > 1) {
      nestedFields.pop();

      const reconstructedPortionOfField = reconstruct(nestedFields);

      if (fieldIsInProjection(projection, reconstructedPortionOfField)) {
        rejectField = true;
        break;
      }
    }

    if (!rejectField) projection[field] = 1;
  });

  return projection;
};

const deconstruct = field => field.split('.');

const reconstruct = nestedFields => nestedFields.join('.');

const fieldIsInProjection = (projection, field) => projection[field];

module.exports = { buildProjection };
