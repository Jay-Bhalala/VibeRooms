import { useState } from 'react';

const useForm = (initialValues, callback) => {
    const [inputs, setInputs] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        const validationErrors = validate(inputs);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            callback();
        }
    };

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    };

    const validate = (values) => {
        let errors = {};
        if (!values.email) {
            errors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email address is invalid';
        }
        return errors;
    };

    return {
        handleSubmit,
        handleInputChange,
        inputs,
        errors
    };
};

export default useForm;