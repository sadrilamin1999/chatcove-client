const FormControl = ({
  label,
  labelInner,
  inputType,
  placeholder,
  formFields,
  setFormFeilds,
}) => {
  return (
    <div className="form-control flex flex-col gap-2">
      <label htmlFor={label} className="cursor-pointer">
        {labelInner}
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        id={label}
        value={formFields[label]}
        onChange={(e) =>
          setFormFeilds({ ...formFields, [label]: e.target.value })
        }
        className="border px-5 py-3 w-[25rem] outline-none rounded-md focus:border-violet-600 duration-300"
      />
    </div>
  );
};

export default FormControl;
