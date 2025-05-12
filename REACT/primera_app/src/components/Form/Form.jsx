// CREAMOS UN COMPONENTE DE CERO

import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import schema from "./schemaValidations";

const Form = () => {

    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => console.log(data)
    console.log(errors);

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label className="form-label">Nombre</label>
                    <input
                    {...register('nombre')}
                    className="form-input" />
                    {errors.nombre && <p className="form-error">{errors.nombre.message}</p>}
                </div>
                <div className="form-group">
                    <label className="form-label">Mail</label>
                    <input
                    {...register('mail')}
                    className="form-input" />
                    {errors.mail && <p className="form-error">{errors.mail.message}</p>}
                    </div>
                <div className="form-group">
                    <label className="form-label">Edad</label>
                    <input type="number"
                    {...register('edad')}
                    className="form-input" />
                    {errors.edad && <p className="form-error">{errors.edad.message}</p>}
                </div>
                <div className="form-buttons">
                    <button type="submit" className="form-button submit" >Enviar</button>
                    <button type="button" onClick={() => reset()} className="form-button reset" >Limpiar</button>
                </div>
            </form>
            <div className="watch-values">
                <ul>
                    <li>Nombre: {watch("nombre")}</li>
                </ul>
            </div>
        </div>
    );
};

export default Form;
