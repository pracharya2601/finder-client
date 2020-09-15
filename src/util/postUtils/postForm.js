const form = (name, type, component, label, placeholder) => {
  return (
    <Field
      name={name}
      type={type}
      component={component}
      outlined="outlined"
      label={label}
      placeholder={placeholder}
    />
  );
};

const checkForm = (name, component, label) => {
  return <Field name={name} component={component} label={label} />;
};
